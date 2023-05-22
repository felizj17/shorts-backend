const db = require('../db/dbConfig')

const findUser = async(creds) =>{
    const user = await db.any('SELECT * From users WHERE email=$1', creds)
    if(user){
        return user
    }else return []
}

const addUser=async(user)=>{
    const newUser = await db.one('INSERT INTO users (email, username, _at, password) VALUES ($1,$2,$3,$4) RETURNING *', [user.email, user.username, user._at, user.password])
    console.log(newUser)
    if(newUser._at){
        return newUser
    }else{
        return {error:'Problem occured at create new user'}
    }
}
module.exports = {
    findUser,
    addUser
}