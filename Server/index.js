import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

//routes
import trackerRoutes from './routes/tracker.js'
import userRoutes from './routes/users.js'
//Configuration
dotenv.config();
const PORT = process.env.PORT || 5000

//Create app
const app = express();

//Middleware
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(express.json())
app.use(cors())
app.use('/tracker', trackerRoutes) 
app.use('/users', userRoutes) 

//Database COnnection
mongoose.connect(process.env.CONNECTION_URL,
    {
         useNewUrlParser : true,
         useUnifiedTopology: true
    }).then(()=>{
        app.listen(PORT, () => console.log("Server running on port", PORT))
    }).catch((error)=>{
        console.log(error.message)
})
app.get('/',(req,res)=>{
    res.json("Hello")
})