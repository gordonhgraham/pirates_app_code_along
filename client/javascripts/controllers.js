(function() {

  angular
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('ShowPirateController', ShowPirateController)

    function PiratesController(pirates) {
      var vm = this;
      vm.pirates = pirates.data;
    }

    function ShowPirateController(PirateService, $route) {
      var vm = this;

      vm.removePirate = function(id) {
        PirateService.deletePirate(id).then(function() {
          $route.reload();
        })
      }
    }

    PiratesController.$inject = ['pirates'];
    ShowPirateController.$inject = ['PirateService', '$route'];

})()
