$(document).ready(function() {

	$('#minmax_button').bind('click', one);
	$('#minmax_button').bind('click', two);	
  $('#minmax_button').click(function() {
    $('#editor_wrapper').toggleClass('minimize');
    $(this).unbind('click', two);

  });


  $("#editor_wrapper").draggable();

  $("#editor_wrapper").on('dragstop', function(event) {
  	console.log('top ' + $(this).css('top'));
  	console.log('left' + $(this).css('left'));
  	event.preventDefault();
  })
});

function one() {
	alert('one');
}

function two() {
	alert('two');
}