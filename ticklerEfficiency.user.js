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

var myIDNum = '37250'

window.addEventListener('load', function() {
  
  var MeBut = document.createElement('input');
  MeBut.type = 'button';
  MeBut.id = 'meButton'
  MeBut.name = 'meButton'
  MeBut.value = 'For Me'
  MeBut.onclick = meButtonFunc
  MeBut.setAttribute('style', 'width:80px;font-size:12px;padding:0px;position:fixed;top:60px;right:10; border-color:blue;');
	document.body.appendChild(MeBut);
  
  var HiBut = document.createElement('input');
  HiBut.type = 'button';
  HiBut.id = 'HiButton'
  HiBut.name = 'HiButton'
  HiBut.value = 'High'
  HiBut.onclick = HiButtonFunc
  HiBut.setAttribute('style', 'width:80px;font-size:12px;padding:0px;position:fixed;top:80px;right:10; border-color:red;');
	document.body.appendChild(HiBut);
  
  
  //--------- select the textbox area so I can start typing immediately
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
      
    case theAltKey && theKey==='w': 
      meButtonFunc()
			break;
      
    case theAltKey && theKey==='q': 
      HiButtonFunc()
			break;
      
    default:
      break; 
  }


}, true);


function meButtonFunc(){
  var taskAssign = $('select[name=task_assigned_to]')[0]
  taskAssign.value = myIDNum
}
function HiButtonFunc(){
  var priorityAssign = $('select[name=priority]')[0]
  priorityAssign.value = 'High'
}
