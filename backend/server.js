import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"

//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/api/user", userRouter)

//that we can access any photo witth using this /images
app.use("/images",express.static('uploads'))

<<<<<<< Updated upstream
=======
app.use("/api/user", userRouter)

app.use("/api/cart",cartRouter)


>>>>>>> Stashed changes
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


// mongodb+srv://greatestack:33858627@cluster0.6sv2f.mongodb.net/?

