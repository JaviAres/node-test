const express = require('express')
const app = express()
const port = 3005
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname+'/public'))

app.use('/', require('./router/rutas'));
app.use('/pokemon', require("./router/pokemon"))

app.use((req, res)=>{
    res.status(404).render("404",{tituloError:"Error 404",tituloDescripcion:"Pagina no existe manin"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

