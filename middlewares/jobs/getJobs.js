module.exports = function () {

    return function (req, res, next) {
        console.log("lekérem összes munkát");
        return next();
    };

};
