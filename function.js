/* Javascript functions goes here */

function fadetoCenter(container, inner){
	/* this basically allows fadeouts to center pivots based on the top and left positions. the magic 400 number is just where the elements are located on the page
		the CSS needs to have position be set to relative, a bit of hardcoding here
	*/
	var boxleft = container.outerWidth()/2;
	var boxtop = container.outerHeight()/2;
	var imgleft = inner.outerWidth()/2;
	var imgtop = inner.outerHeight()/2;
	
	container.animate({
		opacity: 0,
		width: 0,
		height: 0,
		left: boxleft + 400 + 'px',
		top: boxtop + 'px'
	}, 500);
	
	inner.animate({
		opacity: 0,
		width: 0,
		height: 0,
		left: imgleft + 400 + 'px',
		top: imgtop + 'px'
	}, 500);

}
/* 

-declaring the global variables here and storing the jQuery objects here won't work because this is outside the document.ready section, meaning that when the code runs, the stuff out here doesn't exist

-this means that we can only declare the variable here, then initiate them in the document.ready block	
	
	
*/
var circle1;
var circle2;
var circle3;
var circle4;

var innerCircle1;
var innerCircle2;
var innerCircle3;
var innerCircle4;

function clicked1(){
	$('#news').fadeIn(250);
	$('#archive').hide();
	$('#about').hide();
	
	circle1.animate({borderColor: "#FACC2E"}, 0);
	innerCircle1.animate({backgroundColor: "#FACC2E"}, 0);
	
	circle2.animate({borderColor: "white"}, 0);
	innerCircle2.animate({backgroundColor: "white"}, 0);
	
	circle3.animate({borderColor: "white"}, 0);
	innerCircle3.animate({backgroundColor: "white"}, 0);
	
	circle4.animate({borderColor: "white"}, 0);
	innerCircle4.animate({backgroundColor: "white"}, 0);
}

function clicked2(){
	$('#archive').fadeIn(250);
	$('#news').hide();
	$('#about').hide();
		
	circle2.animate({borderColor: "#FACC2E"}, 0);
	innerCircle2.animate({backgroundColor: "#FACC2E"}, 0);
	
	circle1.animate({borderColor: "white"}, 0);
	innerCircle1.animate({backgroundColor: "white"}, 0);
	
	circle3.animate({borderColor: "white"}, 0);
	innerCircle3.animate({backgroundColor: "white"}, 0);
	
	circle4.animate({borderColor: "white"}, 0);
	innerCircle4.animate({backgroundColor: "white"}, 0);
}

function clicked3(){
	$('#about').fadeIn(250);
	$('#news').hide();
	$('#archive').hide();

	circle3.animate({borderColor: "#FACC2E"}, 0);
	innerCircle3.animate({backgroundColor: "#FACC2E"}, 0);
	
	circle1.animate({borderColor: "white"}, 0);
	innerCircle1.animate({backgroundColor: "white"}, 0);
	
	circle2.animate({borderColor: "white"}, 0);
	innerCircle2.animate({backgroundColor: "white"}, 0);
	
	circle4.animate({borderColor: "white"}, 0);
	innerCircle4.animate({backgroundColor: "white"}, 0);
}

function clicked4(){
	circle4.animate({borderColor: "#FACC2E"}, 0);
	innerCircle4.animate({backgroundColor: "#FACC2E"}, 0);
	
	circle1.animate({borderColor: "white"}, 0);
	innerCircle1.animate({backgroundColor: "white"}, 0);
	
	circle2.animate({borderColor: "white"}, 0);
	innerCircle2.animate({backgroundColor: "white"}, 0);
	
	circle3.animate({borderColor: "white"}, 0);
	innerCircle3.animate({backgroundColor: "white"}, 0);
}