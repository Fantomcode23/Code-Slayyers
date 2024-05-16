const express=require("express");
const app=express();
const cors=require("cors");
const { default: mongoose } = require("mongoose");
const donor = require("./database/donorSchema");
app.use(cors());
app.use(express.json());
app.get("/lochan",async function(req,res){
    const response=await donor.create({
        name:"Lochan",
        email:"sgfgfgs",
        password:"fddfdgd"
    });
    console.log(response);

    res.json({
        msg:"Success"
    })
})

mongoose.connect('mongodb://localhost:27017/hackathon')
  .then(() => {
    console.log('Connected to MongoDB');

    // createProduct();
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get("/",function(req,res){


})

// Signup Route
app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newDonor = new Donor({ name, email, password });
        await newDonor.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(3002, () => {
    console.log('Server running on port 3002');
});

//app.listen(3002);