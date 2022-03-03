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
// @version 22.03.02.6
// ==/UserScript==

var MutationObserver = window.MutationObserver;
var myObserver       = new MutationObserver (mutationHandler);
var obsConfig        = {
  childList: true, 
};
var MutationOldData
var MutationNewData
var MutationOldElement
var MutationNewElement

//wait window load first

window.addEventListener('load', function() {
  
  setTimeout(function(){ main(); }, 250);
  
	//-----Detect changes to the form so that can run the restructing UI code again
  //var target = $('[class="table table-condensed table-bordered serviceCodesTable"]')[0];
  var target = $('[id="billingFormTableWrapper"]')[0];
  console.log(target)
  myObserver.observe (target, obsConfig);
  
}, false);

//--- some magical stuff to detect if changes to re-run main - SOMEHOW WORKS. NOT SURE WHY WORKING. 
function mutationHandler (mutationRecords) {
  //console.log("running mutation handler")
  MutationNewElement = $('[class="table table-condensed table-bordered serviceCodesTable"]')[0].querySelector(['[type = "checkbox"]'])
  MutationNewData = MutationNewElement.value
  //console.log("newval:" + MutationNewData)
  
  if (MutationNewData != MutationOldData){
    //console.log("FORM CHANGED DETECTED AND PAGE CHANGE DETECTED: TO RERUN MODS")  
    setTimeout(function(){ main(); }, 250);
    mutationObserver.disconnect()

  }
}

function main(){
  //console.log("running main")
  //---- Record previous value
  MutationOldElement = $('[class="table table-condensed table-bordered serviceCodesTable"]')[0].querySelector(['[type = "checkbox"]'])
  MutationOldData = MutationOldElement.value
  //console.log("oldval:" + MutationOldData)
  
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
