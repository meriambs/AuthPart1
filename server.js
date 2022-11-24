const express = require('express')
const cors = require('cors')
const app = express()
const connectdb = require('./config/connect')
const port = 5000
//routes 
const userRoutes = require('./routes/user')
require('dotenv').config()

app.use(cors())
app.use(express.json())

//conncetion m3a el db 
connectdb()

//routes 
//authentification 
app.use('/auth',userRoutes)



app.listen(port,(err)=>{
    err?console.log(err):console.log(`you are connected to the ${port}`)
})