$(window).load(function() {
	$('#slider').bxSlider({
		auto: true,
		autoStart: true,
		captions: true,
		easing: "ease-in-out",
	});
	$("#slider > li > img").on("mouseover", function() {
		$(this).attr("title","");
	});
});
