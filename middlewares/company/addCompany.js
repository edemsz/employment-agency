const requireOption = require("../requireOption");



module.exports = function (objectRepository) {

    const companyModel=requireOption(objectRepository,"companyModel");

    return (req,res,next)=>{

        if (
            typeof req.body.seat === "undefined" ||
            typeof req.body.comp_num === "undefined" ||
            typeof req.body.vat_number === "undefined" ||
            typeof req.body.name === "undefined" ||
            typeof req.body.commission === "undefined"
          ) {
            return next();
          } else {
            let newComp = new companyModel();
            newComp.name = req.body.name;
            newComp.seat = req.body.seat;
            newComp.comp_num = req.body.comp_num;
            newComp.vat_number = req.body.vat_number;
            newComp.commission = req.body.commission;
            newComp.save(function (err, event) {
              if (err) {
                return next(err);
              }
              return next();
            });
          }
      
    }
};
