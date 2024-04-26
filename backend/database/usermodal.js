const mongoose=require('mongoose');

const userschema=new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required: true},
    password:{type: Number, required: true}
})

module.exports=new mongoose.model('User',userschema)