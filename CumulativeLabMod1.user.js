// ==UserScript==
// @name        CumulativeLab1 Mods
// @namespace   GongOscar
// @include     *lab/CumulativeLabValues.jsp*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @grant       none
// @version     0.1
// ==/UserScript==
//========Get Path============
//var formID='384' //  ENTER YOUR SPECIFIC POPUPWINDOW FORM ID NUMBER HERE

//===============================
//var mylink = 'eform/efmshowform_data.jsp?fid='+formID

//var radioBtn1 = $('<input type="button" name="CDM" id="CDM" value ="CDM" onclick = CdmFunc
//var radioBtn3 = $('<input type="button" name="INF" id="INF" value ="INF" onclick = InfFunc />');
//var radioBtn4 = $('<input type="button" name="HEP" id="HEP" value ="HEP" onclick = HepFunc  />');
//var radioBtn5 = $('<input type="button" name="ALL" id="ALL" value ="ALL" onclick = AllFunc  />');

var radioBtn1 = document.createElement('input');
radioBtn1.type = 'button';
radioBtn1.value = 'CDM';
radioBtn1.id = 'CDM'
radioBtn1.name = 'CMD'
radioBtn1.onclick = CdmFunc
var radioBtn2 = document.createElement('input');
radioBtn2.type = 'button';
radioBtn2.value = 'CBC';
radioBtn2.id = 'CBC'
radioBtn2.name = 'CBC'
radioBtn2.onclick = CbcFunc
var radioBtn3 = document.createElement('input');
radioBtn3.type = 'button';
radioBtn3.value ='INF';
radioBtn3.id = 'INF'
radioBtn3.name = 'INF'
radioBtn3.onclick = InfFunc
var radioBtn4 = document.createElement('input');
radioBtn4.type = 'button';
radioBtn4.value = 'HEP';
radioBtn4.id = 'HEP'
radioBtn4.name = 'HEP'
radioBtn4.onclick = HepFunc
var radioBtn5 = document.createElement('input');
radioBtn5.type = 'button';
radioBtn5.value = 'ALL';
radioBtn5.id = 'ALL'
radioBtn5.name = 'ALL'
radioBtn5.onclick = AllFunc
var radioBtn6= document.createElement('input');
radioBtn6.type = 'button';
radioBtn6.value = 'By Date';
radioBtn6.id = 'By Date'
radioBtn6.name = 'By Date'
radioBtn6.onclick = ByDate
$('.TopStatusBar').append(radioBtn1)
//$('.TopStatusBar').append('CDM_Group')
$('.TopStatusBar').append(radioBtn2)
//$('.TopStatusBar').append('CBC_Group')
$('.TopStatusBar').append(radioBtn3)
//$('.TopStatusBar').append('Inflammatory_Group')
$('.TopStatusBar').append(radioBtn4)
//$('.TopStatusBar').append('Hepatic_Group')
$('.TopStatusBar').append(radioBtn5)
//$('.TopStatusBar').append('Select_All')
$('.TopStatusBar').append(radioBtn6)

var myLabArray = new Array() //Array of labs and accocia
var HEPArray = [
  '1742-6',
  '1920-8',
  '1751-7',
  '6768-6',
  'XXX-2280',
  '1834-1',
  '14629-0',
  '2324-2',
  'XXX-2887',
  '48345-3',
  '4542-7',
  '6301-6',
  '46426-3',
  '14804-9',
  '2532-0',
  '14631-6',
  '2885-2'
]
var INFArray = [
  '2871-2',
  '30522-7',
  '4485-9',
  '4498-2',
  '5130-0',
  '14722-3',
  '2874-6',
  '2458-8',
  '2465-3',
  '2472-9',
  '5234-0',
  'XXX-2435',
  '5301-7',
  '11572-5',
  '5351-2',
  '5353-8'
]
var CBCArray = [
  
  '6690-2',
  '789-8',
  '718-7',
  '4544-3',
  '787-2',
  '785-6',
  '786-4',
  '788-0',
  '777-3',
  '751-8',
  '731-0',
  '742-7',
  '711-2',
  '704-7',
  '51584-1',
  '6742-1',
  '14869-2',
  '2276-4'
]
var CDMArray = [
  '1742-6',
  '14647-2',
  '33914-3',
  '14771-0',
  '14749-6',
  '4548-4',
  //  '5794-3',  //Haemoglobin
  '6301-6',
  '39469-2',
  '58453-2',
  '2857-1',
  '2823-3',
  '2951-2',
  '3016-3',
  '14927-8',
  //'1920-8',
  '30522-7',
  '2000-8',
  '14646-4',
  '16935-9',
  '5195-3',
  '14879-1',
  '14933-6',
  '1871-3',
  '32309-7',
  '718-7',
  '1988-5',
  'X10367' //Hb
  
]

window.resizeTo(1200, 780);
printbutton = '<input style=\'font-size:18px;position:absolute;top:10px;left:400px;\' value=\'Print\' type=\'button\'  onclick=\'window.print()\' >'
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd
}
if (mm < 10) {
  mm = '0' + mm
}
today = mm + '/' + dd + '/' + yyyy;
var ptname = $('.TopStatusBar > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1)').html()
var printthis = '<br>'
var str = ''
var LabData = []
var LabName = []
var measureArray = [];
var measureDateArray = [];
var alldata = [];
var checkedValues = ''
var LabDataPrint = ''

var topDates = [
  new Date('1990-01-01'), 
  new Date('1990-02-01'),
  new Date('1990-03-01'),
  new Date('1990-04-01'),
  new Date('1990-05-01')
  ]

var labDatesArr = []

//-----------------------------------------------------------------------
//PRIMARY CODE-----------------------------------------------------------
//-----------------------------------------------------------------------
var DisplayArea = document.getElementById('cumulativeLab')


//Sort button to Sort and Create the array of Lab Details
var input2 = document.createElement('input');
input2.type = 'button';
input2.value = 'Sort';
input2.onclick = showAlert2;
input2.setAttribute('style', 'font-size:16px;position:absolute;top:0px;left:30px;');
document.body.appendChild(input2);
function showAlert2() {
  myDisplay()
}

//Not sure why i need URL parameters
var elements = (window.location.pathname.split('/', 2))
firstElement = (elements.slice(1))
vPath = ('https://' + location.host + '/' + firstElement + '/') //=====Get Parameters============
var params = {
};

///// CHUNK 2 START
//Gets the RAW Lab data array from left side
if (location.search) {
  var parts = location.search.substring(1).split('&');
  
  for (var i = 0; i < parts.length; i++) {
    var nv = parts[i].split('=');
    if (!nv[0]) continue;
    params[nv[0]] = nv[1] || true;
  }
  
  f = $('.leftBox').html() //left labs tab HTML
  var parts = f.split('</li>'); //Array of each lab row on left tab
  //console.log(parts)
  var myArray = []
  var checkedValues = []

  for (i = 0; i < parts.length - 1; i++) { //Creation of myLabArray with 3 other values
    myLabArray[i] = new Array(3)
  }
  
  for (i = 0; i < parts[i].length; i++) { //parts[i].length

    //console.log(parts[i])
    var ii = parts[i].search('header=') + 8
    var ie = parts[i].search(' body=') - 1
    searchstring = ''
    while (ii < ie) {
      searchstring = searchstring + parts[i].charAt(ii)
      ii = ii + 1
    }
    c = parts[i].substring(parts[i].length - 4, parts[i].length)
    if (c !== '</a>') {
      //  alert(i + ': Error Code Alert')
      break;
    }
    myArray[i] = searchstring + parts[i].trim()
    
  }
  //console.log(myArray)
  //myArray.sort()
  

  
  
}
//Create New Array of labs that are alphabetically sorted with checkboxes
var Newlist = ''
for (i = 0; i < myArray.length; i++) {
  startat = 0
  endat = 500
  startat = (myArray[i].indexOf('<'))
  newstartat = myArray[i].lastIndexOf(',')
  newendat = myArray[i].lastIndexOf(')')
  loincval = myArray[i].substring(newstartat + 2, newendat - 1)
  namestring = myArray[i].substring(0, startat)
  chkval = ' ' /*
  if (CDMArray.indexOf(loincval) > - 1) {
    chkval = ' checked '
  }
  if (INFArray.indexOf(loincval) > - 1) {
    chkval = ' checked '
  }
  */
  myArray[i] = '<font size = \'1\'>' + myArray[i].substring(startat, endat) + '<input name=\'checkbox\' id=' + ('myCheckBox' + i) + chkval + ' value=' + loincval + ' type=\'checkbox\'>' + (namestring + ' (' + loincval + ') ') + '<br>'
  Newlist = Newlist + myArray[i] // alert(Newlist)
}
//console.log(myArray)
///////CHUNK 2 END

Cumulative()

var updateBtn = document.createElement('input');
updateBtn.type = 'button';
updateBtn.value = 'Update Groups';
updateBtn.onclick = EraseArea
updateBtn.setAttribute('style', 'font-size:12px;position:absolute;top:10px;right:200px;background-color: lime;');
//input6.setAttribute('type', 'hidden');
document.body.appendChild(updateBtn);



if (params.mysort) {
}
if (params.demographicNo) {
  input2.setAttribute('type', 'hidden');
}


//window.addLabToProfile2
radioBtn5.click()

//-------------------------------------------------------------------
//-----Test area-------------------------------------------------------------

function colorDates(date,divVar){
  var colorArr = [
    '2px solid #00FF00',
    '2px solid #009900',
    '2px solid #00FFFF',
    '2px solid #9933FF',
    '2px solid #FFFF00'  
    ]
  //console.log(topDates)
  var LabDateRawArr = $('div[id*=preventionProcedure]')
  for (i=0; i<LabDateRawArr.length; i++){ //LabDateRawArr.length
  	var RawText = LabDateRawArr[i].innerHTML 
    RawText = RawText.split('<p')[1]
    RawText = RawText.split('p>')[0]    
    RawText = RawText.substring(RawText.lastIndexOf(';')+1)
    RawText = RawText.trim()
    RawText = RawText.split(' ')[0]
    var eleDate = new Date(RawText)
    
    if (+eleDate == +topDates[0]) {
      //console.log('y')
  		LabDateRawArr[i].style.border = colorArr[0]      
    }else if (+eleDate == +topDates[1]) {
      //console.log('y1')
     	LabDateRawArr[i].style.border = colorArr[1]      
    }else if (+eleDate == +topDates[2]) {
      //console.log('y2')
     	LabDateRawArr[i].style.border = colorArr[2]      
    }else if (+eleDate == +topDates[3]) {
      //console.log('y3')
     	LabDateRawArr[i].style.border = colorArr[3]      
    }else if (+eleDate == +topDates[4]) {
      //console.log('y4')
     	LabDateRawArr[i].style.border = colorArr[4]      
    }
      
  }
  
}



//-------------------------------------------------------------------
//FUNCTIONS
//-------------------------------------------------------------------------
function EraseArea(){
  DisplayArea.innerHTML=''
}

function topDatesReset(){
 topDates = [
  new Date('1990-01-01'), 
  new Date('1990-02-01'),
  new Date('1990-03-01'),
  new Date('1990-04-01'),
  new Date('1990-05-01')
  ] 
}

function sortDate(arrayDate){
	arrayDate.sort(function(a,b){
  	return b-a;
  });
  //return arrayDate
}

function findNewestDate(){
	topDatesReset()
  
	//var LabDateRawArr = $('p[style]')
  var LabDateRawArr = $('div[id*=preventionProcedure]')
  //console.log(LabDateRawArr[0].innerHTML)
  //console.log(LabDateRawArr)

  
  for (i=0; i<LabDateRawArr.length; i++){ //LabDateRawArr.length
  	var RawText = LabDateRawArr[i].innerHTML 
    //console.log(RawText)
    /*//chunk to get rid of Time from text
    var ReplaceText = RawText
    ReplaceText = ReplaceText.substring(0,ReplaceText.lastIndexOf(' '))  
    LabDateRawArr[i].innerHTML =ReplaceText
		*/
    //chunk to get Date from Raw text
    RawText = RawText.split('<p')[1]
    RawText = RawText.split('p>')[0]    
    RawText = RawText.substring(RawText.lastIndexOf(';')+1)
    RawText = RawText.trim()
    RawText = RawText.split(' ')[0]
    var eleDate = new Date(RawText)
		//console.log(i + " " + eleDate)
    //Check if date is larger than stored then replace
    var topDatesStr = topDates.toString()
    //console.log(eleDate.toString())
		//console.log(topDatesStr.indexOf(eleDate.toString()))
    
    if (topDatesStr.indexOf(eleDate.toString()) <0){
      topDates.push(eleDate)
      sortDate(topDates)
      topDates.pop()
    }

    
    
  }

  
  //console.log(topDates)
  
  setTimeout(function(){ colorDates() },250);
}

function replaceHeadClass(){
  var LabHeaders = $('div[id*=headPrevention0][class*=headPrevention]')
  //console.log(LabHeaders)
  for (i=0; i<LabHeaders.length; i++){
    	LabHeaders[i].className= 'headPrevention'
    	//console.log(LabHeaders[i].class)
  }
}

//Get colum of multiple dim aray
function getCol(matrix, col){
       var column = [];
       for(var i=0; i<matrix.length; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }

//Returns the matched values between array 
function arrayMatch(arrSection, arrFull) {
    var resultArr = [];

    for(var i=0; i<arrSection.length; i++){
      //console.log(arrSection[i])
      for(var j=0; j<myLabArray.length; j++){
         //console.log(myLabArray[j])
         if(arrSection[i] == (myLabArray[j][2])){
           //console.log("match found")
           resultArr.push(myLabArray[j]);
         }
      }
    }
    //console.log(resultArr);
 
    return resultArr
 }


//Pass the array of labs to show on the screen. 3 column array. In order you want it
function LoadMatchedArr(ArrayToLoad){
    //console.log(ArrayToLoad)
  	for(var i=0; i<ArrayToLoad.length; i++){  
      if (ArrayToLoad[i][2].match(/[a-z]/i)== null) { //Gets rid of non-labs. like PDF and Reports
  			var LabElement = unsafeWindow.addLabToProfile2(ArrayToLoad[i][1],ArrayToLoad[i][0],ArrayToLoad[i][2])
      	//console.log(LabElement)
      	}
    	}
}

//Alphabetical sort of left labs and checkboxes
function myDisplay() {
  input2.setAttribute('type', 'hidden');
  Cumulative() // alert(myLabArray)
  myLabArray.sort()
  //console.log(myLabArray)
  $('.leftBox > div:nth-child(3)').html(Newlist)
  //CCBox()
}

function Cumulative() {
  for (i = 0; i < parts[i].length; i++) {
    parts[i]= parts[i].trim()
    var frontRemoved = parts[i].split('addLabToProfile2(')[1]
		
    var indexLastBrac = frontRemoved.lastIndexOf(')')
    var backRemoved = frontRemoved.substring(0,indexLastBrac)
    backRemoved = backRemoved.replace("\\/", "/");
    
    var noquote = backRemoved.replace(/'/g, '');
    var FinalArray = noquote.split(',') 
    var name = FinalArray[1]
    var Code = FinalArray[2] 
    var HL7 = FinalArray[0]
    
    myLabArray[i][1] = HL7
    myLabArray[i][0] = name
    myLabArray[i][2] = Code
    
  }
  //console.log(myLabArray)
}


function getMeasures(measure, arrayno) {
  labURL = ''
  labURL = 'testName=' + measure + '&demo=' + params.demographic_no + '&labType=HL7&identifier=' + myLabArray[arrayno][2] //alert(labURL)  
  xmlhttp = new XMLHttpRequest();
  str = ''
  var pathArray = window.location.pathname.split('/');
  var newURL = window.location.protocol + '//' + window.location.host + '/' + pathArray[1] + '/lab/CA/ON/labValues.jsp?' + labURL
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var str = xmlhttp.responseText; //local variable
      measureArray = [
      ]
      measureDateArray = [
      ]
      var myRe = /<td align="right">(.*?)([\d,\.]+)<\/td>/g; //for the measurement
      var myRe2 = /<td align="center">(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})<\/td>/g; //the observation date
      var r = 0
      var myArray;
      while ((myArray = myRe.exec(str)) !== null) {
        pend = myArray[0].indexOf('</td>')
        measureArray[r] = '<b>' + myArray[0].substring(18, pend) + '</b>'
        r++
      }
      var r = 0
      var myArray;
      while ((myArray = myRe2.exec(str)) !== null) {
        measureDateArray[r] = '<u>' + myArray[0].substring(19, 29) + '</u>'
        r++
      }
      measureArray.reverse()
      measureDateArray.reverse()
      alldata[arrayno] = '<br><u>' + measure + '</u>' + '<br>' //*************Limit to 10 results**********************
      vlimit = 10
      if (measureArray.length < vlimit) {
        vlimit = measureArray.length
      } //****END LIMIT********************************

      for (zz = 0; zz < vlimit; zz++) {
        if (measureArray[zz]) {
          alldata[arrayno] = alldata[arrayno] + (measureArray[zz] + ' (' + measureDateArray[zz] + ');  ' + printthis)
        }
      }
    }
  }
  xmlhttp.open('GET', newURL, false);
  xmlhttp.send();
}

// Detailed Lab names with associated Codes. Displayed on the left bar
// Each lab and associated code is recorded



function CdmFunc() {
  EraseArea()
  console.log("cdmFuc")
  var LabIDArray = getCol(myLabArray,2)
	var MatchedArr = arrayMatch(CDMArray,LabIDArray)
  //console.log(MatchedArr)
  LoadMatchedArr(MatchedArr)
  setTimeout(function(){ findNewestDate() }, 2500);
}
function CbcFunc() {
  EraseArea()
  var LabIDArray = getCol(myLabArray,2)
	var MatchedArr = arrayMatch(CBCArray,LabIDArray)
  LoadMatchedArr(MatchedArr)
  setTimeout(function(){ findNewestDate() }, 2500);
}
function InfFunc() {
  EraseArea()
  console.log("InfFunc")
  setTimeout(function(){ findNewestDate() }, 2500);
}
function HepFunc() {
  EraseArea()
  console.log("HepFunc")
  setTimeout(function(){ findNewestDate() }, 2500);
}
function AllFunc() {
  EraseArea()
  LoadMatchedArr(myLabArray)
  //setTimeout(function(){ replaceHeadClass() }, 2000);
  setTimeout(function(){ findNewestDate() }, 2500);
}
function ByDate() {
  EraseArea()
  //LoadMatchedArr(myLabArray)
  //setTimeout(function(){ findNewestDate() }, 2500);
  
}


function CCBox() {
  for (i = 0; i < myArray.length; i++) {
    q = document.getElementById(('myCheckBox' + i)) //alert(i)
    if (q) {
      q = document.getElementById(('myCheckBox' + i)) // alert(q.value)
      qq = document.getElementById('ALL')
      if (qq.checked == true) {
        q.checked = true;
      } 
      else if (qq.checked == false) {
        q.checked = false;
      } //*****************

      q = document.getElementById(('myCheckBox' + i))
      qq = document.getElementById('CDM')
      if (CDMArray.indexOf(q.value) > - 1 && qq.checked == true) {
        q.checked = true;
      } 
      else if (CDMArray.indexOf(q.value) > - 1 && qq.checked == false) {
        q.checked = false;
      } //*****************

      qq = document.getElementById('CBC')
      if (CBCArray.indexOf(q.value) > - 1 && qq.checked == true) {
        q.checked = true;
      } 
      else if (CBCArray.indexOf(q.value) > - 1 && qq.checked == false) {
        q.checked = false;
      } //*****************

      qq = document.getElementById('INF')
      if (INFArray.indexOf(q.value) > - 1 && qq.checked == true) {
        q.checked = true;
      } 
      else if (INFArray.indexOf(q.value) > - 1 && qq.checked == false) {
        q.checked = false;
      } //*****************

      qq = document.getElementById('HEP')
      if (HEPArray.indexOf(q.value) > - 1 && qq.checked == true) {
        q.checked = true;
      } 
      else if (HEPArray.indexOf(q.value) > - 1 && qq.checked == false) {
        q.checked = false;
      } //*****************

      q = document.getElementById(('myCheckBox' + i))
      qq = document.getElementById('ALL')
      if (qq.checked == true) {
        q.checked = true;
      } //*****************

    }
  }
}

function addLabToProfile3(labType,testName,identCode){
	console.log('test')
   var newNode = document.createElement('div');
   var img = document.createElement('img');
   img.setAttribute('src','../images/osx-pinwheel.gif');
   console.log('test1')
   newNode.appendChild(img);
   var ran_number=Math.round(Math.random()*1000000);
   newNode.setAttribute('id','d'+ran_number);
   console.log('test2')
   $('cumulativeLab').appendChild(newNode);
   
   var url = "../lab/DisplayLabValue.jsp";
   var ran_number=Math.round(Math.random()*1000000);
   var params = "demographicNo=3572&rand="+ran_number+"&labType="+labType+"&testName="+testName+"&identCode="+identCode;  //hack to get around ie caching the page
   console.log('test3')
  new Ajax.Updater(newNode,url, {method:'post',
                                          parameters:params,
                                          asynchronous:true,
                                           //onComplete: reRound
                                          evalScripts:true}); 
  consolelog('test4')
  return newNode

}

