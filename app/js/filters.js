'use strict';

eventsApp.filter('eventLevel', function() {
  return function(input) {

    var output;

    switch(input){
    	case "Introductory": output = "nice";
    		break;
    	case "Advanced": output = "dude";
    		break;
    	default:
    		output = input;
    		break;
    }

    return output;

  }
});