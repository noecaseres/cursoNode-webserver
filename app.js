require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT; //Tomo la var de entorno definida para el puerto 

//Handlebar
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials'); 

//Servir contenido estatico. Contenido que aparece en la url '/' disponible para todo user
app.use(express.static('public'));

//Controlador
app.get('/',(req,res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  })
})

app.get('/generic',(req,res) => {
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  })
})

app.get('/elements',(req,res) => {
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  })
})


app.get('*', (req,res) =>{
    //Para enviar como respuesta el contenido de un archivo
res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})