'use strict'

import express from 'express'
import { randomUUID } from 'node:crypto'

const app = express() // We are using Express.js for this sample.
const UUID = randomUUID() // Generate UUID to identify the container.

app.get('/', (req, res) => {
	res.send(`Hello World! from ${UUID}`)
})

export { app, UUID }