const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rootRouter = require("./routes/index.js");
const cookieParser = require('cookie-parser');

const connect = () => {
    mongoose
      .connect("mongodb+srv://medivyapatel27:divya@cluster0.gzsdroo.mongodb.net/paytm")
      .then(() => {
        console.log("Connected to DB");
      }).catch((err) => {
        throw err;
      });
  };
// const connect = async()=>{
//         await db.connect("mongodb+srv://medivyapatel27:divya@cluster0.gzsdroo.mongodb.net/paytm")
//         console.log("Connected to MongoDB")

// }
const port = 3000;
const app = express();
app.use(cors({ credentials: true,origin: ["http://localhost:5173"]}));
app.use(cookieParser());
app.use(express.json());


app.use("/api/v1",rootRouter);


app.listen(port,()=>{
    connect()
    console.log("server listening on"+ port)
})

