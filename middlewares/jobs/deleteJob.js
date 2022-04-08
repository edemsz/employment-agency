module.exports = function (id) {

    return (req,res,next)=>{
        console.log(`törlöm a munkát`);
        return next();
    }
};
