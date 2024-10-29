// using template engine with express js

//used in software development to dynamically generate HTML, XML, or other text formats by combining a template with data. 
// basically template engine are you to add dynamically data on generated html , xml 

// 1. Template engine enable you to used static template file in your application
// 2. at runtime template engine replace variable in template file with its actual value and transforms the template an html file sent to the client
// 3. this approach make it easier to design an html template
// 4 . some popular template engin pug , Ejs , Handlebars


// NOTE IMP 
// How to set Template engine 
// 1 Directory views : views are mandatory directory where template file are located 
// and we need to set this directory to in you app using  following way app.set('views', './views')
// default views directory in application root director 

// 2. also we need to set up template engine you have to used using following command
// app.set('template engine','pug');

// 3. instead of res.send used the res.render('index') method as method and give file name as argument where template data are present
// render method having two parameter first one is template file name and second one is object where you have to pass the dynamic content 

const { log } = require('console');
const express = require('express')
const path = require('path');

const app = express();


const directoryPath = path.join(__dirname, 'views');
// set default directory view where the template engine file are located (so by default directory name is view)
app.set('views', directoryPath)

// In express js is possible to change the directory name views to any other name like view to template 
// yes it is possible in following way 
const templatePath = path.join(__dirname, 'template');
app.set('views', templatePath)

// what ever template engine you have used set this template engine  as view engine
app.set('view engine', 'hbs')

// here you have to render the  Html of template data.
app.get('/',(req, res)=>{
    // res.send('welcome')
    // instead of send when we used template engine you have to used render method 
    // also you have to pass the dynamic content for example name 
    res.render('index',{
        name:'vishal shinde'
    })
    
})

app.get('/about',(req, res)=>{
    // res.send('welcome')
    // instead of send when we used template engine you have to used render method 
    // also you have to pass the dynamic content for example name 
    res.render('index',{
        name:'vishal shinde about'
    })
})
app.listen(8000,()=>{
    console.log('server started in port 8000');
    
})