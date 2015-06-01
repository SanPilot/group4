function createPopup() {
	$("body").prepend("<div id='movedwrapper'><div id='moved'><span id='movedheader'>Important Notice</span><br>Rabbitsaninvasivespecies.com has moved to rabbitsaninvasivespecies.cf (.com to .cf).<br> In the future, rabbitsaninvasivespecies.com will no longer work.<div id='movedinputs'><input type='checkbox' id='movedcheck'><label for='movedcheck' id='movedchecklabel'>Don't show me this again</label><button id='movedbtn'>Okay</button></div></div></div>");
}
$(document).ready(function() {
	alert(document.referrer);
	if(!getCookie("moved")) {
		createPopup();
	}
	$("#movedbtn").on("click", function() {
		$("#movedwrapper").css("opacity", "0");
		setTimeout(function() {
			$("#movedwrapper").css("display", "none");
		}, 400);
		if($("#movedcheck").is(":checked")) {
			createCookie("moved","true",36500);
		} else {
			createCookie("moved","true");
		}
	});
});
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
var createCookie = function(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
};
var getCookie = function(c_name) {
	if (document.cookie.length > 0) {
		var c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			return true;
		}
	}
	return false;
};
