const requireOption = require("../requireOption");


module.exports = function (objectRepository) {
    const companyModel = requireOption(objectRepository, 'companyModel');


    return (req, res, next) => {

      companyModel.findOne({ _id: req.params.id })
        .exec(function (err, company) {
          if (typeof company !== "undefined") {
            if (err) {
              return next(err);
            }

            res.locals.comp = company;
            return next();
          } else {
            return res.redirect("/companies");
          }
      });
    }


};
