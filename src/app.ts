import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/routes'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('src/uploads'))
app.use(routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`servidor rodando em http://localhost:${PORT}`))
