const House = require('../models/houses');
const houseCtr = {};

houseCtr.getHouses = async (req, res) => {
    const houses = await House.find();
    res.json(houses);
};
houseCtr.createHouse = async (req, res) => {
    const house = new House(req.body);
    await house.save();
    res.json("House created!");
};
houseCtr.getHouse = async (req, res) =>{
    const house = await House.findById(req.params.id);
    res.json(house);
};
houseCtr.editHouse = async (req, res) =>{
    const{id}=req.params;
    const house={
            title: req.body.title,
            precio: req.body.precio,
            direccion: req.body.direccion,
            servicios:req.body.servicios,
            comentarios: req.body.comentarios,
            images:req.body.images        
    };
    await House.findByIdAndUpdate(id, {$set: house},{new: true});
    res.json({status: 'House Updated'});                                               
};
houseCtr.deleteHouse = async (req, res) =>{
    await House.findByIdAndDelete(req.params.id);
    res.json({status: 'House Deleted'});                                                
};
module.exports = houseCtr;