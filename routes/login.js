const express = require('express');
const router = express.Router();
const cryto = require('crypto');
const mongoose = require('mongoose');

router.get('/',(req,res)=> {
    if(req.session.isAdmin) {
        res.redirect(302,'/admin');
    }else {
        let obj = {
            title: 'Авторизация'
        };
        Object.assign(obj,req.app.locals.settings);
        res.render('pages/login',obg);
    }
});

router.post('/',(req,res)=> {
    if(!req.body.login || !req.body.password) {
        return res.json({status:"Укажите пароль и логин"})
    }
    const Model = mongoose.model('User');
    const password = crypto.createHash('md5').update(req.body.password).digest('hex');

    Model.findOne({login:req.body.login,password: password}).then((item)=> {
        if(!item) {
            res.json({status:'Логие или пароль введен неверно!'})
        }else {
            req.session.isAdmin = true;
            res.json({status:'Авторизация успешна!'})
        }
    });
});
module.exports = router;
