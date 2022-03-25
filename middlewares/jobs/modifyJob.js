module.exports = function (id,data) {

    return (req,res,next)=>{
        console.log(`módosítom a ${id} munkát`);
        return next();
    }
};
