const mongoose=require("mongoose");

const geoSchema = new Schema({
    type:{
        type:String,
        default:"Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})
// const donationrecievedSchmea=mongoose.Schema({
//     itemName:{
//         type:String
//     },
//     qty:{
//         type:Number
//     }

// })
const recipientSchema=mongoose.model({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    // donationrecieved:[orderSchema],
    // recipientuid:{
    //     type:Number,
    //     required:true
    // }
})

const Recipient=mongoose.model("Recipient",recipientSchema);

module.exports=Recipient;