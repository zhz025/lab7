'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLike);
	$(".btn btn-default likeBtn").click(clickLike);
}

function clickLike() {
	console.log("Clicked");
    ga("send", "event", "like", "click");
}