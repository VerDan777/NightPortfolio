const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/',(req,res)=> {
    let obj = {
        title: 'Главная страница'
    };
    Object.assign(obj,req.app.locals.settings);
    const ModelPic = mongoose.model('pic');
    const ModelSkill = mongoose.model('skill');
    
    ModelPic.find().then(items=> {
        Object.assign(obj,{items: items});
        ModelSkill.find().then(skills => {
            Object.assign(obj,{skills: skills});
            res.render('pages/index',obj)
        });
    });
});

router.get('/blog',(req,res)=> {
    let obj = {
        title: 'Блог'
    };
    Object.assign(obj,req.app.locals.settings);
    const Model = mongoose.model('blog');

    Model.find().then(items=> {
        Object.assign(obj,{items:items});
        res.render('pages/blog',obj);
    })

})
