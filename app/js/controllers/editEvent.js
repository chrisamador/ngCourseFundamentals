eventsApp.controller('editEventCtrl',
	function ($scope, eventData) {
		function soap(i){
			this.name = "man"
			this.item = i;
		}
		$scope.saveEvent = function(event, jaw){
			if(jaw.$valid){
				eventData.saveEvent(event)
					.$promise
					.then(function(res){
						console.log('success', res);
					})
					.catch(function(res){
						console.log('failure', res);
					})
			}
		}

		$scope.cancelEvent = function(singleEvent){
			console.log($scope);
			$scope.jaw.$setUntouched();
			$scope.currentRecord={};


		}
});