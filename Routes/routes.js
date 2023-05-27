import express from "express";

import Dish from "../db/schema.js";

const route=express.Router();



route.post('/savedata',async (req,res)=>{
    console.log(req.body);
    try{
        const validateuser = await Dish(req.body);
        console.log(validateuser);
        const data = await validateuser.save();
        console.log(data);
    }
    catch(e){
        console.log("error from api");
    }
    res.json({ mess: "data is saved" });
})


route.get("/getdata", async (req, res) => {
//   console.log(req.body);
    console.log("hello");
  try {
    const data = await Dish.find({});
    console.log(data.length);
    data.forEach((e,i)=>{
        console.log(i);
    })
    res.status(200).json({data:data});
  } catch (e) {
    console.log("error from api");
  }
//   res.json({ mess: "data is saved" });
});

export default route;