$(function() {
	$(document).on('focusin', '.field, textarea', function() {
		if(this.title==this.value) {
			this.value = '';
		}
	}).on('focusout', '.field, textarea', function(){
		if(this.value=='') {
			this.value = this.title;
		}
	});
	
	$('#slider-one').carouFredSel({
		width: '100%',
		scroll: 1,
		prev: '#prev-1',
		next: '#next-1',
		items: {
			visible: {
				min: 3,
				max: 3
			}
		}
	});
	
	$('#slider-two').carouFredSel({
		width: '100%',
		scroll: 1,
		prev: '#prev-2',
		next: '#next-2',
		items: {
			visible: {
				min: 3,
				max: 3
			}
		}
	});
	
	$('.direct-nav a').click(function(){
		$(this).parent().parent().find('.slider').trigger("pause");
		return false;
	});
	
	/*
	$('a.prev').click(function(){
		$('.slider').trigger("prev");
	});
	$('a.next').click(function(){
		$('.slider').trigger("next");
	});
	*/
	
});