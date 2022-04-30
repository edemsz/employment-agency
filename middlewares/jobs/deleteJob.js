const requireOption = require("../requireOption");

module.exports = function (objectrepository) {

    return (req,res,next)=>{
        const jobModel = requireOption(objectrepository, "jobModel");

        jobModel.deleteOne({ _id: req.params.id }, function (err, job) {
    
          if (err) {
            return next(err);
          }
          return next();
        });
        }
};
