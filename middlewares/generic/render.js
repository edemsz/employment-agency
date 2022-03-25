module.exports = function (page) {

    return (req,res,next)=>{
        res.end(`Rendering ${page}`);
    }
};
