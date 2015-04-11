$(document).ready(function() {
	setTimeout(function() {
		$("#supercurtain").css("opacity","0");
		setTimeout(function() {
			$("#supercurtain").css("display","none");
		} ,1000)
	}, 0);
});
$(document).on("beforeunload", function() {
	$("#supercurtain").css("display","none").css("opacity","1");
});
