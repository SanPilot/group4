$(window).load(function() {
	$('#slider').bxSlider({
		auto: true,
		autoStart: true,
		captions: true
	});
	$("#slider > li > img").on("mouseover", function() {
		$(this).attr("title","");
	});
});
