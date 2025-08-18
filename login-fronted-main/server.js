const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Azure App Service用の環境設定 - プロダクションを強制
process.env.NODE_ENV = 'production'
const dev = false // Azure App Serviceでは常にプロダクションモード
const hostname = process.env.WEBSITE_HOSTNAME || '0.0.0.0'
const port = process.env.PORT || 3000

console.log(`Starting Next.js server...`)
console.log(`Environment: ${process.env.NODE_ENV}`)
console.log(`Development mode: ${dev}`)
console.log(`Hostname: ${hostname}`)
console.log(`Port: ${port}`)

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        // ヘルスチェック用のエンドポイント
        if (req.url === '/health') {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }))
          return
        }

        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('Error occurred handling', req.url, err)
        res.statusCode = 500
        res.end('Internal server error')
      }
    })

    server.listen(port, (err) => {
      if (err) {
        console.error('Failed to start server:', err)
        throw err
      }
      console.log(`> Server ready on http://${hostname}:${port}`)
      console.log(`> Started at: ${new Date().toISOString()}`)
    })

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully')
      server.close(() => {
        console.log('Server closed')
        process.exit(0)
      })
    })

    process.on('SIGINT', () => {
      console.log('SIGINT received, shutting down gracefully')
      server.close(() => {
        console.log('Server closed')
        process.exit(0)
      })
    })
  })
  .catch((ex) => {
    console.error('Failed to start Next.js:', ex)
    process.exit(1)
  })
