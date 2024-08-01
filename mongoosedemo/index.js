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
/*const createUser = async () => {
    const newUser = new User({
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
    });
    try {
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser);
    } catch (error) {
    console.error('Error saving user:', error);
    }
    };
    createUser();
    */
    const getUsers = async () => {
        try {
        const users = await User.find({name:"John Doe",age:35});
        console.log('Users:', users);
    } catch (error) {
        console.error('Error fetching users:', error);
        }
        };
        getUsers();
        const updateUser = async (id) => {
            try {
            const updatedUser = await User.findByIdAndUpdate(id, { age: 45 }, { new: true });
            console.log('Updated user:', updatedUser);
            } catch (error) {
            console.error('Error updating user:', error);
            }
            };
            updateUser('66ab9976c0765f418ea67a72');
    getUsers();
           