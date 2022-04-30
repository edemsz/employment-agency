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
            let newJob = new jobModel();
            newJob.name = req.body.name;
            newJob.place = req.body.place;
            newJob.salary = req.body.salary;
            companyModel.findOne({name:req.body.company}, function (err, company) {
                newJob._company = company;
                newJob.save(function (err, event) {
                    if (err) {
                      return next(err);
                    }
                    return next();
                  });
                    });
        
          }
      
    }
};
