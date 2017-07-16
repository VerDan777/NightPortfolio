'use strict'

const mongoose = require('mongoose');
const config = require('./config.js');
const skills = require('./model/skills.json');
mongoose.Promise = global.Promise;

mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`,{
    useMongoClient: true
})
    .catch(e=> {
        console.log(e)
        throw e;
    });

require('./model/skill.js');

let Model = mongoose.model('skill');
Model.remove({}).then(()=> {
    let p = [];
    skills.forEach((item,index)=> {
        let recordDb = new Model({section: item.name,items: item.items});
        p[index] = recordDb.save();
    })
    Promise.all(p)
    .then(data => {
        console.log('Данные успешно добавлены')
        mongoose.connection.close(()=> {
            process.exit(0);

        });
    })
    .catch(e => {
        const error = Object.keys(e.errors).map(key => e.errors[key].message).join(', ');
        console.log('При добавлении записи произошла ошибка' + error);
        mongoose.connection.close(()=> {
            process.exit(0);
        });
    });
});
