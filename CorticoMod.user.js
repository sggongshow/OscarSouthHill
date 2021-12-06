// ==UserScript==
// @name        Cortico Shifter
// @namespace   GongOscar
// @description Various navigation buttons for echart screen.  Set your own specific fid (form number) or Measurement groupName
// @include     */casemgmt/forward.jsp?action=view&demographic*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// @grant       none
// ==/UserScript==

function main(){
	console.log("CHECK CORTICO")
  var checkCort = $('[class*=tw-bg-cortico-blue][class*=tw-cursor-pointer][class*=tw-relative]')
  if (checkCort.length>0){
    console.log("test")
   	main2(checkCort) 
  }
  
}

function main2(checkCort){
  console.log("test2")
  console.log(checkCort)
  var boxCort = checkCort[0].parentElement
  var boxCortClass = boxCort.className
	console.log(boxCort)
  console.log(boxCortClass)
  var boxCortArr = boxCortClass.split('tw-right')
  var newClass = boxCortArr[0] + 'tw-left' + boxCortArr[1]
  console.log(newClass)
  boxCort.setAttribute('class',newClass)
  //console.log(boxCort)
}


window.addEventListener('load', function() {
  setTimeout(function(){ main(); }, 5000)
  //waitForNote()


}, false);
