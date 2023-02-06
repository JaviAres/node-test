const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ciudadSchema = new Schema({
    nombre: String,
    localizacion: String,
    descripcion: String,
})

const Ciudad = mongoose.model('database_ciudad', ciudadSchema, "ciudad");

module.exports = Ciudad;
