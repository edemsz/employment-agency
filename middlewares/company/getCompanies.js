const requireOption = require("../requireOption");



module.exports = (objectrepository) => {

    const companyModel = requireOption(objectrepository, 'companyModel');

    return function (req, res, next) {

        companyModel.find({}).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting companies'));
            }

            res.locals.companies = results;
            return next();
        });
    };



};
