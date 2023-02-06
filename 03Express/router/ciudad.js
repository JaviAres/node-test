
const express = require('express');
const router = express.Router();
const Ciudad = require('../models/ciudad');
router.get('/', async (req, res) => {
    try {
        //Le pondremos arrayCiudadDB para diferenciar
        //los datos que vienen de la base de datos
        //con respecto al arrayCiudad que tenemos EN LA VISTA
        const arrayCiudadDB = await Ciudad.find();
        console.log(arrayCiudadDB);
        res.render("ciudad", { 
            arrayCiudad: arrayCiudadDB,
        })
    } catch (error) {
        console.error(error)
    }
})


router.get('/crearciudad', (req, res) => {
    res.render('crearciudad'); 
 })

 router.post('/', async (req, res) => {
    const body = req.body
    
    console.log(body) 
    try {
        const ciudadDB = new Ciudad(body) 
        await ciudadDB.save()
        res.redirect('/ciudad') 
    } catch (error) {
        console.log('error', error)
    }
})
router.get('/:id', async(req, res) => {
    const id = req.params.id 
    
    try {
        const ciudadDB = await Ciudad.findOne({ _id: id })
        console.log(ciudadDB) 
        res.render('detalleciudad', { 
            ciudad: ciudadDB,
            error: false
        })
    } catch (error) { 
        console.log('Se ha producido un error', error)
        res.render('detalleciudad', {
            error: true,
            mensaje: 'Ciudad no encontrado!'
        })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id desde backend', id)
    try {
      
        const ciudadDB = await Ciudad.findByIdAndDelete({ _id: id });
        console.log(ciudadDB)

        if (!ciudadDB) {
            res.json({ 
                estado: false,
                mensaje: 'No se puede eliminar la Ciudad.'
            })
        } else {
            res.json({
                estado: true,
                mensaje: 'Ciudad eliminada.'
            })
        } 
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log(id)
    console.log('body', body)
    try {
        const ciudadDB = await Ciudad.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(ciudadDB)
        res.json({
            estado: true,
            mensaje: 'Ciudad editada'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Problema al editar la Ciudad'
        })
    }
})

 
module.exports = router;
