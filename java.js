/* jQuery code activations goes here */

$(document).ready(function(){
	$('.navCircle').hide();
	$('#navScreen').hide();
	$('#circle').hide();
	$('#circleA').hide();
	
	$('#circle').fadeIn(500);
	$('#circleA').fadeIn(500);
	
	$('#news').fadeIn(250);
	$('#archive').hide();
	$('#about').hide();
	
	/* i made a note about having to initiate the global variables inside the document.ready or else it won't work in the function.js. This is because things that 		happen outside of document.ready doesn't "exist" when the code runs, so global variables have to be initiated here to work separately in functions */
	circle1 = $('#circle1');
	circle2 = $('#circle2');
	circle3 = $('#circle3');
	circle4 = $('#circle4');
	
	innerCircle1 = $('#innerCircle1');
	innerCircle2 = $('#innerCircle2');
	innerCircle3 = $('#innerCircle3');
	innerCircle4 = $('#innerCircle4');
	
	
	$('#circle').click(function(){
		/*fadetoCenter($('#circle'), $('#circleA'));*/
		$('#circle').fadeOut(250);
		$('#circleA').fadeOut(250);
		$('#circle1').fadeIn(250, function(){
			clicked1();
			$('#circle2').show().animate({top: "300px"}, 250);
			$('#circle3').show().animate({top: "450px"}, 250);
			$('#circle4').show().animate({top: "600px"}, 250);
			$('#navScreen').show("clip", 250);
		});
		
		/*
		$('#circle').animate({width:"0px", height: "0px", opacity: "0"}, 500);
		$('#circleA').animate({width:"0px", height: "0px", opacity: "0"}, 500);*/
		/*
		this method is nice and all, but I don't feel safe with the -moz and all the other properties I've never seen before
		$('#circle').addClass("hidden");
		$('#circleA').addClass("hidden");
		*/
	});
	
	$('#circle').mouseenter(function(){
		$('#circle').animate({backgroundColor: "#A9E2F3"}, 0);
	});
	
	$('#circle').mouseleave(function(){
		$('#circle').animate({backgroundColor: "white"}, 0);
	});
	
	$('.navCircle').mouseenter(function(){
		/*$(this).animate({backgroundColor: "#A9E2F3"}, 0);*/
		$(this).animate({backgroundColor: "white"}, 0);
	});
	
	$('.navCircle').mouseleave(function(){
		$(this).animate({backgroundColor: "transparent"}, 0);
	});
	
	$('#circle4').click(function(){
		/* this is literally the same step process as when #circle is clicked above, with the line positionings being reversed */
		$('#circle2').animate({top: "-=150px"}, 250); /* -= means take current position and subtract that much pixels from it (or add if + sign) */
		$('#circle3').animate({top: "-=300px"}, 250);
		$('#circle4').animate({top: "-=450px"}, 250, function(){
			$('#circle1').fadeOut(250);
			$('#circle2').fadeOut(250);
			$('#circle3').fadeOut(250);
			$('#circle4').fadeOut(250);
			$('#navScreen').hide("clip",250, function(){
				$('#circle').fadeIn(500);
				$('#circleA').fadeIn(500);	
			});	
		});
	});
	
	$('.navCircle').mousedown(function(){
		/*$(this).animate({backgroundColor: "#58D3F7"}, 0);*/
		$(this).animate({backgroundColor: "#DF0101"}, 0);
	});
	
	$('#circle1').mouseup(function(){
		/* button for opening the news section */
		$(this).animate({backgroundColor: "white"}, 0);
		clicked1();
	});
	
	$('#circle2').mouseup(function(){
		/* button for opening the archive section */
		$(this).animate({backgroundColor: "white"}, 0);
		clicked2();
	});
	
	$('#circle3').mouseup(function(){
		/* button for opening the about me section */
		$(this).animate({backgroundColor: "white"}, 0);
		clicked3();
	});
	
	$('#circle4').mouseup(function(){
		/* the exit button */
		$(this).animate({backgroundColor: "white"}, 0);
		clicked4();
	});
	
	$('.spaces').mouseenter(function(){
		$(this).animate({borderColor: "#FACC2E"}, 0);
	});	
		
	$('.spaces').mouseleave(function(){
		$(this).animate({borderColor: "black"}, 0);
	});
	
	
});