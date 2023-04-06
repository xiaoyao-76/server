const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('i am handsome boy!')
})
app.get('/bye', (req, res) => {
    res.send('bye,i am handsome boy!')
})
app.post('/register', (req, res) => {
    console.log(req.body)
    res.send('bye,i am pretty girl!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})