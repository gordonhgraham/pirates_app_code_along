(function() {

  angular
    .module('piratesApp')
    .service('PirateService', PirateService)

    function PirateService($http) {
      const BASE_URL = '/api/pirates'

      this.getPirates = function() {
        return $http.get(BASE_URL);
      }

    }

    PirateService.$inject = ["$http"];

})()
