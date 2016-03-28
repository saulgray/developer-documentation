// at some point, this function needs to be called.

// this means document ready. 
// don't want jquery running before html is ready

// collect all headers from the body
// if HTTP request in title, add span
// append to body
// This will allow styling to be applied via CSS

$(gatherHeaders);

function gatherHeaders(){
	var headers, headerText, self;

	headers = $('h1, h2, h3');

	headers.each(function(){
		self = $(this);
	  	headerText = self.text();
	  
	  	self.html(addSpan(headerText));
	});
}


function addSpan(headerText){
	return headerText
		.replace(/GET/, '<span class="get">GET</span>')
		.replace(/PUT/, '<span class="put">PUT</span>')
		.replace(/POST/, '<span class="post">POST</span>')
		.replace(/DELETE/, '<span class="delete">DELETE</span>');
}