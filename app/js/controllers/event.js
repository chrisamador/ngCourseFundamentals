'use strict';



eventsApp.controller('EventController',
	function ($scope, eventData, $log) {
// $http
	// eventData.getEvent()
 //        .success(function(data, status, headers, config){
 //            $scope.event = data;
 //        })
 //        .error(function(data, status, headers, config){
 //            $log.warn(data, status, headers(), config)
 //        });
 //        
    
    $scope.event = eventData.getEvent();

	$scope.filterFn = function(str){
		console.log(str);
	}

	$scope.upVoteSession = function(session){
		session.upVoteCount++;
	}
	$scope.downVoteSession = function(session){
		session.upVoteCount--;
	}

	$scope.snippet = '<span style="color:red">hi <br/> <strong>there</strong></span>';

});