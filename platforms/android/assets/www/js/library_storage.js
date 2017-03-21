//Throws message to join.html by gathering session storage from email_list.js
document.getElementById("join_result").innerHTML = "Thank you, " + sessionStorage.name + ", for joining our newsletter!" + "<br />" + "A confirmation email will be sent to " + sessionStorage.email;

//Calling to calendar.js to make clock load
window.onload = function () {
	onload = startTime();
};