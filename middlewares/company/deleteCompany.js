module.exports = function (id) {

    return (req,res,next)=>{
        console.log(`törlöm a ${id}céget`);
        return next();
    }
};
