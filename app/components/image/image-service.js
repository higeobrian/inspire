function ImageService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (callWhenDone) {
		// $.get(url + url2)
		// .then(res => {
		// cb(res.data)
		// ^^^^^^^ How do you call this function?
		return $.get(apiUrl, function (res) {
			res = JSON.parse(res)
			console.log('Image Data:', res)
			callWhenDone(res)
		})
	}
}


//when you add an argument within the () in the getimage function, you can name it watever
// including cb when you call it at the bottom, after it runs the function and fetches the data from local or url
