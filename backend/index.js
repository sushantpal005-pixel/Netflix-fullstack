//step-1
//const express = require("express")
import express from "express"
import dotenv from "dotenv"
import databaseConnection from "./utils/database.js"
import cookieParser from "cookie-parser"
import userRoute from "./routes/userRoute.js"
import cors from "cors"

dotenv.config({
    path: "./.env"
})
databaseConnection()
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

//api
app.use("/api/v1/user", userRoute)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is listen at port ${process.env.PORT} `)
})