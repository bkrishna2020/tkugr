$("#demo2").als({
	visible_items: 3,
	scrolling_items: 1,
	orientation: "vertical",
	circular: "yes",
	autoscroll: "yes",
	interval: 3000
});																																											

if($(window).width() > 1000){
 $("#demo3").als({
	visible_items: 6,
	scrolling_items: 2,
	orientation: "horizontal",
	circular: "yes",
	autoscroll: "yes",
	interval: 3000
});	
}

else if ($(window).width() < 1000 && $(window).width() > 700 ){
 $("#demo3").als({
	visible_items: 3,
	scrolling_items: 2,
	orientation: "horizontal",
	circular: "yes",
	autoscroll: "yes",
	interval: 3000
});	
}

else if ($(window).width() < 699 && $(window).width() > 500 ){
 $("#demo3").als({
	visible_items: 2,
	scrolling_items: 1,
	orientation: "horizontal",
	circular: "yes",
	autoscroll: "yes",
	interval: 3000
});	
}


else{
 $("#demo3").als({
	visible_items: 1,
	scrolling_items: 1,
	orientation: "horizontal",
	circular: "yes",
	autoscroll: "yes",
	interval: 3000
});
}