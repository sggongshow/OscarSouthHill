// ==UserScript==
// @name        Echart buttons
// @namespace   GongOscar
// @description Various navigation buttons for echart screen.  Set your own specific fid (form number) or Measurement groupName
// @include     */eform/efmformadd_data.jsp?*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// @grant       none
// ==/UserScript==
//window.moveTo(300, 100)
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

var myWindow = ''
var elements = (window.location.pathname.split('/', 2))
firstElement = (elements.slice(1)) //alert(firstElement)
vPath = ('https://' + location.host + '/' + firstElement + '//') 


//alert(vPath)

var myParam = location.search.split('demographicNo=') [1] //alert(myParam)
var res = myParam.indexOf('&')
var demo_no = myParam.substring(0, res) //var myWindow = window.open("","","width=200,height=100");

var input = document.createElement('input');
input.type = 'button';
input.value = 'Submit';
input.onclick = showAlert;
input.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:0px;right:0px; ');
document.body.appendChild(input);
function showAlert()
{
  $('#SubmitButton').click()
} 
// INSERT YOU OWN MEASUREMENT UNIQUE SELECTOR  HERE
var input1 = document.createElement('input');
input1.type = 'button';
input1.value = 'Specialist';
input1.onclick = showAlert1;
input.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:30px;right:0px; ');
document.body.appendChild(input1);
function showAlert1()
{
  $('#PrintSubmitButton').click()
}

/*var input2 = document.createElement('input');
input2.type = 'button';
input2.value = 'Referral';
input2.onclick = showAlert2;
input2.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;bottom:0px;right:140px; ');
document.body.appendChild(input2);
function showAlert2()
{
  $('#menuTitleconsultation > h3:nth-child(1) > a:nth-child(1)').click()
}
var input3 = document.createElement('input');
input3.type = 'button';
input3.value = 'Rx';
input3.onclick = showAlert3;
input3.setAttribute('style', 'width:60px;font-size:16px;z-index:1;position:fixed;bottom:120px;right:0px; background-color: #ffff00;');
document.body.appendChild(input3);
function showAlert3()
{
  $('#Rx > div:nth-child(3) > h3:nth-child(1) > a:nth-child(1)').click()
}
var input4 = document.createElement('input');
input4.type = 'button';
input4.value = 'BP/HR/Wt';
input4.onclick = showAlert4;
input4.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;bottom:30px;right:60px; ');
document.body.appendChild(input4);
function showAlert4() // INSERT YOU OWN MEASUREMENT groupName=?????  below
{
  $('#menu3 > a:nth-child(2)').click()
  //window.open(vPath + '/oscarEncounter/oscarMeasurements/SetupMeasurements.do?groupName=Vitals', 'VitalsWindow', 'width=1000,height=500')
}
}\
*/