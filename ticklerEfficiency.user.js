// ==UserScript==
// @name        Tickler Efficiency
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     */ticklerAdd.jsp?*
// @include     *ForwardDemographicTickler.do?*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==


//wait window load first
window.addEventListener('load', function() {
  var textBox = $('textarea[name="textarea"]')
  textBox.select()  
}, false);


document.addEventListener('keydown', function(theEvent) {
	var theKey = theEvent.key
	var theAltKey =theEvent.altKey;
	var theCtrlKey = theEvent.ctrlKey;
	var theShiftKey= theEvent.shiftKey;
  
  
  switch(true){
      //Acknowledge  button
    case theAltKey && theKey==='1': 
      var subButton = $('input[type="button"][value*=Submit][value*=EXIT]')
      subButton.click()
			break;
      
    default:
      break; 
  }
  
  
}, true);
