$(document).ready(function() {
	$(".nav a").click(function (){
		var page = $(this).attr("href");
		$('html, body').animate({
			scrollTop: $(page).offset().top - 61
		}, 500);
		return false;
	});
});


