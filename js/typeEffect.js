





 

 
// / set up text to print, each item in array is new line
var aText = new Array(
 "Hằng à,  một ngày đẹp trời a biết em qua một tấm hình. Trời ơi định mệnh đến với a bắt đầu từ đây, a thích e quá em đúng mẫu người con gái mà a thầm mơ ước." ,
 "Em có nụ cười thật xinh, đôi mắt long lanh với cái mắt kính xinh sắn nó thu hút a đến kỳ lạ. " ,
  "Em có một năng lượng tích cực và một ánh mắt biết nói, một giọng nói ấm áp.  " ,
  "Đôi mắt mù quáng của anh mòn mỏi ngắm nhìn hình ảnh của em chắc chắn em không biết được rằng em đẹp đến nhường nào và thật kì lạ làm sao khi em sở hữu vẻ yêu kiều pha nét đáng yêu nguy hiểm." ,
  "Bằng một thế lực nào đó xúi giục anh bắt đầu tìm hiểu về em, tìm mọi cách để biết thêm về cô gái này,",
  "Được biết cô gái này vẫn available, lòng a vui quá chừng và một ngày nọ anh mạnh dạn thả tim trên story của em và may mắn thay được em reply lại. ",
  "Những ngày đầu nhắn tin với Hằng đúng nghĩa Hằng bơ luôn. Cả ngày chỉ có 2, 3 tin nhắn rầu Hằng lại còn ngủ sớm nữa chứ. ",
  "May sao rầu a cũng có cơ hội nói chuyện với Hằng nhiều hơn. Rồi a cũng biết Hằng nhiều hơn , chúng ta cũng có nhiều điểm chung với nhau rồi cùng quan điểm sống nữa chứ.",
  "Nhưng cũng có nhiều cái bất đồng như về sức khỏe cũng như chế độ ăn uống nữa. Nhưng không sao không ai sinh ra đã phù hợp với nhau cả, mà phải cùng thay đổi để phù hợp với nhau hơn đúng không nè .",
  "Biết Hằng là một người sống chậm, yêu cây thích lá nên món quà của a tặng Hằng đầu tiên là 2 cái cây xinh xắn hy vọng Hằng luôn tươi tắn như nó nha.",
  "Rồi còn biết Hằng thích yoga, thiền, đọc sách với chạy bộ nữa chứ. Rồi a cũng cố gắng tập chạy bộ để có thể chạy chung giải đã đăng ký với Hằng trước đó nữa chứ.",
  "Từ khi nhắn tin với Hằng, từ một người ngủ sớm đã bị anh lôi kéo đến tận 11h có khi quá nữa đêm mới ngủ. Thấy cũng có lỗi lắm nhưng mà a thích tâm sự với Hằng lắm đấy. ",
  'Hằng biết không, mỗi lần nghe Hằng nói "em buồn ngủ quá, não em đơ rầu, em ngủ mai còn dậy chạy bộ nữa" anh lại có cảm giác hụt hẫng vô cùng.',
  "Biết rằng tối mai sẽ được nói chuyện cùng em thế nhưng vẫn a muốn giữ Hằng bên mình thêm một chút nữa.",
  "Hằng bơ cái tên do anh đặt ! Một cô gái sắp bước qua tuổi 28, một cô gái cũng đã có những phút giây ngọt ngào bên người yêu thương, một cô gái đã từng nếm trải nỗi đau khi tình yêu tan vỡ, ",
  "Một cô gái đã từng kể với a rằng đã khóc ròng cả tháng trời vì chia tay người yêu. Một cô gái từng nói với anh rằng tim em bây giờ rất khó rung động ",
  "Anh phải làm sao đây, làm thế nào mới là đúng đây, Hằng có thể mở lòng một lần nữa không ?",
  "Nhiều lúc a cả ngày chỉ nhìn cái điện thoại nhưng mãi không thấy được gì cả. Anh là gì với em, Hằng ơi! Em có chút rung động nào với anh chưa?",
  "Anh cũng chẳng biết những gì a dành cho Hằng có phải là tình yêu không? Nhưng anh và nỗi nhớ trong anh là có thật.",
  "Nhưng anh lại không thể nhớ nổi anh bắt đầu nhớ Hằng từ lúc nào. Nỗi nhớ không ồn ào, không cháy bỏng nhưng nó đủ cho anh biết rằng Hằng đã thực sự ý nghĩa trong cuộc đời anh.",
  "Hằng à, A hy vọng chúng ta có thể tìm hiểu về nhau nhiều hơn. A cũng hy vọng chúng ta là một cặp nữa. Cùng nhau học chung, chơi chung, đi dạo chung , cùng nhau khám phá thế giới này nữa. ",
  "A muốn làm nhiều thứ cùng với nhau với Hằng, Hằng mở lòng đón nhận a nhé. A ước một ngày sớm nhất có thể gặp Hằng. ",
  "Crush của em Thorpham"

  );
var iSpeed = 80; // time delay of print out
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