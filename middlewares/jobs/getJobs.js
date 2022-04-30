const requireOption = require("../requireOption");



module.exports = (objectrepository) => {

    const jobModel = requireOption(objectrepository, 'jobModel');

    return function (req, res, next) {

        jobModel.find({}).exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting jobs'));
            }

            res.locals.jobs = results;
            return next();
        });
    };



};
