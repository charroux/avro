'use strict';

angular.module('avroDataFormatApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


