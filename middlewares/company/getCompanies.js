module.exports = function () {

    return function (req, res, next) {
        let companies=[
            {
                id:1,
                name:"Teszt Kft.",
                seat:"Fő utca 2",
                comp_num:"1234",
                vat_number:"1234-1234",
                commission:"1.04"
            },
            {
                id:2,
                name:"Nagy Bt.",
                seat:"Fő utca 3",
                comp_num:"1235",
                vat_number:"1234-1234",
                commission:"1.05"
            },
        ];
        res.locals.companies=companies;
        return next();
    };

};
