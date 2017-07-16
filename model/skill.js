'use strict'

const mongoose = require('mongoose');
Schema = mongoose.Schema,
SkillSchema = new Schema({
    section: {
        type: String
    },
    items: [{
        name:{
            type: String
        },
        value: {
            type: Number,
            default: 0
        }
    }]
});

mongoose.model('skill',SkillSchema);