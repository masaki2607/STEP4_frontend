const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// プロダクション環境を強制
process.env.NODE_ENV = 'production'

const dev = false // 必ずプロダクションモード
const hostname = '0.0.0.0'
const port = process.env.PORT || 3000

console.log(`Starting server in ${process.env.NODE_ENV} mode on ${hostname}:${port}`)

const app = next({ dev, hostname, port })
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
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
    console.log(`> Environment: ${process.env.NODE_ENV}`)
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
