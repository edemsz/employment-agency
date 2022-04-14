const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Company = db.model('Company', {
    name:String,
    seat:String,
    comp_num:String,
    vat_number:String,
    commission:String
});

module.exports = Company;
