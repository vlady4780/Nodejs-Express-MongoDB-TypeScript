import express,{Express,Request,Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { runDB } from './app/models/index.models'

const allowedOrigins = ['http://localhost:3000']

const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins
}

dotenv.config()

const app : Express = express()

app.use(cors(corsOptions))

// * parse requests of content-type - application/json
app.use(express.json())

// * parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// *Connect to Database
runDB()

app.get('/',(req:Request, res:Response)=>{
    res.json({message :'Express + TypeScript Server',status:'200'})
})

// * set port, listen for requests
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running on Port: ${port}`)
})