function getClientID() {
  try {
    var trackers = ga.getAll();
    var i, len;
    for (i = 0, len = trackers.length; i < len; i += 1) {
      if (trackers[i].get('trackingId') === "{{CFG_UAId}}") {
        return trackers[i].get('clientId');
      }
    }
  } catch(e) {}  
  return 'false';
}

try {
	var frm =  document.getElementById('registration');	
	var clientid = getClientID();
	if (typeof(frm) != 'undefined' && frm != null && clientid != null) {
		var input = document.createElement("input");
		input.setAttribute("type", "hidden");
		input.setAttribute("name", "clientid");
		input.setAttribute("value", "" + clientid + "");
		frm.appendChild(input);
		console.log("Added clientid field for " + clientid);
		}
}catch(e) {
    console.log("Error trying to add clientid field " + e.message);
}
