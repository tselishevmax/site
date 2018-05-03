$(function() {
	$.getJSON('images.json', function(data) {
		var parent = $('#images');
		for (var src of data.images) {
			var newImg = $('<img>', {
				src: data.root + src
			});
			parent.append(newImg);
		}
	});
});
