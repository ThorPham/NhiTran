// / set up text to print, each item in array is new line
var aText = new Array(
"Hằng à  Một ngày đẹp trời a xem hình trên facebook  thì em xuất hiện. Trời ơi định mệnh đến với a bắt đầu từ đây",
"a thích e quá em đúng mẫu người con gái mà a thầm mơ ước. Em có nụ cười thật xinh, đôi mắt long lanh với cái mắt kính xinh sắc nó thu hút a đến kỳ lạ.",
" Em  một năng lượng tích cực và một ánh mắt biết nói, một giọng nói ấm áp. "," Đôi mắt mù quáng của anh mòn mỏi hình ảnh của em mỗi khi anh vào facebook của em chắc chắn em không biết được rằng em đẹp đến nhường nào và thật kì lạ làm sao khi em sở hữu vẻ yêu kiều pha nét đáng yêu nguy hiểm ."," A viết thư này muốn được ứng cử cv vào vị trí boyfriend của em. Mong em hồi đáp", 
"My name is Geneva. A 20 something computer", 
  "geek from Dumaguete City" ,
 "I am an Seo Specialist by day,",
  "and a self taught Programmer by night",
 "I usually spends my more hours on the internet" ,
 "And My area of interest are SEO," ,
 "Web Development and Designing" ,
  "Front End and Back-end Development" ,
  "and how to tweak software" ,
  "Hằng à  Một ngày đẹp trời a xem hình trên facebook  thì em xuất hiện. Trời ơi định mệnh đến với a bắt đầu từ đây",
"a thích e quá em đúng mẫu người con gái mà a thầm mơ ước. Em có nụ cười thật xinh, đôi mắt long lanh với cái mắt kính xinh sắc nó thu hút a đến kỳ lạ.",
" Em  một năng lượng tích cực và một ánh mắt biết nói, một giọng nói ấm áp. "," Đôi mắt mù quáng của anh mòn mỏi hình ảnh của em mỗi khi anh vào facebook của em chắc chắn em không biết được rằng em đẹp đến nhường nào và thật kì lạ làm sao khi em sở hữu vẻ yêu kiều pha nét đáng yêu nguy hiểm ."," A viết thư này muốn được ứng cử cv vào vị trí boyfriend của em. Mong em hồi đáp", 
"My name is Geneva. A 20 something computer", 
  
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[1].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
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