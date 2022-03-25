module.exports = function () {

    return function (req, res, next) {
        console.log("lekérem összes cég");
        return next();
    };

};
