'use strict'

const mongoose = require('mongoose');
Schema = mongoose.Schema,
BlogSchema = new Schema({
    title: {
        type: String,
        required: [true,'Укажите заголовок']
    },
    body: {
        type: String,
        required: [true,"Укажите содержание статьи"]
    },
    date: {
        type: Date,
        default: Date.now,
        required: [true," Укажите дату пубикации статьи"]

    }
});
mongoose.model('blog',BlogSchema);