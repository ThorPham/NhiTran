// / set up text to print, each item in array is new line
var aText = new Array(
  "My name is Geneva. A 20 something computer", 
  "geek from Dumaguete City" ,
 "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
"My name is Geneva. A 20 something computer", 
  "geek from Dumaguete City" ,
 "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[1].length; // the length of the text array
var iScrollAt = 40; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 100);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();