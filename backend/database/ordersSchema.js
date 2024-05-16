const mongoose=require("mongoose");
const { Schema } = mongoose;

const orderSchema=mongoose.model({
    recId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Recipient'
    },
    donorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Donor'
    },
    category:{
        type:String,
        required:true
    },
    itemname:String,
    qty:Number,
    expiryDate:Date,
    orderDate:Date
    

})

const orders=mongoose.model("Orders",orderSchema);
module.exports=orders;