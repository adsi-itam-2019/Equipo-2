const mongoose = require('mongoose');
const { Schema } = mongoose;
const HouseSchema = new Schema({
    title: {type: String, required: true},
    precio: {type: Number,required: true},
    direccion: {type: String, required:true},
    servicios:{
        amueblado:{type:Boolean,required:false},
        wifi:{type:Boolean,required:false},
        luz:{type:Boolean,required:false},
        agua:{type:Boolean,required:false},
        gas:{type:Boolean,required:false},
        cocina:{type:Boolean,required:false},
        lavadora:{type:Boolean,required:false},
    },
    comentarios: { type: String, required: true },
    images: { type: [String], required: true },
});

module.exports = mongoose.model('House', HouseSchema);