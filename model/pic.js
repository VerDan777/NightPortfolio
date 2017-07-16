'use sctrict'

const mongoose = require('mongoose');
Schema = mongoose.Schema;
PicSchema = new Schema({
    name: {
        type: String,
        required: [true,'Укажите имя картинки']
    },
    pic: {
        type: String
    }
});

mongoose.model('pic',PicSchema);