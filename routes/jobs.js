const addJobMW = require('../middlewares/jobs/addJob');
const getJobsMW = require('../middlewares/jobs/getJobs');
const renderMW=require("../middlewares/generic/render");
const deleteJobMW=require("../middlewares/jobs/deleteJob");
const getJobMW=require("../middlewares/jobs/getJob");
const modifyJobMW=require("../middlewares/jobs/modifyJob");
const getCompaniesMW = require('../middlewares/company/getCompanies');


module.exports = function (app) {

    app.get('/jobs',
        getJobsMW(),
        renderMW("jobs")
    );

    app.get("/jobs/new",
        getCompaniesMW(),
        renderMW("new-job")
    );

    app.post("/jobs/new",
        addJobMW(),
        getJobsMW(),
        renderMW("jobs")
    );
    app.get("/job/:id",
        getJobMW(),
        getCompaniesMW(),
        renderMW("jobdetails")
    );

    app.post("/job/:id",
        getJobMW(),
        modifyJobMW(),
        getCompaniesMW(),
        renderMW("jobdetails")
    );

    app.post("/job/:id/delete",
        deleteJobMW(),
        renderMW(`jobs`)
    );



}