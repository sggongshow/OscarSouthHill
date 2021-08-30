// ==UserScript==
// @name        Cumulative Labs 3 Mods
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     */ticklerAdd.jsp?*
// @include     *CumulativeLabValues3.jsp?*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==

//https://doctors-office-surrey.kai-oscar.com/oscar///lab/CumulativeLabValues3.jsp?demographic_no=1507&toDate=&fromDate=&showAllReport=true

//console.log(window.location)
//console.log(window.location.href.indexOf("fromDate"))
if (window.location.href.indexOf("fromDate") <0){
		console.log("CuLab3")
  	var fromDate = $('#fromDate')
    var toDate = $('#toDate')
    
 		fromDate.val('')  
    toDate.val('')   
  
  	var showAllBut= $('button:contains("Show"):contains("All")')
    //console.log(showAllBut)
  	//console.log (showAllBut[0].innerHTML)
  	//console.log (showAllBut[1].textContent)
    showAllBut.click()
  
  
}



