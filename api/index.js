const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const BrooooModel = require('./models/Broooo')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/broooo");

app.post("/login", (req, res) =>{
    const{email, password} = req.body;
    BrooooModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Succsess")
            } else{
                res.json("wrong one ese")
            }
        } else{
            res.json("hu a yu stoopid")
        }
    })
})

app.post('/register', (req, res) => {
    BrooooModel.create(req.body)
    .then(broski => res.json(broski))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server running on port 3001")
})