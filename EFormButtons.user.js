// ==UserScript==
// @name        Eform buttons
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     */eform/efmformadd_data.jsp?*
// @include     */efmshowform_data.jsp?*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==
//window.moveTo(300, 100)

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
      //Confirm  button
    case theAltKey && theKey==='1':
      showAlert()
    
			break;
      
    default:
      break; 
  }
  
  
}, true);


var input = document.createElement('input');
input.type = 'button';
input.value = 'Submit.';
input.onclick = showAlert
input.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:0px;left:0px; background-color:#66ff66;');
input.classList.add('DoNotPrint')
document.body.appendChild(input);
function showAlert()
{
	var subButton = $('input[type="submit"][value="Submit"]')
  //console.log(subButton)
  if (subButton.length <1){
    subButton = $('#SubmitButton')
    //console.log("note1")
    console.log(subButton)
  }
  if(subButton.length <1){
		subButton = $('input[type="button"][value="Submit"][value*="Submit"]')
    //console.log("note2")
    console.log(subButton.length)
  }
     
  //console.log(subButton)
  subButton.click()
  //unsafeWindow.submission()
} 

var input1 = document.createElement('input');
input1.type = 'button';
input1.value = 'Sub&Print';
input1.onclick = showAlert1;
input1.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:30px;left:0px; background-color:#66ff66;');
input1.classList.add('DoNotPrint')  
document.body.appendChild(input1);
function showAlert1()
{
  $('input[value*=Print][value*=Submit]').click()
}


