console.log("chrome extention works?");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log(message.txt);
	if (message.txt == "hello") {

		var everything = document.getElementsByTagName("body");
		console.log('word redactor extension running');

		for (var i = 0; i < everything.length; i++) {

	  		var txt = everything[i].innerHTML;
	  		var tokens = txt.split(/(<.*?>)/);

	  		for (var j = 0; j < tokens.length; j++) {

	    		if (tokens[j].charAt(0) !== '<') {
	      
	      		tokens[j] = tokens[j].replace(/\b(\w\.\w\.)|([.?!])\s+(?=[A-Za-z])/gi,'<span class="redact">. <p></span>');
	    		
	    		}
	  		}

	  		everything[i].innerHTML = tokens.join('');

		}

		var all = document.getElementsByTagName("*");

			for (var i=0, max=all.length; i < max; i++) {
			 all[i].style.color = "black";
			}

		var s=document.getElementsByTagName('p');

			for(i=0;i<s.length;i++)
			{
				if(message.colour == "yellow") {
					console.log("yellow");
					s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "blue") {
					console.log("blue");
					s[i].setAttribute("style", "background-color: #b3d9ff; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "red") {
					console.log("red");
					s[i].setAttribute("style", "background-color: #ffcccc; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "green") {
					console.log("green");
					s[i].setAttribute("style", "background-color: #ccffcc; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "pink") {
					console.log("pink");
					s[i].setAttribute("style", "background-color: #ffccff; margin:20px; font-family: OpenDyslexic;");
				}
				else{
					console.long("no colour");
					s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
				}

			}

		var s=document.getElementsByTagName('li');

			for(i=0;i<s.length;i++)
			{
			    if(message.colour == "yellow") {
					console.log("yellow");
					s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "blue") {
					console.log("blue");
					s[i].setAttribute("style", "background-color: #b3d9ff; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "red") {
					console.log("red");
					s[i].setAttribute("style", "background-color: #ffcccc; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "green") {
					console.log("green");
					s[i].setAttribute("style", "background-color: #ccffcc; margin:20px; font-family: OpenDyslexic;");
				}
				else if(message.colour == "pink") {
					console.log("pink");
					s[i].setAttribute("style", "background-color: #ffccff; margin:20px; font-family: OpenDyslexic;");
				}
				else{
					console.long("no colour");
					s[i].setAttribute("style", "background-color: #ffffcc; margin:20px; font-family: OpenDyslexic;");
				}
			}

		}
	}
