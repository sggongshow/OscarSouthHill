// ==UserScript==
// @name        EDocument Management
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     *oscar/dms/documentReport.jsp*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==

var myWindow = ''
const elements = (window.location.pathname.split('/'))
firstElement = elements[1] //alert(firstElement)
vPath = ('https://' + location.host + '/' + firstElement + '/' + elements[2] + '/' + elements[3])
//alert (vPath)



var IDUrlLeft = location.search.split('functionid=') [0]//Get Left side
var IDUrlRight = location.search.split('functionid=') [1]//get Right sided of url

var res = IDUrlRight.indexOf('&')
var ID = ""
if (res > 0){ //there's more to right side on URL, move it so that view is last
	var ID = IDUrlRight.substring(0,res)
  newURL = vPath + "?function=demographic&functionid=" + ID + "&view="
} else {//nothing on right side of view
  var ID = IDUrlRight
  newURL = vPath + "?function=demographic&functionid=" + ID + "&view="
}
//alert(newURL)



var input = document.createElement('input');
input.type = 'button';
input.value = 'Consult';
input.onclick = showAlert
input.setAttribute('style', 'width:60px;height:20px;font-size:14px;z-index:1;position:fixed;top:0px;left:460px; background-color:#66ff66;');
document.body.appendChild(input);
function showAlert()
{
  window.location = (newURL + "consult");
} 

var input1 = document.createElement('input');
input1.type = 'button';
input1.value = 'Others';
input1.onclick = showAlert1;
input1.setAttribute('style', 'width:60px;height:20px;font-size:14px;z-index:1;position:fixed;top:0px;left:520px; background-color:#66ff66;');
document.body.appendChild(input1);
function showAlert1()
{
  window.location = (newURL + "others");
}

var input2 = document.createElement('input');
input2.type = 'button';
input2.value = 'All';
input2.onclick = showAlert2;
input2.setAttribute('style', 'width:60px;height:20px;font-size:14px;z-index:1;position:fixed;top:0px;left:400px; background-color:#66ff66;');
document.body.appendChild(input2);
function showAlert2()
{
  window.location = (newURL + "");
}

