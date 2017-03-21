"use strict";
var $ = function(id) { return document.getElementById(id); };

var createSlideshow = function() {
    //private variables and functions
    var timer, play = true, speed = 5000;
    var nodes = { image: null, caption: null };
    var img = { cache: [], counter: 0 };
    
    var stopSlideShow = function() { clearInterval( timer ); };
    var displayNextImage = function() {
        img.counter = ++img.counter % img.cache.length;
        var image = img.cache[img.counter];
        nodes.image.src = image.src;
        nodes.caption.firstChild.nodeValue = image.title;
    };
    var setPlayText = function(btn) {
        btn.value = (play)? "Resume": "Pause";
    };
	
    //public methods that have access to private variables and functions
    return {
        getSpeed: function() { return speed; },
        setSpeed: function(newSpeed) { 
            if (!isNaN(newSpeed) && newSpeed >= 200) {
                speed = newSpeed;
            }
            return this;
        },
        loadImages: function(slides) {
            var image;
            for ( var i = 0; i < slides.length; i++ ) {
                image = new Image();
                image.src = "img/" + slides[i].href;
                image.title = slides[i].title;
                img.cache.push( image );
            }
            return this;
        },
        startSlideShow: function() {
            if (arguments.length === 2) { 
                nodes.image = arguments[0]; 
                nodes.caption = arguments[1];
            }
            stopSlideShow();
            timer = setInterval(displayNextImage, speed);
            return this;
        },
        createToggleHandler: function() {
            var me = this;
			
            // closure to be used as the click event handler
            return function() {
                if ( play ) { stopSlideShow(); } else { me.startSlideShow(); }
                setPlayText(this);
                play = ! play; //toggle play flag
            };
        }
    };
};


// create the slideshow object 
var slideshow = createSlideshow();
    
var changeSpeed = function() {
    var msg = 'Current speed is '.concat(slideshow.getSpeed(), 
            ' milliseconds.\nPlease enter a new speed in milliseconds (200 min).');
    var milliseconds = parseInt(prompt(msg, "5000"));
    slideshow.setSpeed(milliseconds).startSlideShow();
};

window.onload = function() { 
    var slides = [
        {href:"1.jpg", title:"Classic Chevy"}, 
        {href:"2.jpg", title:"Ford F-250"},
        {href:"3.jpg", title:"Lifted Jeep Wrangler"},
        {href:"4.jpg", title:"Restored Impala"},
        {href:"5.jpg", title:"Jeep Grand Wagoneer"},
		{href:"6.jpg", title:"Lifted Dodge Ram"}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    $("play_pause").onclick = slideshow.createToggleHandler();
    $("change_speed").onclick = changeSpeed;
	onload = startTime(); //Calling to calendar.js to make clock load
};


