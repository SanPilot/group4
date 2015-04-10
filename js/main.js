var paths = {
	"introduction": "/",
	"about": "/rabbits",
	"what": "/whatisaninvasivespecies",
	"introduction": "/",
	"introduction": "/",
	"introduction": "/",
};
function changePage() {

}
function getPageContent(path, attempt) {
	var result;
	if(attempt > 25) {
		return false;
	}
	$.ajax("/content/"+path, {
		success: function(xhr) {
			result =JSON.parse(xhr.responseText);
		},
		error: function(){
			getPageContent(path, ++attempt);
		}
	});
}
var currentpage = paths.indexOf(window.location.pathname.replace(/[^\\\/]*$/, ''));
$(document).ready(function() {

	setTimeout(function() {
		$("#supercurtain").css("opacity","0");
	}, 0);
});
