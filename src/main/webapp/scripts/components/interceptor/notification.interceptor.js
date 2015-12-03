 'use strict';

angular.module('avroDataFormatApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-avroDataFormatApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-avroDataFormatApp-params')});
                }
                return response;
            }
        };
    });
