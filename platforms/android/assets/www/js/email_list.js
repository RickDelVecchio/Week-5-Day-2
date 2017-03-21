"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
	var emailAddress1 = $("email_address1").value;
	var emailAddress2 = $("email_address2").value;
		var isValid = true;
	
	//Gets email address, ensures there is an entry
	if (emailAddress1 === "") { 
		$("email_address1_error").firstChild.nodeValue = "This field is required.";
		isValid = false;
	} else { $("email_address1_error").firstChild.nodeValue = "*"; } 
	
	//Confirms email address, ensures entry matches entry above
	if (emailAddress1 !== emailAddress2) { 
		$("email_address2_error").firstChild.nodeValue = "This entry must equal first entry.";
		isValid = false;
	} else { $("email_address2_error").firstChild.nodeValue = "*"; }     
    
	//Gets first name, ensures there is an entry    
	if ($("first_name").value === "") {
		$("first_name_error").firstChild.nodeValue = 
                        "This field is required.";
		isValid = false;
	} else { $("first_name_error").firstChild.nodeValue = "*"; }  
	
	//Stores session data and sends user to validation page if everything is entered correctly
	if (isValid) {
		sessionStorage.name = $("first_name").value;
		sessionStorage.email = $("email_address1").value;
		$("email_form").submit(); 
	}
};





window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
	onload = startTime(); //Calling to calendar.js to make clock load
};
