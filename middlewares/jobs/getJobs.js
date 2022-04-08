module.exports = function () {

    return function (req, res, next) {
        let jobs=[
            {
                id:1,
                name:"Benzinkutas",
                place:"home office",
                salary:"1234",
                company_id:"1",
            },
            {
                id:2,
                name:"Gyakornok",
                place:"home office",
                salary:"1344",
                company_id:"2",
            },
        ];
        console.log("getjobs");
        res.locals.jobs=jobs;
        return next();
    };

};
