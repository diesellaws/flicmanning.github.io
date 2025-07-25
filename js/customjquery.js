console.log("customjquery.js loaded");
$(document).ready(function() {
	
	$('#play-video').on('click', function(e){
	  e.preventDefault();
	  $('#video-overlay').addClass('open');
	  $("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/iiQd__qU8VY?autoplay=1" frameborder="0" allowfullscreen allow="autoplay"></iframe>');
	});

	$('.video-overlay, .video-overlay-close').on('click', function(e){
	  e.preventDefault();
	  close_video();
	});

	$(document).keyup(function(e){
	  if(e.keyCode === 27) { close_video(); }
	});

	function close_video() {
	  $('.video-overlay.open').removeClass('open').find('iframe').remove();
	};
	
});
