$(window).load(function() {
	setTimeout(function() {
		$("#supercurtain").css("opacity","0");
		setTimeout(function() {
			$("#supercurtain").css("display","none");
		}, 1000);
	}, 0);
});
$(window).bind("beforeunload", function() {
	$("#supercurtain").css("display","block").css("opacity","1");
});
