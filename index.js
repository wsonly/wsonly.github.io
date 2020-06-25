	var text1 = "遇见你我变得很低很低，一直低到尘埃里";
	var text2 = "虽然我很坚强，但有时候，我还是需要有个人握著我的手跟我说，一切都会很好";
	var text3 = "在天黑以后，往热闹地方躲，跟着别人努力快活，可惜心里头，有定时的闹钟，提醒你有多寂寞";
	var text4 = "世上最有趣的人生，不是你降生在一个最有趣的世界，而是你找到一种最有趣的活法";
	var text5 = "我还是放心不下呀，要是能一直在你身边陪着你，该多好啊！";
	
	var text = document.getElementById("text-id");
    	var image = document.getElementById("main-id");
    
	var btn1 =document.getElementById("btn1").addEventListener("mouseover",image1);
    	var btn2 =document.getElementById("btn2").addEventListener("mouseover",image2);
    	var btn3 =document.getElementById("btn3").addEventListener("mouseover",image3);
    	var btn4 =document.getElementById("btn4").addEventListener("mouseover",image4);
   	var btn5 =document.getElementById("btn5").addEventListener("mouseover",image5);
	
   function image1(){
      text.innerHTML =  text1;
      image.style.backgroundImage = "URL('background-image/01.jpg')";
   }
   function image2(){
      text.innerHTML =  text2;
      image.style.backgroundImage = "URL('background-image/02.jpg')";
   }
   function image3(){
      text.innerHTML = text3 ;
      image.style.backgroundImage = "URL('background-image/03.jpg')";
   }
   function image4(){
      text.innerHTML = text4 ;
      image.style.backgroundImage = "URL('background-image/04.jpg')";
   }
   function image5(){
      text.innerHTML = text5 ;
      image.style.backgroundImage = "URL('background-image/05.jpg')";
   }
   
   
