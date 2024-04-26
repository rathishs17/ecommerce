const express = require('express');
const app = express();
const cors = require('cors');
const port = 5001;
const bodyParser = require('body-parser');
require('./database/conn');
app.use(bodyParser());
app.use(cors())
const product_data = require('./database/productmodal')
const user_data =require('./database/usermodal')

app.get('/',async(req,res)=>{
        console.log("data")
        const response = await product_data.find({});
        res.json(response)
})
app.post('/newProduct',(req,res)=>{
        const newProduct = new product_data(req.body);
        newProduct.save()
        .then(()=>res.json({message:"Added product successfully"}))
        .catch(err=>res.json({message:err}))
        
})
// get, post, delete, put
app.delete('/deleteProduct/:name',(req,res)=>{
        const {name} = req.params;
        console.log(req.params);
        product_data.deleteOne({name:name})
        .then(()=>res.json({message:"Delete product successfully"}))
        .catch((err)=>res.json({message:err}))

})

app.post('/signUp',(req,res)=>{
        console.log("Sign Up");
        const newuser = new user_data(req.body);
        newuser.save()
        .then(()=>res.json({message:"Added user successfully"}))
        .catch(err=>res.json({message:err}))
        
})

app.post('/loginpage',async(req,res)=>{
        console.log("Logging in");
        const filter={email:req.body.email,password:req.body.password};
        const filteredData=await user_data.find(filter);
        console.log(req.body);
        if(filteredData.length==0)
        {
            console.log("No succh user available");
            res.status(404).send("Invalid username or password");
        }
        else
        {
           
            
            res.status(200).json({
                filteredData
            });
        }
})


app.listen(port,()=>{
        console.log(`Connected to port ${port} 🚀`);
})
