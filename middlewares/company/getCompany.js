module.exports = function (id) {

    return (req,res,next)=>{
        console.log(`lekérem a ${id}cég adatait`);
        return next();
    }
};
