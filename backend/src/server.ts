import express from 'express'
import cors from 'cors'

const app = express()

app.get('/', (request, response) => {
    return response.json({message: "hello todo app"})
})

app.use(cors())
app.use(express.json())
app.listen(3333)
