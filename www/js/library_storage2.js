//Throws message to thank you.html by gathering session storage from register.js
document.getElementById("thanks").innerHTML = "Thank you for contacting us." + "<br />" + "We will get back to you at " + sessionStorage.contactOption + " as soon as we can.";

//Calling to calendar.js to make clock load
window.onload = function () {
	onload = startTime();
};