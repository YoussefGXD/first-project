const express = require("express")
const bodyPraser = require("body-parser")
const { rmSync } = require("fs")

const app = express()
const port = 8080

let users = []
app.use(bodyPraser.json())

app.post("/register",(req , res)=>{
    const {firstName , lastName} = req.body
    let id = users.length+1
    users.push({id , firstName , lastName})
    res.status(200).json({
        massage:"register successfully",
        data: users
    })
})
app.patch ("/users/:id", (req , res) => {
    let id = req.params.id.slice(1)
    const {firstName , lastName} = req.body
    users.forEach((x) =>{
        if (x.id == id ){
            x.firstName = firstName
            x.lastName = lastName
            res.status(200).json({
                massage: "edit complete",
                data : x
            })
        }
    })
    res.status(400).json({
        massage: "Not found"
    })
})
app.post("/login" , (req, res)=>{
    const {firstName , lastName} = req.body

    for(let i = 0 ; i < users.length ; i++){
        if (users[i].firstName === firstName && users[i].lastName === lastName){
            res.status(200).json({
                massage:"login successfully"
            })
        
        }
        
    }
    res.status(400).json({
        massage:"something is wrong"
        
     })
})
app.listen(port , (req , res)=>{})