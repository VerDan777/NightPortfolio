const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

const isAdmin = (req,res,next)=> {
    if(req.session.isAdmin) {

        return next();
    }
    res.status(301).redirect('/');
};

router.get('/',isAdmin,(req,res)=> {
    let obj ={
        title: 'Admin panel'
    };
    Object.assign(obj,req.app.locals.settings);
    const ModelSkills = mongoose.model('skill');
    ModelSkills.find().then(skills=> {
        Object.assign(obj,{skills:skills})
        res.render('pages/admin');  
    });    
});
router.post('/upload',isAdmin,(req,res)=> {
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(),config.upload);
    form.parse(req,(err,fields,files)=> {
        if(err) {
            return res.json({status:'Не удалось загрузить картинку'});
        }
        if(!fields.name) {
            fs.unlink(files.photo.path);
            return res.json({status: 'Не указано описание картинки'})
        }
        let fileName = path.join(config.upload,files.photo.name);

        fs.rename(files.photo.path,fileName,(err)=> {
            if(err) {
                fs.unlink(fileName)
                fs.rename(fs.photo.path,fileName);
            }
            let FileNameDb = fileName.substr(config.upload.indexOf('/'));
            const ModelPic =mongoose.model('pic');
            const item = new Model({name:fields.name,picture:FileNameDb})
            item.save().then(
                i =>res.json({status: 'Каритинка успешно заружена'}),
                e => res.json({status: e.message})
            );
        });
    });
});