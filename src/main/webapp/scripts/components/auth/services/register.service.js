'use strict';

angular.module('bauApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


