"use strict";

var $ = function(id) {
            return document.getElementById(id);
        };
		
//			Gets estimate of labor and parts cost from the user, ensuring only numbers greater than 0 are entered,
//  		othersiwse an error is displayed.
		var processEntries = function() {
            var time = $("time").value;
            var parts = $("parts").value;

			//Gets amount of hours, ensures entry is numaric and greater than 0
            if (isNaN(time)) {
                $("time_error").firstChild.nodeValue = "Please enter a numeric value.";
            } 
				else if (time <= 0){
					$("time_error").firstChild.nodeValue = "Please enter a nuber greater than 0.";
			}
			
			//Gets cost of parts, ensures entry is numaric and greater than 0
			if (isNaN(parts)) {
                $("parts_error").firstChild.nodeValue = "Please enter a numeric value.";
            } 
				else if (parts <= 0){
					$("parts_error").firstChild.nodeValue = "Please enter a number greater than 0.";
			}
			
			else {
				$("time_error").firstChild.nodeValue = "";
				$("parts_error").firstChild.nodeValue = "";
				
				//Calculates for $95 an hour plus the cost of parts.
                $("quote").value = parseInt(time * 95) + parseInt(parts); 
            }
			
        };
		
		//Clears boxes
		var clearEntries = function() {
			$("time").value = "";
			$("parts").value = "";
			$("quote").value = "";
			$("time_error").firstChild.nodeValue = "*";
			$("parts_error").firstChild.nodeValue = "*";
		};
		window.onload = function() {
            $("calculate").onclick = processEntries;
		    $("clear").onclick = clearEntries;
            $("time").focus();
			onload = startTime(); //Calling to calendar.js to make clock load
        };


