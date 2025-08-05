const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express()

app.use(express.urlencoded({extended : true}));
app.use(cookieParser())
app.use(express.static(__dirname,{index:'form.html'}))

app.post('/submit', (req,res)=>{
    const userData = {
        name : req.body.name,
        contact : req.body.contact,
        email : req.body.email,
        address : req.body.address,
        gender : req.body.gender,
        dob : req.body.dob
    };
    console.log(userData);
    res.cookie('registered',userData,{maxAge:15000});
    res.send(`
        <h3>Registration successful!</h3>
        <a href='/details'>View your details</a>
    `)
});

app.get('/details',(req,res)=>{
    const data = req.cookies.registered;

    if(!data){
        return res.send(`<h3>Cookie expired or not found</h3>
            <a href='/'>Back to form</a> `);
    }

    res.send(`
        <h2>User Details</h2>
        <p>${data.name}</p>
        <p>${data.contact}</p>
        <p>${data.email}</p>
        <p>${data.address}</p>
        <p>${data.gender}</p>
        <p>${data.dob}</P>

        <a href='/logout'>Logout</a>
        
    `)
})

// Route: GET /logout
app.get('/logout', (req, res) => {
  res.clearCookie('registered');
  res.redirect('/');
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});