var app = {};
 
(function($){
	"use strict";


	var $window = $(window),
	$document = $(document);


	app.event = function () {

		 $("#button").click(function(){
		 	
		 	$("#maDiv").animate({
            	left: "+=500",
				width:"+=200",
				height:"+=200",
				fontSize:"+=30",
				borderStyle:"dotted"
        	}, 3000,function(){
	        	$("#span").addClass("text");
	        	$("#maDiv").addClass("bordure");
	        	});
        	
     
  		});

	}

	$document.ready(function () {
		app.event();
	});

})(jQuery);