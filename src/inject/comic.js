$(document).ready(function() {
	//Greeting message
	console.log("xkcd-ext: Comic-module succesfully loaded!");

	//Extract title-text
	var titleText = getTitle();

	//Put title text below image
	$('#comic').after('<p class="title-text">' + titleText + '<p>')

	//Enable left, and right key navigation
	$(document).keydown(function(e) {
		var elNum = 0;

		switch (e.which) {
			case 39: //Right arrow
			case 78: //N
			case 76: //L
				elNum = 3;
				break;
			case 37: //Left arrow
			case 80: //P
			case 74: //J
				elNum = 1;
				break;
		}

		//0 == false
		if (elNum)
			$('.comicNav')[0].children[elNum].children[0].click();
	});

	function getTitle() {
		var title;

		//Naive way; works most of the time
		title = $('#comic').children()[0].title;

		if (!title)
			//No title was found, perhaps the comic is a link?
			title = $('#comic').children()[0].children[0].title;

		return title;
	}
});