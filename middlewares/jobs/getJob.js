module.exports = function (id) {

    return (req,res,next)=>{
        let job= {
            id:1,
            name:"Benzinkutas",
            place:"home office",
            salary:"1234",
            company_id:"1",
            company:"Teszt Kft.",
        };
        console.log(job);
        res.locals.job=job;
        return next();
    }
};
