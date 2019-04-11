document.addEventListener("DOMContentLoaded", function(){
	console.log("DOMContentLoaded");

console.log('linked');

$('#buttonAdd').click(function(){
	var contents = $('#userInputName').val()
	$('ul').append('<li>' + contents + '</li>')
})

$('#buttonRemove').click(function(){
	//var removeList = $('ul').val()
	$('.mainList li:last-child').remove();
});

// $('li').hover(function(){
// 	console.log('hover in');
// 	$(this).css('background-color', 'red');
// }, function(){
// 	console.log('hover out');
// 	$(this).css('background-color', '');
	
$(document).on('dblclick','li', function(){
	$(this).toggleClass('strike').fadeOut('slow');    
});

$('#userInputName').focus(function() {
$(this).val('');
});

$('li').sortable();  

});





