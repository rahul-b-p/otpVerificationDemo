require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 4000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server Running at port ${PORT}`);
})