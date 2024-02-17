const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rootRouter = require("./routes/index.js");
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
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1",rootRouter);


app.listen(port,()=>{
    connect()
    console.log("server listening on"+ port)
})

