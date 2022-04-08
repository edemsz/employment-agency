module.exports = function (data) {

    return (req,res,next)=>{
        console.log(req);
        return next();
    }
};
