





import mongoose from "mongoose";




const Dish_user= mongoose.Schema({
    img_src:String,
    City:String,
    "Dish Name":String,
    Rating:String,
    "Hotel Name": String,
    Stars:String
})

const Dish =new mongoose.model('Dishes',Dish_user);
export default Dish;