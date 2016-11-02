(function() {

  angular
    .module('piratesApp', ['ngRoute'])
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/pirates', {
        templateUrl: '../views/pirates/index.html',
        controller: 'PiratesController',
        controllerAs: 'vm',
        resolve: {
          pirates: getAllPirates
        }
      })
      .otherwise({redirectTo: '/pirates'})
    $locationProvider.html5Mode(true);
  }

  function getAllPirates(PirateService) {
    return PirateService.getPirates();
  }

  config.$inject = ['$routeProvider', '$locationProvider'];
  getAllPirates.$inject = ['PirateService'];

})()
