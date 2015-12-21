app.controller('ModalDemoCtrl', function ($scope, $uibModal) {
    $scope.person;

    $scope.open = function () {
        var modalInstance = $uibModal.open({
          templateUrl:'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          resolve: {
                    params: function(){
                        return {
                            title: 'Custom title 2'
                        };
                    }
         }
        });
  };
 });

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, params, PersonService) {

  $scope.title = 'Custom title';

  $scope.ok = function () {
    $uibModalInstance.close('ok');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $scope.submit = function(){
    console.log($scope.person);
    PersonService.addPerson($scope.person);
  }
});