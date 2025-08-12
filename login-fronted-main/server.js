const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const path = require('path')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.WEBSITE_HOSTNAME || 'localhost'
const port = process.env.PORT || 8080

// Ensure .next directory exists
const nextDir = path.join(__dirname, '.next')
if (!fs.existsSync(nextDir)) {
  console.log('.next directory not found, creating...')
  fs.mkdirSync(nextDir, { recursive: true })
}

const app = next({ dev, hostname, port, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
