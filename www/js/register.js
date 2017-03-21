"use strict";
var $ = function(id) { return document.getElementById(id); };

var processEntries = function() {   
    var header = "";
    var html = "";
    var required = "<span>Required field</span>";
    var email = $("email_address").value;
    var phone = $("phone").value;
    var contact = "Text"; sessionStorage.contactOption = $("phone").value;
    if ($("email").checked) { contact = "Email"; sessionStorage.contactOption = $("email_address").value; }
    if ($("mobile").checked) { contact = "Mobile"; sessionStorage.contactOption = $("phone").value; }
	var emailValid = true;
	var phoneValid = true;
	
	//Gets email address and ensures that there is a valid entry of xxxxx@xxxx.xxx
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
	 	$("email_error").firstChild.nodeValue = "*";
		emailValid = true;
	} 
		else { 
			$("email_error").firstChild.nodeValue = "Please use xxxxx@xxxx.xxx format."; 
			emailValid = false; 
		}
	
	//Gets phone number and ensures that there is a valid entry of xxx-xxx-xxxx, or xxx.xxx.xxx and allows parentheses
	if (/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/.test(phone) ||
	 	/^(\([0-9]{3}\)\s*|[0-9]{3}\.)[0-9]{3}.[0-9]{4}$/.test(phone)) {
	 	$("phone_error").firstChild.nodeValue = "*";
		phoneValid = true;
	} 
		else { 
			$("phone_error").firstChild.nodeValue = "Please use 123-555-4567 format."; 
			phoneValid = false; 
		} 

	
	//Sends user to validation page if everything is entered correctly
	if (emailValid && phoneValid) {
		$("registration_form").submit(); 
	}
	    
};


//Code for errors if phone number entry is not valid inputs of (xxx) xxx-xxxx, xxx-xxx-xxxx, or xxx.xxx.xxxx

//Code for validatiing that phone number entry is valid inputs of (xxx) xxx-xxxx, xxx-xxx-xxxx, or xxx.xxx.xxx

//Clears boxes
var resetForm = function() {
    $("registration_form").reset();
    $("registration_info").innerHTML = "";
    $("email_address").focus();
};

window.onload = function() {
    $("register").onclick = processEntries;
    $("reset_form").onclick = resetForm;    
    $("email_address").focus();
	onload = startTime(); //Calling to calendar.js to make clock load
};