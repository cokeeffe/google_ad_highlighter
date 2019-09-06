chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var element = document.getElementById("tads");
  	element.classList.add("google_add_result");

	}
	}, 10);
});
