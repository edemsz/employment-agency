const requireOption = require("../requireOption");


module.exports = function (objectRepository) {

    const jobModel=requireOption(objectRepository,"jobModel");
    const companyModel=requireOption(objectRepository,"companyModel");



    return (req,res,next)=>{
        if (
            typeof req.body.name === "undefined" ||
            typeof req.body.company === "undefined" ||
            typeof req.body.place === "undefined" ||
            typeof req.body.salary === "undefined"
          ) {
            return next();
          } else {

            jobModel.findOne({ _id: req.params.id }, function (error, job) {

                    job.name = req.body.name;
                    job.place = req.body.place;
                    job.salary = req.body.salary;
                    companyModel.findOne({name:req.body.company}, function (err, company) {
                        job._company = company;
                        job.save(function (err, event) {
                            if (err) {
                              return next(err);
                            }
                            return next();
                          });
                            });



                    
                }
            );


        }
    }
};
