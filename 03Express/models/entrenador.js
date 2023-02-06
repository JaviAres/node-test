const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const entrenadorSchema = new Schema({
    nombre: String,
    tipo: String,
    descripcion: String,
    ciudad:String
})

const Entrenador = mongoose.model('database_entrenador', entrenadorSchema, "entrenador");

module.exports = Entrenador;
