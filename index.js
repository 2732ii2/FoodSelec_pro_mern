



import db_conn from "./db/db.js";
import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import route from "./Routes/routes.js";
const app =express();
app.use(cors());
// app.use(express.limit(100000000));
// app.get("/",(req,res)=>{
//     console.log("hello");
//     res.send("hello from the other side");
// })
// app.use(bodyparser.json({ extended: true }));
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json({ limit: "10mb" }));
app.use(bodyparser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/",route);
db_conn();

const Port = process.env.Port || "8000";

app.listen(Port, () => {
  console.log("connected");
});