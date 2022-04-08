module.exports = function (page) {

    return function (req, res) {
        res.render(page, res.tpl);
      };
    
};
