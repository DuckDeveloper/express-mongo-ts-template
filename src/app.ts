import cors from 'cors'
import express from 'express'

import { BASE_CLIENT_URI, PORT } from './env-constants'

const app = express()

app.use(express.json())
app.use(
	cors({
		origin: BASE_CLIENT_URI,
	}),
)

app.get('/', (req, res) => {
	res.send('Backend Typescript Template')
})

app.listen(PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
