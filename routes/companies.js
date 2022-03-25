const addCompanyMW = require('../middlewares/company/addCompany');
const getCompaniesMW = require('../middlewares/company/getCompanies');
const renderMW=require("../middlewares/generic/render");
const deleteCompanyMW=require("../middlewares/company/deleteCompany");
const getCompanyMW=require("../middlewares/company/getCompany");
const modifyCompanyMW=require("../middlewares/company/modifyCompany");

module.exports = function (app) {

    app.get('/companies',
        getCompaniesMW(),
        renderMW("companies")
    );

    app.get("/companies/new",
        renderMW("companydetails")
    );

    app.post("/companies/new",
        addCompanyMW(),
        renderMW("companies")
    );
    app.get("/company/:id",
        getCompanyMW(),
        renderMW("companydetails")
    );
    app.post("/company/:id",
        getCompanyMW(),
        modifyCompanyMW(),
        renderMW("companydetails")
    );

    app.delete("/company/:id",
        deleteCompanyMW(),
        renderMW(`companies`)
    );



}