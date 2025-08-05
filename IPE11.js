// let a = 0;
// let b = 0;

// setInterval(() => {
//     a++;
//     b++;
//     console.log(`a = ${a}, b = ${b}, sum = ${a + b}`);
// }, 1000);
const express = require('express');
const app = express()

app.use(express.urlencoded({extended : true}))
app.get('/',(req,res)=>{
    let a = 0
    let b = 0

    setInterval(()=>{
        res.write(`a = ${a} b = ${b} a + b = ${a+b}`)
    },1000)
    res.send()
})

app.listen(3000)