const addCompanyMW = require('../middlewares/company/addCompany');
const getCompaniesMW = require('../middlewares/company/getCompanies');
const renderMW=require("../middlewares/generic/render");
const deleteCompanyMW=require("../middlewares/company/deleteCompany");
const getCompanyMW=require("../middlewares/company/getCompany");
const modifyCompanyMW=require("../middlewares/company/modifyCompany");


const addJobMW = require('../middlewares/jobs/addJob');
const getJobsMW = require('../middlewares/jobs/getJobs');
const deleteJobMW=require("../middlewares/jobs/deleteJob");
const getJobMW=require("../middlewares/jobs/getJob");
const modifyJobMW=require("../middlewares/jobs/modifyJob");


const companyModel = require('../models/company');
const jobModel = require('../models/job');


module.exports = function (app) {

    const objectRepository = {
        companyModel: companyModel,
        jobModel:jobModel
    };
    

    app.get('/companies',
        getCompaniesMW(objectRepository),
        renderMW("companies")
    );

    app.get("/companies/new",
        renderMW("new-company")
    );

    app.post("/companies/new",
        addCompanyMW(objectRepository),
        getCompaniesMW(objectRepository),
        renderMW("companies")
    );
    app.get("/company/:id",
        getCompanyMW(objectRepository),
        renderMW("companydetails")
    );
    app.post("/company/:id",
        getCompanyMW(objectRepository),
        modifyCompanyMW(objectRepository),
        getCompanyMW(objectRepository),
        renderMW("companydetails")
    );

    app.get("/company/:id/delete",
        deleteCompanyMW(objectRepository),
        getCompaniesMW(objectRepository),
        renderMW(`companies`)
    );



    app.get('/jobs',
        getJobsMW(objectRepository),
        renderMW("jobs")
    );

    app.get("/jobs/new",
        getCompaniesMW(objectRepository),
        renderMW("new-job")
    );

    app.post("/jobs/new",
        addJobMW(objectRepository),
        getJobsMW(objectRepository),
        renderMW("jobs")
    );
    app.get("/job/:id",
        getJobMW(objectRepository),
        getCompaniesMW(objectRepository),
        renderMW("jobdetails")
    );

    app.post("/job/:id",
        getJobMW(objectRepository),
        modifyJobMW(objectRepository),
        getJobMW(objectRepository),
        getCompaniesMW(objectRepository),
        renderMW("jobdetails")
    );

    app.get("/job/:id/delete",
        deleteJobMW(objectRepository),
        getJobsMW(objectRepository),
        renderMW(`jobs`)
    );


    app.get('/',
        getCompaniesMW(objectRepository),
        renderMW("companies")
    );

}