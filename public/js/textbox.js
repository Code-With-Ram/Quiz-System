$(document).ready(function(){
	
	$('.text-box > input').focus(function(){
	$('.text-box').css({'border-bottom':' 1px solid green'});	
	$(document.activeElement).parent().css({'border-bottom':' 1px solid skyblue'});
	})
	
});


