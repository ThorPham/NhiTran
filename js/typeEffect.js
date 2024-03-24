





 

 
// / set up text to print, each item in array is new line
var aText = new Array(
 "Nhi à, một ngày đẹp trời a biết sự tồn tại của em trên trái đất này. Trời ơi định mệnh đến với a bắt đầu từ đây, a thích e quá em đúng mẫu người con gái mà a thầm mơ ước." ,
 "Em có nụ cười thật toả nắng, đôi mắt long lanh, một vẻ đẹp tri thức nó thu hút a đến kỳ lạ." ,
  "Em có một năng lượng tích cực và một ánh mắt biết nói, một giọng nói ấm áp. " ,
  "Đôi mắt mù quáng của anh mòn mỏi ngắm nhìn hình ảnh của em chắc chắn em không biết được rằng em đẹp đến nhường nào và thật kì lạ làm sao khi em sở hữu vẻ yêu kiều pha nét đáng yêu nguy hiểm." ,
  "Được biết cô gái qua một comment của chị gái. Anh không ngần ngại nhắn tin làm quen, lòng a vui quá chừng và may mắn thay được em reply lại. ",
  "Bằng một thế lực nào đó xúi giục anh bắt đầu tìm hiểu về em, tìm mọi cách để biết thêm về cô gái này.",
  "May sao rầi a cũng có cơ hội nói chuyện với em nhiều hơn. Anh cảm thấy sự đồng điệu ở chúng ta, a có một niềm tin rằng em mà mảnh ghép cuối cùng mà a đang tìm kiếm.",
  "Nhi à, em biết không a muốn để lại trong em một ấn tượng về anh. Nên a không từ một thủ đoạn nào để tìm được địa chỉ và số sdt của em. A muốn tạo cho e bất ngờ mà cái kết thật lãng xẹt người nhận món quà là chị gái của em.",
  "Từ khi nhắn tin với anh, từ một người ngủ sớm đã bị anh lôi kéo đến tận 3h có khi đến sáng sớm mới được ngủ. Thấy cũng có lỗi lắm nhưng mà a thích tâm sự với em lắm đấy. ",
  "Nhi Trần một cô gái sắp bước qua tuổi 27, một cô gái chưa chưa có mối tình đầu. Một cô gái chả có tí niềm tin vào tình yêu khi chứng kiến biết bao nhiêu mối tình đau khổ của người thân, bạn bè",
  "Một cô gái đã từng kể với a rằng em không muốn có người yêu, em không muốn lấy chồng. ",
  "Anh phải làm sao đây, làm thế nào để em tin rằng trên thế giới này vẫn còn tồn tại về cái gọi tình yêu. Hãy cho a cơ hội để cho em thấy nhé.",
  "Anh tin rằng sự gặp gỡ của chúng ta không phải là ngẫu nhiên ! Đó có thể là một định ước, như một thông điệp mà vũ trụ đang dẫn dắt chúng ta đến với nhau." ,
  "Nhi à, anh muốn hỏi em một câu rằng liệu em có chút rung động nào với anh chưa?",
  "Anh cũng chẳng biết những gì a dành cho em có quá sớm để gọi tình yêu không? Nhưng anh và nỗi nhớ trong anh là có thật.",
  "Nhưng anh lại không thể nhớ nổi anh bắt đầu nhớ em từ lúc nào. Nỗi nhớ không ồn ào, không cháy bỏng nhưng nó đủ cho anh biết rằng sự xuất hiện của em đã thực sự ý nghĩa trong cuộc đời anh.",
  "Nhi à, A hy vọng chúng ta có thể tìm hiểu về nhau nhiều hơn. A cũng hy vọng chúng ta là một cặp nữa. Cùng nhau đi ăn,đi chơi, đi dạo chung , cùng nhau khám phá thế giới này nữa. ",
  "A muốn làm nhiều thứ cùng với nhau với em, Nhi mở lòng đón nhận a nhé. A mong một ngày sớm nhất có thể gặp em. ",
  "Crush của em Dũng Phạm"

  );
var iSpeed = 95; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[1].length; // the length of the text array
var iScrollAt = 8; // start scrolling up at this many lines
 
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