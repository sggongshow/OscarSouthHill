// ==UserScript==
// @name        Document Review buttons
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     */dms/showDocument.jsp?*
// @include     */dms/MultiPageDocDisplay.jsp?*
// @include     *lab/CA/ALL/labDisplay.jsp?*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==
//window.moveTo(300, 100)

 ///FOR TICKLER KEYBOARD SHORTCUT TO BE ENABLED




document.addEventListener('keydown', function(theEvent) {
	var theKey = theEvent.key
	var theAltKey =theEvent.altKey;
	var theCtrlKey = theEvent.ctrlKey;
	var theShiftKey= theEvent.shiftKey;

	switch(true){
      //Acknowledge  button
    case theAltKey && theKey==='1': 
      
      showAlert()
			break;
      
      //Tickler 
		case theAltKey && theKey==='2': 
 			showAlert1()
			break;
      
      //Echart
    case theAltKey && theKey==='3': 
 			showAlert2()
			break;
      
    case theAltKey && theKey==='q': //back page
 			var button = $('[id*="prevP"]')[0]
      
      //check if button is visible	
			var visible = true
     	var styleVal = button.getAttribute("style")
      if (styleVal != null){
      	if (styleVal.includes("inline") == false ){
        visible = false
        } else{
        visible = true
        }
      }
      
      //if visible and on correct page then click
  		if ((window.location.pathname.includes("DocDisplay.jsp")||window.location.pathname.includes("showDocument.jsp") ) && visible == true ){
  			button.click()
  		}
			break;
      
      
    case theAltKey && theKey==='w': //fwd page
      
      var button = $('[id*="nextP"]')[0]
      console.log(button)
			//check if button is visible	
			var visible = true
      
     	var styleVal = button.getAttribute("style")
      console.log(styleVal)
      if (styleVal != null){
      	if (styleVal.includes("inline") == false ){
        visible = false
        } else{
        visible = true
        }
      }
      console.log(visible)
      //if visible and on correct page then click
  		if ((window.location.pathname.includes("DocDisplay.jsp")||window.location.pathname.includes("showDocument.jsp") ) && visible == true ){
  			button.click()
  		}
			break;
      
    case theAltKey && theKey==='e': //last page
 			var button = $('[id*="lastP"]')[0]
      
      //check if button is visible	
			var visible = true
     	var styleVal = button.getAttribute("style")
      if (styleVal != null){
      	if (styleVal.includes("inline") == false ){
        visible = false
        } else{
        visible = true
        }
      }
      
      //if visible and on correct page then click
  		if ((window.location.pathname.includes("DocDisplay.jsp")||window.location.pathname.includes("showDocument.jsp") ) && visible == true ){
  			button.click()
  		}
			break;
      
      
    default:
    	break;

	}
}, true);

//New input box that follows the page
var inputTextbox = document.createElement('input');
inputTextbox.type = 'text';
inputTextbox.id = 'newTextBoxInput'
inputTextbox.name = 'newTextBoxInput'
//inputTextbox.value = ""


if (window.location.pathname.includes("labDisplay.jsp")){
	inputTextbox.setAttribute('style', 'width:140px;font-size:12px;padding:0px;position:fixed;top:58px;left:518px; border-color:red;');
	document.body.appendChild(inputTextbox);
}


//ACKNOWLEDGE BUTTON
var input = document.createElement('input');
input.type = 'button';
input.value = 'Acknow';
input.onclick = showAlert

if (window.location.pathname.includes("labDisplay.jsp")){
input.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:40px;left:400px; background-color:#66ff66;');
}else{
input.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:30px;right:10px; background-color:#66ff66;');
}

document.body.appendChild(input);
function showAlert()
{
  //Covering the dumb various codings of the acknowledge button
  
	
    
  //weird lab/transcriptions page
  if (window.location.pathname.includes("labDisplay.jsp")){ 

    //Acknowledge will also auto click label if there is text in label. 
    //If nothing in text box then won't click Label button
    var labelButton = $('[type="button"][value="Label"][id*="Label"]') 
    var labelEntry = $('input[id*="acklabel"][type="text"][name*="label"]')
    var labelEntryID = labelEntry.attr('id')
    var labelElement = document.getElementById(labelEntryID);

    //Check secondary textbox for value, input to original text box
    var newTextBoxVal = document.getElementById('newTextBoxInput').value
    labelElement.value = newTextBoxVal
    var labelEntryText = labelEntry.val()

    if (labelEntryText.length >0){ //check if anything in text box. 
      labelButton.click()
    }

  }else{//Edoc page
    var saveButton = $('input[type="submit"][name="save"][id*="save"]')
    saveButton.click()
  }
  
  //click acknowledge button or close if no acknowledge button  	
  var button
  if (window.location.pathname.includes("labDisplay.jsp")){
  var button = $('input[type="button"][value="Acknowledge"]')[0]
  }else{
  var button = $('input[type="submit"][value="Acknowledge"]')[0]
  }
  
  // if no ack, close button instead
  if (button == null){
    button = $('input[type="button"][value*="Close"]')
  }
     
  console.log(button)
  var parentId = $(button).closest('form').attr('id');
  if (parentId.includes('acknowledge')){
  	button.click()
  }
} 

var input1 = document.createElement('input');
input1.type = 'button';
input1.value = 'Tickler';
input1.onclick = showAlert1;
if (window.location.pathname.includes("labDisplay.jsp")){
input1.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:40px;left:480px; background-color:#FF6600;');
}else{
input1.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:60px;right:10px; background-color:#FF6600;');
}
document.body.appendChild(input1);
function showAlert1()
{
  var button = $('input[type="button"][value="Tickler"]') 
  var parentId = $(button).closest('form').attr('id')
  if (parentId.includes('acknowledge')){
  	button.click()
  }
}

var input2 = document.createElement('input');
input2.type = 'button';
input2.value = 'Echart';
input2.onclick = showAlert2;
if (window.location.pathname.includes("labDisplay.jsp")){
input2.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:40px;left:560px;');
}else{
input2.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:90px;right:10px;');
}
document.body.appendChild(input2);
function showAlert2()
{
  var button = $('input[type="button"][value*="Chart"]') 
  var parentId = $(button).closest('form').attr('id')
  if (parentId.includes('acknowledge')){
  	button.click()
  }
 
}


var docNameDiv = $('div.FieldData:contains("Requesting Client")')
var fullName = docNameDiv.text().split(':')[1]
var lastName = fullName.split(' ')[1]
var firsNname = fullName.split(' ')[0]

if (window.location.pathname.includes("labDisplay.jsp")){
  var input3 = document.createElement('input');
  input3.type = 'button';
  input3.value = '?Specialty';
  input3.onclick = showAlert3;
  input3.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:40px;left:640px;');
  document.body.appendChild(input3);
  function showAlert3(){
    console.log("pressed Specialty")
   	console.log(document.getElementById('newTextBoxInput').value)
 		
  }
    
    //var docNameDiv = $('div.FieldData:contains("Requesting Client")')
		//var fullName = docNameDiv.text().split('`r')[1]
		//var lastName = fullName.split(' ')[1]
		//var firstName = fullName.split(' ')[0]
		//alert(fullName)

}







