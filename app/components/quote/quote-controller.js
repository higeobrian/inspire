function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		console.log('What is the quote', quote)
		var template = `<h5>${quote.quote}</h5>
		<h6>-${quote.author}</h6>
		`
		document.getElementById('quote').innerHTML = template
	})
	
}


