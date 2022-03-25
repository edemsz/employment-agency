let getCompaniesMW = require('../middlewares/getCompanies');


module.exports = function (app) {

    app.get('/companies',
        getCompaniesMW()
    );

}