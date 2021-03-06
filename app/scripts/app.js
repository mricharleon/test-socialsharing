'use strict';

angular
  .module('socialsharingApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    '720kb.socialshare',
  ])
  .value(
    'serverConfig', {
      'clientTimeoutValue': 200,
      'debug': true,
      'httpCache': false,
      'restCache': false,
      'restServerURL': ''
  })
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

    // enable html5Mode for pushstate ('#'-less URLs)
    $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('!');

  });
