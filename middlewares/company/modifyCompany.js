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

            companyModel.findOne({ _id: req.params.id }, function (error, company) {

                    company.name = req.body.name;
                    company.seat = req.body.seat;
                    company.comp_num = req.body.comp_num;
                    company.vat_number = req.body.vat_number;
                    company.commission = req.body.commission;
                    company.save(function (err, event) {
                        if (err) {
                            return next(err);
                        }
                        return next();
                    });
                }
            );


        }
    }
};
