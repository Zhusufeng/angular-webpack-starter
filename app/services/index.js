'use strict';

/* Require Angular ! */
var angular = require('angular');

angular.module('dashboard').service('GithubStatusService', require('./github-status.service'));