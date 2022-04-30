const requireOption = require("../requireOption");

module.exports = function (objectrepository) {

    return (req,res,next)=>{
        const companyModel = requireOption(objectrepository, "companyModel");

        companyModel.deleteOne({ _id: req.params.id }, function (err, company) {
    
          if (err) {
            return next(err);
          }
          return next();
        });
        }
};
