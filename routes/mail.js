'use strict'
const mongoose = require('mongoose');
const express = require('express');
const nodemailer = require('nodemailer');
const config = require('./config');
const router = express.Router();

router.get('/',(req,res)=> {
    let obj = {
        title:'Связаться со мной'
    };
    Object.assign(obj,req.app.locals.settings);
    res.render('pages/contact',obj)
});

router.post('/',(req,res)=> {
    if(!req.body.name || !req.body.email || !req.body.text) {
        return res.json({status:'Укажите данные'})
    }
    const transporter = nodemailer.createTransport(config.mail.smtp);
    const mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: config.mail.smtp.auth.user,
        subject: config.mail.subject,
        text:req
            .body
            .text
            .trim()
            .slice(0,500) + `\n Отправлено с: <${req.body.email}>` 
        };
        transporter.sendMail(mailOptions,(error,info)=> {
            if(error) {
                return res.json({status:'При отправке произошла ошибка'})
            }
            res.json({status:'Письмо отправлено'})
        });
});
module.exports = router;
