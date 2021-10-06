var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crown_49', {
        title: 'Express',
        name: 'Hu Kuan Yun',
        id: '209100949',
    });
});

module.exports = router;
