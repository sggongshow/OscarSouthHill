// ==UserScript==
// @name        Eform buttons
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     */eform/efmformadd_data.jsp?*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==
//window.moveTo(300, 100)

/*
function setCookie(cname, cvalue, exdays, cpath)
{
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  //d.setTime(d.getTime() + (exdays * 5000));
  var expires = 'expires=' + d.toGMTString();
  document.cookie = cname + '=' + cvalue + '; ' + expires + '; ' + cpath
}
function getCookie(cname)
{
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
} //x = $('#enTemplate');
//x.css('background-color', 'yellow');
*/

/* ///FOR TICKLER KEYBOARD SHORTCUT TO BE ENABLED

var myWindow = ''
var elements = (window.location.pathname.split('/', 2))
firstElement = (elements.slice(1)) //alert(firstElement)
vPath = ('https://' + location.host + '/' + firstElement + '//') 


//alert(vPath)

var myParam = location.search.split('demographic_no=') [1] 
var res = myParam.indexOf('&')
var demo_no = myParam
if (res > 0){
	var demo_no = myParam.substring(0, res)
}
//alert('res ' + res)
//alert('Demo ' + demo_no)

document.addEventListener('keydown', function(theEvent) {
	var theKey = theEvent.key
	var theAltKey =theEvent.altKey;
	var theCtrlKey = theEvent.ctrlKey;
	var theShiftKey= theEvent.shiftKey;

	switch(true){
		case theAltKey && theKey==='t': //Tickler 
 			var formPath = vPath + '/tickler/ticklerAdd.jsp?demographic_no=' + demo_no //var formPath = vPath + "/eform/efmformadd_data.jsp?fid=81&demographic_no=" + demo_no
  		//alert(formPath)
  		window.open(formPath, 'Popup_Window', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=1000,height=800,left = 312,top = 234');
			//https://doctors-office-surrey.kai-oscar.com/oscar/tickler/ticklerAdd.jsp?demographic_no=5
			break;
      
    default:
      break;

	}
}, true);
*/

var input = document.createElement('input');
input.type = 'button';
input.value = 'Submit';
input.onclick = showAlert
input.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:0px;left:0px; background-color:#66ff66;');
document.body.appendChild(input);
function showAlert()
{
	var subButton = $('input[type="submit"][value="Submit"]')
  //console.log(subButton)
  if (subButton.length <1){
    subButton = $('input[type="button"][value="Submit"]')
    //console.log("note1")
    //console.log(subButton)
  }else if(subButton.length <1){
		subButton = $('#SubmitButton')
    //console.log("note2")
    //console.log(subButton)
  }
     
  //console.log(subButton)
  subButton.click()
} 

var input1 = document.createElement('input');
input1.type = 'button';
input1.value = 'Sub&Print';
input1.onclick = showAlert1;
input1.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:30px;left:0px; background-color:#66ff66;');
document.body.appendChild(input1);
function showAlert1()
{
  $('#PrintSubmitButton').click()
  
}
