import mongoose from "mongoose";



const db_conn=async ()=>{
    try{
        const DB="mongodb+srv://moanas123khan:Ashad123@cluster0.axgo1ft.mongodb.net/?retryWrites=true&w=majority";
        var connect= await mongoose.connect(DB,{
            
          useUnifiedTopology: true,
          useNewUrlParser: true
        
        })
        console.log("DB is connected");
    }
    catch(e){
        console.log(e);
    }
    return "hell"
}
export default db_conn;