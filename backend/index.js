const connectToMongo = require('./db');
var cors = require('cors')
connectToMongo();
const express = require('express')
const app = express()
app.use(cors())

const port = 4000
app.use(express.json())


//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
    res.send('Hello aditya')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})