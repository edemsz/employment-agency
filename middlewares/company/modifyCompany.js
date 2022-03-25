module.exports = function (id,data) {

    return (req,res,next)=>{
        console.log(`módosítom a ${id}céget`);
        return next();
    }
};
