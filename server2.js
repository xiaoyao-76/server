const express = require('express')
const app = express()
const port = 3000



app.use(express.json())

let dbUsers=[{username:"q",password:"123456",name:"q",email:"b022120024"},
{username:"sam",password:"123456",name:"sam",email:"b022120028"},
{username:"cn",password:"123456",name:"cn",email:"b022120004"}]

function login(requsername,reqpassword){
    var matchUser=dbUsers.find(
        user=>user.username==requsername)
        //console.log(matchUser)
    
    if(!matchUser) return "User not found!"
    if(matchUser.password==reqpassword){
        return matchUser
    }else{
        return "Invalid password"
    } 
    
}

app.get('/', (req, res) => {
    res.send('i am handsome boy!')
})
app.get('/bye', (req, res) => {
    res.send('bye,i am handsome boy!')
})
app.post('/register', (req, res) => {
    console.log(req.body)

    let result=login(req.body.username,req.body.password)
    res.send(result)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})