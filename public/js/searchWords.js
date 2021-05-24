$(document).ready(function(e){
	$('.choose-type-dropdown a').click(function(e){
		e.preventDefault();
		$('.search-type-btn').text($(this).text());
		$('#word-search').attr('href', `/word?type=${$(this).attr('href')}`);
	});
	$('#word-search').click(e =>{
		// e.preventDefault();
		var inputVal = $('.search-ct input[name=search]').val();
		var currentAction = $('#word-search').attr('href');
		$('#word-search').attr('href', `${currentAction}&s=${inputVal}`);
	});
});