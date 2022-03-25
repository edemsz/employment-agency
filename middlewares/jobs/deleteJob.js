module.exports = function (id) {

    return (req,res,next)=>{
        console.log(`törlöm a ${id} munkát`);
        return next();
    }
};
