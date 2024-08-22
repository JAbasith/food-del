import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer"


const foodRouter = express.Router();

//when we fill form it will get post method if file then push method 

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req,file,cb)=> {
        // using Date our file will be unique
        return cb(null, `${Date.now()}${file.originalname}`)
        //that file will be stored in upload folder
    }
})

//middle where upload is setteled

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)




export default foodRouter;
