
var Promise = require('promise');
var User = require('../models/tblPeopleComeModel');
var ObjectID = require( 'mongodb' ).ObjectID;
var user = {
    Insert: function (records) {
        return new Promise(function (resolve, reject) {
            var saveUser = User( {
                _id: new ObjectID(),
                Name: records.Name,
                City: records.City,
                Mobile: records.Mobile,
                Code: records.Code
            });
            saveUser.save(function (err) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    User.find(records, function (err, data) {
                        if (err) {
                            console.log('Getting time error: ' + err)
                        }
                        else {
                            resolve(data);
                        }
                    });
                }
            });
        });
    },

    GetAll: function () {
        return new Promise(function (resolve, reject) {
            console.log('Called');
            User.find({}, function (err, returnUser) {
                if (err) {
                    console.log(err);
                    reject(false);
                }
                else {
                    resolve(returnUser);
                }
            });
        });
    },

    DeleteAll: function () {
        return new Promise(function (resolve, reject) {
            console.log('Called');
            User.remove({}, function (err, returnUser) {
                if (err) {
                    console.log(err);
                    reject(false);
                }
                else {
                    resolve(returnUser);
                }
            });
        });
    },

    GetById: function (code) {
        return new Promise(function (resolve, reject) {
            console.log('Called');
            User.find({ Code: code }, function (err, returnUser) {
                if (err) {
                    console.log(err);
                    reject(false);
                }
                else {
                    console.log(returnUser);
                    resolve(returnUser);
                }
            });
        });
    }
}

exports.user_helper = user;

