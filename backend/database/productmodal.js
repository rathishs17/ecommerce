const mongoose=require('mongoose');

const productschema=new mongoose.Schema({
    name:{type:String, required:true},
    img:{type:String, required: true},
    cost:{type: Number, required: true}
})

module.exports=new mongoose.model('Product',productschema)