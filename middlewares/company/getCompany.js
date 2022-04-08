module.exports = function (id) {

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
