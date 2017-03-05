(function () {
    'use strict';

    angular
        .module('app')
        .service('_genericService', _genericService);

    _genericService.$inject = ['$http', '$q'];

    function _genericService($http, $q) {

        this.GetAll = function (url) {

            var defered = $q.defer();
            var request = {
                method: 'GET',
                url: url,
            };
            $http(request).then(
               function (result) {
                   defered.resolve(result.data);
               }, function () {
                   defered.reject("error");
               });
            console.log(defered.promise);
            return defered.promise;
        }

        this.GetView = function (viewUrl, id) {

            var defered = $q.defer();
            var request = {
                method: 'GET',
                url: viewUrl + id,
            };
            $http(request).then(
               function (result) {
                   defered.resolve(result.data);
               }, function () {
                   defered.reject("error");
               });
            console.log(defered.promise);
            return defered.promise;
        }

        this.update = function (updateUrl, dataObj) {

            var defered = $q.defer();
            var request = {
                method: 'PUT',
                url: updateUrl,
                data: JSON.stringify(dataObj),
                dataType: "json"
            };
            $http(request).then(
               function (result) {
                   defered.resolve(result.data);
               }, function () {
                   defered.reject("error");
               });
            console.log(defered.promise);
            return defered.promise;
        }

        this.postData = function (createUrl, data) {
            var defered = $q.defer();
            var request = {
                method: 'POST',
                url: createUrl,
                data: JSON.stringify(data),
                dataType: "json"
            };
            $http(request).then(
               function (result) {
                   defered.resolve(result.data);
               }, function () {
                   defered.reject("error");
               });
            console.log(defered.promise);
            return defered.promise;
        }
        this.Delete = function (Url) {
            var defered = $q.defer();
            var request = {
                method: 'DELETE',
                url: Url,
                dataType: "json"
            };
            $http(request).then(
               function (result) {
                   defered.resolve(result.data);
               }, function () {
                   defered.reject("error");
               });
            console.log(defered.promise);
            return defered.promise;
        }

        this.uploadImage = function (uploadUrl, data) {

            $http.post(uploadUrl, data, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            })
        }

    }
})();