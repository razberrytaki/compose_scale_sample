'use strict'

import { app, UUID } from './index.js'

const PORT = process.env.SERVER_PORT || 3000

app.listen(PORT, () => {
	console.log('Server is running on port', PORT, 'uuid', UUID)
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  app.close(() => {
    console.log('HTTP server closed')
  })
})