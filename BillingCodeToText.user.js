// ==UserScript==
// @name        Billing Code Conversion
// @namespace   GongOscar
// @description Constant EForm Submit and Print button locations
// @include     *billing.do?billRegion*
// @include     *billingBC.jsp?*
// @include     *CreateBilling.*
// @include     */oscar/CaseManagementEntry.do*
// @include     *SaveBilling.do?*
// @include     *formwcb.do?*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @updateURL https://github.com/sggongshow/OscarSouthHill/raw/main/BillingCodeToText.user.js
// @downloadURL https://github.com/sggongshow/OscarSouthHill/raw/main/BillingCodeToText.user.js
// @version 21.02.28.5
// ==/UserScript==


//wait window load first
window.addEventListener('load', function() {
  
   setTimeout(function(){ main(); }, 250);
  
}, false);


function main(){

  ///change the names of recently used to text instead of ICD9
  var codeList = $('#DX_REFERENCE')[0].querySelector('.form-control')
  //console.log(codeList)

	for (let i = 0; i < codeList.length; i++) {
  	
    var title = codeList[i].title
    var dxCode = codeList[i].text.trim()

    codeList[i].text = "-" + title + dxCode
		//codeList[i].title = dxCode
	}
  
  //smaller font so more ICD shows up
  codeList.style.fontSize = '10px'
  codeList.style.height = '200px'

  //Re-organize the billing page structure so that the recently used is no a separate row
  var CodePosition = $('[class = "table table-condensed table-borderless"]')
  var table = CodePosition[2]
  var ICDBox = $('#DX_REFERENCE').parent()[0]
  var headingTr = ICDBox.parentElement.previousElementSibling
  
  
  //console.log(table)
  //console.log(ICDBox)
  //console.log(headingTr)
  //headingTr.children[1].remove()
  table.insertBefore(ICDBox,null)
  ICDBox.insertBefore(headingTr.children[1],null)
  
  
  
  
  

  
  // $("tbody tr:nth-child(11)").insertAfter("tbody tr:nth-child(4)");

}
