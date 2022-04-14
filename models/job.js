const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Job = db.model('Job', {
    name:String,
    place:String,
    salary:Number,
    _company:{
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
});

module.exports = Job;
