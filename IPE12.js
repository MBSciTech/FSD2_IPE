const express= require('express')
const app = express()

app.use(express.urlencoded({extended : true}))
app.set('view engine','pug')
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('form2')
})

app.post('/StudentForm',(req,res)=>{
    const student = req.body;
    console.log(student.name)
    res.render('student',{'student':student})
})



app.listen(3000)