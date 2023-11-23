// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
    app.on((error) => {
        console.log("ERROR", err);
        throw err;
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!!", err);
})























// First Approch

// import express from "express"
// const app = express()

// //semicolon for cleaning (Agar previous line mai semi colon na laye toh problem na ho)
// ;( async () => {
//     try{
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERROR", error);
//             throw err
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error("ERROR ", error);
//         throw err
//     }
// })()   
