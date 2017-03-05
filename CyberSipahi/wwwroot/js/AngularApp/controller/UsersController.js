(function () {
    'use strict';
    debugger;
    angular
        .module('app')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['$scope', '$location', '$http', '_genericService', '$q', 'NgTableParams', 'AppConstant', '$defer'];
    
    function UsersController($scope, $location, $http, _genericService, $q, NgTableParams, AppConstant, $defer) {
        /* jshint validthis:true */

        function Reset() {
            $scope.SaveModel = {
                name: null,
                mobile: null,
                city: null,
                OTP: null,
                _id: null
            };
        }

        $scope.ResetNew = function () {
            $scope.isSuccess = false;
            Reset();
        }

        $scope.Verify = function (code) {
            _genericService.GetView("http://localhost:1337/users/getById/", code).then(function (data) {
                if (data.length > 0) {
                    $scope.SaveModel.name = data[0].Name;
                    $scope.SaveModel.mobile = data[0].Mobile
                    $scope.SaveModel.city = data[0].City;
                    $scope.SaveModel.OTP = data[0].Code;
                    $scope.isSuccess = true;
                }
            }, function (error) { alert('Invalid.') });

        }

        $scope.SaveUser = function () {
            //debugger;
            var obj = {
                Name: $scope.SaveModel.name,
                City: $scope.SaveModel.city,
                Mobile: $scope.SaveModel.mobile,
                Code: $scope.SaveModel.OTP
            };

            _genericService.postData('http://localhost:1337/users/save', obj).then(function (result) {
                Reset();
                alert(result[0].Name + " Saved")
            }, function () { alert('Error'); });

        };

        $scope.GetAll = function () {
            debugger;
            _genericService.GetAll(AppConstant.baseUrl + 'api/v1/users').then(function (result) {
                bindGrid();
            });
        };
        var gridData = [];
        function bindGrid() {
            $scope.tableParams = new NgTableParams({
                page: 1,            // show first page
                count: 5,
            }, {
                getData: function (params) {
                    return _genericService.GetAll(AppConstant.baseUrl + 'api/v1/users').then(function (data) {
                        debugger;
                        console.log(params.count());
                        params.total(data.inlineCount);
                        return data;
                    });
                }
            });

        }
        function reloadTableData(obj) {
            listData = obj;
            $scope.tableParams.reload();
            $scope.tableParams.page(1);
        }

    }
})();
