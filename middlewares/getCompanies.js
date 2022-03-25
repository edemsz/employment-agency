module.exports = function () {

    return function (req, res, next) {
        console.log("annyi");
        return next();
    };

};
