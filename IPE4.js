// Write express js script to load student form using pug file which contains following 
// fields:
//  Roll No(number)
//  Name(text)
//  Division(text)
//  Email(email)
//  Subject(radio:FSD-2,COA,PYTHON-2,DM,TOC)
//  Once form submitted then data must be displayed on ‘/data’ page using pug file. Means 
// data should be submitted from express application to PUG file.

const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set('view engine','pug')
app.set('views','./views')

app.get('/', (req,res)=>{
    res.render('form')
})

app.post('/submit', (req,res)=>{
    const student = req.body
    res.render('data', {
        student : student
    })
})

app.listen(3000)