const express = require("express")
const bodyPraser = require("body-parser")
const { rmSync } = require("fs")

const app = express()
const port = 8080

let users = []
app.use(bodyPraser.json())

app.post("/register",(req , res)=>{
    const {firstName , lastName} = req.body
    users.push({firstName , lastName})
    res.status(200).json({
        massage:"register successfully",
        data: users
    })
})
let login = []
app.post("/login" , (req, res)=>{
    const {first , last} = req.body
    login.push({first , last})
    for(let i = 0 ; i < users.length ; i++){
        if (users[i].firstName === login[i].first && users[i].lastName === login[i].last){
            res.status(200).json({
                massage:"login successfully"
            })
        
        }
        else{
         res.status(400).json({
            massage:"something is wrong"
            
         })
        }
    }
})
app.listen(port , (req , res)=>{})