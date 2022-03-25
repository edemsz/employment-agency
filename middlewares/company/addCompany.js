module.exports = function (data) {

    return (req,res,next)=>{
        console.log(`hozzáadok új céget`);
        return next();
    }
};
