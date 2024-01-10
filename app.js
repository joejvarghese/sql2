const express = require('express')
const http=require('http')
const morgan=require('morgan')
const config=require('./config')
const {connectToSqlServer} = require('./Database/Connection');
const routes = require('./Routes');



const app =express();
app.use(express.json())
app.use(morgan('dev'))

connectToSqlServer()

routes(app)

const server=http.createServer(app)
const  PORT =config.PORT

server.listen( PORT, ()=>{
    console.log(`server started at port :${PORT}`);
})




