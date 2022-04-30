const requireOption = require("../requireOption");


module.exports = (objectRepository) => {

    const jobModel = requireOption(objectRepository, 'jobModel');


    return (req, res, next) => {


        jobModel.findOne({ _id: req.params.id })
        .exec(function (err, job) {
            if (typeof job !== "undefined") {
            if (err) {
                return next(err);
            }

            res.locals.job = job;
            return next();
            } else {

            }
        });

    };
};
