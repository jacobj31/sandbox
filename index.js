

let {allusers,
  getUserByEmail,
  getUserById} = require('./userfunction')


const express = require('express')

const app = express()
const port = 6039

app.get('/' , (req, res) => {
  res.send('cheer')
})

app.get('/api/users', allusers)
app.get('/api/users/:id', getUserById)
app.get('/api/user', getUserByEmail)


//don't need the colon to find user by ID... req.params deal with stuff behind colon

app.listen(port, () => {
  console.log('listening on port', port)
})