'use strict'
const express = require('express');
const helmet = require('helmet');
const path  =require('path');
const fs = require('fs');
const http = require('http');
const favicon = require('server-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();
const bodyParser = require('body-parser');
const server = http.createServer(app);
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const jsonfile = require('jsonfile');
const fileVersionControl = 'version.json';
const currentStatic = require('./gulp/config.js').root;
const config = require('./config');

// absolute path for upload
const uploadDir = path.join(__dirname,config.upload)

// connection modules

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{
    useMongoClient: true
})
    .catch(e => {
        console.log(e);
        throw e;

    });

    require('./model/db-close.js');
    require('./model/blog.js');
    require('./model/pic.js');
    require('./model/skill.js');
    require('./model/user.js');

// view 

app.set('views',path.join(__dirname,'views'));
app.set('views engine','pug');

app.use(helmet());
app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use(session({
    secret:'secret',
    key:'key',
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: null
    },
    saveUninitialized:false,
    resave: false,
    store: new MongoStore({mongoosConnection:mongoose.connection})
}))

app.use(express.static(path.join(__dirname,currentStatic)));
app.use(favicon(path.join(__dirname,currentStatic,'favicon.ico')));

app.use('/',require('./routes/index.js'));
app.use('/admin',require('./routes/admin.js'))
app.use('/login',require('./routes/login.js'));
app.use('/contact',require('./routes/mail.js'));

// 404 cath errors

app.use((req,res,nex)=> {
    res.status(404);
    res.render('404')
});

// 505 erorrs middleware

app.use((err,req,res,next)=> {
    console.log(err.stack)
    res.status(505);
    res.render('505')
});

server.listen('3000','localhost');

server.on('listening',function() {
    jsonfile.readFile(fileVersionControl,(err,obj)=> {
        if(err) {
            console.log('Данные для хеширования ресурсов из version.json не прочитаны');
            console.log('Сервер остановлен');
            process.exit(1);
        }else {
            app.locals.setting = {
                suffix: obj.suffix,
                version: obj.version
            };
            console.log('Данные для хеширования ресурсов из version.json прочитаны');
            // if folder apsent - create this

            if(!fs.existsSync(uploadDir)) {
                fs.mkdir(uploadDir);
            }
            console.log('Express server started on port %s at %s', server.address().port, server.address().address);
        };
    });
});
