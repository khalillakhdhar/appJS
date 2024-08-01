const mongoose =require("mongoose")
mongoose.connect('mongodb://127.0.0.1/demodb')
const db=mongoose.connection;
db.on('error',console.error.bind(console,'connexion impossible'));
db.once('open',()=>
{
    console.log("connexion à mongodb")
});
const UserSchema=new mongoose.Schema(
    {
        name:{
        type:String,
        required:true
        },
        age:{
            type:Number,
            min:18,
            max:80
        },
        email:
        {
            type:String ,
            required:true,
            unique:true
        }
    }
);

const User=mongoose.model("User",UserSchema);