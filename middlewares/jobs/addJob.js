module.exports = function (data) {

    return (req,res,next)=>{
        console.log(`hozzáadok új munkát`);
        return next();
    }
};
