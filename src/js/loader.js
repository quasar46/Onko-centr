/*
All loaders here need to meet following requirements:
- their size must depend on the font-size of their parent;
- they must only use the color of their parent;
- they must be single elements with no children elments;
*/



$('.modal__form .btn').on('click', function(evt){
	evt.preventDefault();
	var number = 14;
	$(this).html('<div class="loader-' + number + '"></div>').addClass('active');
	console.log('Resize window to change size and color of the button');
});