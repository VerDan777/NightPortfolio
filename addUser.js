'use strict'

const mongoose = require('mongoose');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const config = require('../config');
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{
    useMongoClient: true
})
    .catch(e =>{
        console.log(e);
        throw(e);
    });

// login and paswword in start is are empty
let login = '';
let password = '';
rl.question('Логин',answer =>{
    login = answer;
    
rl.question('Пароль',answer =>{
    password = answer;
})

rl.close();
});

rl.on('close',()=>{
    require('./model/user.js');

const User = mongoose.model('User');
    adminUser = new User ({
        login:login,password:password
    });

    User.findOne({login:login})
    then(u=>{
        if(u) {
            throw new Error('Такой пользователь уже существует');
        }
        return adminUser.save();
    })
    then(u=>console.log('ok',e=>console.error(error.message)))
    then(()=> {
        mongoose.connection.close(()=> {
            process.exit();
        })
    })
})