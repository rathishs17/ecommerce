const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const bodyParser = require('body-parser');
require('./database/conn');
app.use(bodyParser());
app.use(cors())
const product_data = require('./database/productmodal')

app.get('/',async(req,res)=>{
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

app.listen(port,()=>{
        console.log(`Connected to port ${port} 🚀`);
})