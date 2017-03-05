var express = require('express');
var router = express.Router();
var helper = require( '../../helpers/tokenMatchHelper' );
var connection = require( '../../db_module/connectionhelper');
/* GET users listing. */
router.get( '/', function ( req, res ) {
    
    helper.user_helper.GetAll().then( function ( response ) {
       
        console.log(response);
        res.status(200).json(response);
    }, function (error) {
        res.json(500);
    });
    console.log("api called Get All");
});

router.post('/save', function (req, res) {
    var saveDoc = {
        Name: req.body.Name,
        City: req.body.City,
        Mobile: req.body.Mobile,
        Code: req.body.Code
    }
    helper.user_helper.Insert(saveDoc).then(function (response) {
        console.log("Yes");
        console.log(response);
        res.status(200).json(response);
    }, function (error) {
        res.json(500);
        });
    console.log("api called");
});

router.post('/delete', function (req, res) {
    
    helper.user_helper.DeleteAll().then(function (response) {
        console.log("Yes");
        console.log(response);
        res.status(200).json(response);
    });
});

router.get('/getById/:id', function (req, res) {
   
    helper.user_helper.GetById(req.params.id).then(function (response) {
        console.log("Yes");
        console.log(response);
        res.status(200).json(response);
    }, function (err) { res.json(err)});
});

module.exports = router;