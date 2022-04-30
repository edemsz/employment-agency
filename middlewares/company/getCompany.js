const requireOption = require("../requireOption");


module.exports = function (objectRepository) {

    const companyModel = requireOption(objectrepository, 'companyModel');

    companyModel.findOne({ _id: req.params.id })
      .exec(function (err, company) {
        if (typeof company !== "undefined") {
          if (err) {
            return next(err);
          }

          res.locals.company = company;
          return next();
        } else {
          return res.redirect("/companies");
        }
      });


    return (req,res,next)=>{
        let company={
            id:1,
            name:"Teszt Kft.",
            seat:"Fő utca 2",
            comp_num:"1234",
            vat_number:"1234-1234",
            commission:"1.04"
        };
        res.locals.comp=company;
        return next();
    }
};
