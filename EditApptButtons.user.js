// ==UserScript==
// @name        Edit Appointment Buttons
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     *appointmentcontrol.jsp*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==


//wait window load first



window.addEventListener('load', function() {
  
 
  var DoneBut = document.createElement('input');
  DoneBut.type = 'button';
  DoneBut.id = 'doneButton'
  DoneBut.name = 'doneButton'
  DoneBut.value = 'DONE'
  DoneBut.onclick = DoneButFunc
  DoneBut.setAttribute('style', 'width:60px;font-size:12px;z-index:1;position:fixed;top:0px;right:0px; background-color:#66ff66;');
  document.body.appendChild(DoneBut);
  
  var NoShowBut = document.createElement('input');
  NoShowBut.type = 'button';
  NoShowBut.id = 'noShowButton'
  NoShowBut.name = 'noShowButton'
  NoShowBut.value = 'NO SHOW'
  NoShowBut.onclick = NoShowButFunc
  NoShowBut.setAttribute('style', 'width:60px;font-size:12px;z-index:1;position:fixed;top:25px;right:0px; background-color:red;');
  document.body.appendChild(NoShowBut);
  
  
  var BilledBut = document.createElement('input');
  BilledBut.type = 'button';
  BilledBut.id = 'billedButton'
  BilledBut.name = 'billedButton'
  BilledBut.value = 'Billed'
  BilledBut.onclick = BilledButFunc
  BilledBut.setAttribute('style', 'width:60px;font-size:12px;z-index:1;position:fixed;top:50px;right:0px; background-color:cyan;');
  document.body.appendChild(BilledBut);
  

}, false);


document.addEventListener('keydown', function(theEvent) {
	var theKey = theEvent.key
	var theAltKey =theEvent.altKey;
	var theCtrlKey = theEvent.ctrlKey;
	var theShiftKey= theEvent.shiftKey;
  
  
  switch(true){
      //Acknowledge  button
    case theAltKey && theKey==='1': 
      var subButton = $('input[id="updateButton"]')
      subButton.click()
			break;
     
      
    default:
      break; 
  }


}, true);


function DoneButFunc(){
  var statusSelector = $('select[name="status"]')[0]
  statusSelector.value = findStatus("DONE")
}
function NoShowButFunc(){
  var statusSelector = $('select[name="status"]')[0]
  statusSelector.value = findStatus("NO SHOW")
}
function BilledButFunc(){
  var statusSelector = $('select[name="status"]')[0]
  statusSelector.value = findStatus("BILLED")
}

function findStatus(statusText){
  var value = ''
  var statusSelector = $('select[name="status"]')[0]
  var statusChildren = statusSelector.children
  //console.log(value)
  for (var i = 0; i < statusChildren.length; i++){ 
    var textVal = statusChildren[i].text
    //console.log(textVal)
    if (textVal.indexOf(statusText)>=0){
      value = statusChildren[i].value
      break
    }
  }
  
  //console.log(value)
  return value
  
}
