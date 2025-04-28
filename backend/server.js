const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser');

const app = express();

app.use(cors())
app.use(bodyParser.json());


//test api

app.get('/',function(req,res){
    res.send('backend is working.....')
})

let users = [];

//signup

app.post('/signup',function(req,res){

    const username = req.body.username
    const password = req.body.password

    const userExists = users.find(function(user){
        console.log(user);
        return user.username === username
    })
    if (userExists){
        return res.status(400).json({message: 'user already exists'})
    }

    users.push({username,password})
    res.status(200).json({message: 'User registered successfully'})
      
})


//login

app.post('/login',function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    const user = users.find(function(user) {
        return user.username === username && user.password === password;
    });


    if(user){
        res.status(200).json({ message: 'Login successful' });
    }else{
        res.status(401).json({ message: 'Invalid username or password' });
    }

})

app.listen(5000,function(){
    console.log("server started on port 5000.....");
    
})

