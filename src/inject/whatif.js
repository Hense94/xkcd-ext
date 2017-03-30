$(document).ready(function() {
	//Put title text below image
	jQuery('#comic').after('<p>' + jQuery('#comic').children()[0].title + '<p>')

	//Enable left, and right key navigation
	jQuery(document).keyUp(function(e) {
		var elNum;

		switch (e.which) {
			case 39: //Right arrow
			case 78: //N
			case 76: //L
				elNum = 3;
			case 37: //Left arrow
			case 80: //P
			case 74: //J
				elNum = 1;
			default:
				elNum = 0;
		}

		console.log(e.which);

		if (elNum)
			jQuery('.comicNav')[0].children[elNum].children[0].click();
	});
});