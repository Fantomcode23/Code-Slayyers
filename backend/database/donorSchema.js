const mongoose=require("mongoose");
const { Schema } = mongoose;
const geoSchema = mongoose.Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})

const donorSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})
const donor=mongoose.model("Donor",donorSchema);

module.exports=donor;