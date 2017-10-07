function httpGet(url) {
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readState == 4 && xmlhttp.status = 200) {
			return xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET", url, false);
	xmlhttp.send();
}

function getStreamInfo(streamName) {
	return JSON.parse(httpGet("https://api.twitch.tv/kraken/streams/"+streamName+"?client_id=482cubwkav5oth8fwy0kpgjpcxsw9x"));
}
