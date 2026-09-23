import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { z } from 'zod'

dotenv.config()

const env = z.object({
  PORT: z.coerce.number().int().positive().default(3000),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
}).parse(process.env)

const app = express()
app.use(cors({ origin: env.CORS_ORIGIN }))
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'tourisme-api' })
})

app.listen(env.PORT, () => {
  console.log(`API listening on http://localhost:${env.PORT}`)
})
