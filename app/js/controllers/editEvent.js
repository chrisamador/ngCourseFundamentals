eventsApp.controller('editEventCtrl',
	function ($scope) {
		function soap(i){
			this.name = "man"
			this.item = i;
		}
		$scope.saveEvent = function(singleEvent){
			console.log(new soap(singleEvent));
		}

		$scope.cancelEvent = function(singleEvent){
			console.log($scope);
			$scope.jaw.$setUntouched();
			$scope.currentRecord={};


		}
});