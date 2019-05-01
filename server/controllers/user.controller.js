const User = require('../models/users');

const userCtr = {};

userCtr.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);

};

userCtr.getUser = async (req, res) =>{
    const user = await User.findById(req.params.id);
    res.json(user);
    console.log(req.body);
};

    
userCtr.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json("User created!");
    
};

userCtr.deleteUser = async (req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.json({status: 'User Deleted'});                                                
};




module.exports = userCtr;