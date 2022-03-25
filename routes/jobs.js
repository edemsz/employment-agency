const addJobMW = require('../middlewares/job/addJob');
const getJobsMW = require('../middlewares/job/getJobs');
const renderMW=require("../middlewares/generic/render");
const deleteJobMW=require("../middlewares/job/deleteJob");
const getJobMW=require("../middlewares/job/getJob");
const modifyJobMW=require("../middlewares/job/modifyJob");

module.exports = function (app) {

    app.get('/jobs',
        getJobsMW(),
        renderMW("jobs")
    );

    app.get("/jobs/new",
        renderMW("jobdetails")
    );

    app.post("/jobs/new",
        addJobMW(),
        renderMW("jobs")
    );
    app.get("/job/:id",
        getJobMW(),
        renderMW("jobdetails")
    );
    app.post("/job/:id",
        getJobMW(),
        modifyJobMW(),
        renderMW("jobdetails")
    );

    app.delete("/job/:id",
        deleteJobMW(),
        renderMW(`jobs`)
    );



}