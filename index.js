var text = document.getElementById("text-id");
    var image = document.getElementById("main-id");
    var btn1 =document.getElementById("btn1").addEventListener("mouseover",image1);
    var btn2 =document.getElementById("btn2").addEventListener("mouseover",image2);
    var btn3 =document.getElementById("btn3").addEventListener("mouseover",image3);
    var btn4 =document.getElementById("btn4").addEventListener("mouseover",image4);
    var btn5 =document.getElementById("btn5").addEventListener("mouseover",image5);
   function image1(){
      text.innerHTML =  "遇见你我变得很低很低，一直低到尘埃里。";
      image.style.backgroundImage = "URL('background-image/01.jpg')";
   }
   function image2(){
      text.innerHTML =  "和自己相处，就是让我们静静坐下来，卸下负担，抚慰心灵，清楚自己身在何处、心往何方。";
      image.style.backgroundImage = "URL('background-image/02.jpg')";
   }
   function image3(){
      text.innerHTML =  "软弱的人被生活折磨，强悍的人折磨生活。";
      image.style.backgroundImage = "URL('background-image/03.jpg')";
   }
   function image4(){
      text.innerHTML =  "世上最有趣的人生，不是你降生在一个最有趣的世界，而是你找到一种最有趣的活法。";
      image.style.backgroundImage = "URL('background-image/04.jpg')";
   }
   function image5(){
      text.innerHTML =  "年年岁岁，平凡的轮回，犹如这美好的绿色。心在平静里，简单，真实，自在，空心。";
      image.style.backgroundImage = "URL('background-image/05.jpg')";
   }
   /*************最开始的处理方式如下*********************/
   
   /*function change1(){
      text.innerHTML =  "年年岁岁，平凡的轮回，犹如这美好的绿色。心在平静里，简单，真实，自在，空心。";
      //image.style.backgroundImage = URL"background-image/02.jpg";
      image.style.backgroundImage = "URL('background-image/01.jpg')";
   }
   function change2(){
      text.innerHTML =  "和自己相处，就是让我们静静坐下来，卸下负担，抚慰心灵，清楚自己身在何处、心往何方。";
      image.style.backgroundImage = "URL('background-image/02.jpg')";
   }
   function change3(){
      text.innerHTML =  "软弱的人被生活折磨，强悍的人折磨生活。";
      image.style.backgroundImage = "URL('background-image/03.jpg')";
   }
   function change4(){
      text.innerHTML =  "世上最有趣的人生，不是你降生在一个最有趣的世界，而是你找到一种最有趣的活法。";
      image.style.backgroundImage = "URL('background-image/04.jpg')";
   }*/
   //第五个按钮
   //var btn5 =document.getElementById("btn5");
   //btn5.onclick = function () {
   //    text.innerHTML =  "而是你找到一种最有趣的活法";
   //   image.style.backgroundImage = "URL('background-image/04.jpg')";
   //}

   /****************************************************/
