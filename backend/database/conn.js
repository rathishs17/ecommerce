const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://717821l339:rathish123@cluster0.0573zmj.mongodb.net/xstore')
.then(()=>{
    console.log(`connected to database`)
})
.catch((err)=>{
    console.log(err);
})