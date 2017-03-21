"use strict";
var $ = function(id) { return document.getElementById(id); };

//event library for rollover
var evt = {
    attach: function(node, eventName, func) {
        if (node.addEventListener) {
            node.addEventListener(eventName, func);
        } else if (node.attachEvent) {
            node.attachEvent("on" + eventName, func);
        }
    },
    detach: function(node, eventName, func) {
        if (node.removeEventListener) {
            node.removeEventListener(eventName, func);
        } else if (node.detachEvent) {
            node.detachEvent("on" + eventName, func);
        }
    },
    preventDefault: function(e) {
        e = e || window.event;
        if ( e.preventDefault ) { e.preventDefault(); }
        else { e.returnValue = false; }
    }
};

var createRollover = function(imgTag, secondUrl, secondAlt) {   
    //store first image info
    var firstUrl = imgTag.src;
    var firstAlt = imgTag.alt;
    
    //preload second image
    var image = new Image();
    image.src = secondUrl;    
    
    //create event handlers
    var mouseover = function() { 
        imgTag.src = secondUrl; 
        imgTag.alt = secondAlt;
    };
    var mouseout = function() { 
        imgTag.src = firstUrl; 
        imgTag.alt = firstAlt;
    };
    
    //attach event handlers 
    evt.attach(imgTag, "mouseover", mouseover);
    evt.attach(imgTag, "mouseout", mouseout);
};

window.onload = function() {
    createRollover($("img1"), "img/4.jpg", "Restored Impala");
    createRollover($("img2"), "img/5.jpg", "Jeep Grand Wagoneer");
	createRollover($("img3"), "img/6.jpg", "Lifted Dodge Ram");
	onload = startTime(); //Calling to calendar.js to make clock load
};