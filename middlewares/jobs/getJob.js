module.exports = function (id) {

    return (req,res,next)=>{
        console.log(`lekérem a ${id} munka adatait`);
        return next();
    }
};
