  
let users = require('./users.json')

let allusers = (req, res) => res.send(users)


let getUserById = (req, res) => {
    let {id} = req.params
    let user = users.find(user => +user.id === +id)
    if (!user) return res.status(404).send('not found')
    res.send(user)
}

function getUserByEmail (req, res) 
    { let {email} = req.query
        let user = users.find(user => user.email === email)
        res.send(user)
    }




module.exports = {
    allusers,
    getUserByEmail,
    getUserById,
}