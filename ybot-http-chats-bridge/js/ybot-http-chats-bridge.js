/*
 * Get text from input
 */
function get_input(){
	return document.getElementById("text_input").value;
}

function getXMLHttpRequest() 
{ 
	    if (window.XMLHttpRequest) req = new XMLHttpRequest();
	    else if (window.ActiveXObject) {     
	        try {
	            req = new ActiveXObject('Msxml2.XMLHTTP');
	        } catch (e){}          
	        try {                                           
	            req = new ActiveXObject('Microsoft.XMLHTTP');
	        } catch (e){}
	    }
	    return req;
}

/*
 * Get text and send to chat via http to Ybot
 */
function send(){
	// make json command
	var com = {type: "broadcast", content: get_input()}
	var command = JSON.stringify(com);
	 	
 	document.getElementById("text_input").value = "";
	// send request
	var xmlhttp = getXMLHttpRequest();
	xmlhttp.open("POST","http://localhost:8080/", false);
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded,application/json");
 	xmlhttp.send(command);
}

