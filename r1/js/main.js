    $(document).ready(function () {
        $("#menu_col li").click(function () {
            $("#menu_col li").removeClass("on");
            $(this).addClass("on");
        });

        $(".search").click(function () {
            $(".search_box").addClass("on");
        });
        $(".in_search").focusout(function () {
            $(".search_box").removeClass("on");
        });

        var index = 0;
		var imgs = $(".vs_lst li"); //이미지 3개
		var btns = $(".btn_box a"); //버튼 3개
		var imgCount = $(imgs).length; //이미지 3개
		  
		  $(imgs).hide();
		  $(imgs[index]).show(); //$(imgs[0])==$(".img img").eq(0)
		  $(btns[index]).addClass("select"); //$(btns[0])==$(".btn a").eq(0) //index가 0인 a태그에 select클래스를 추가
		  $(btns).click(function(){ //.btn a태그를 클릭하면 
			  $(imgs).fadeOut("fast"); //모든 이미지가 부드럽게 사라짐
			  $(btns).removeClass("select"); //모든 a태그에 select클래스 삭제
			  index = $(this).attr('id');//변수 index에 클릭한 a태그의 id값을 가져와서 저장
			  $(imgs[index]).fadeIn("slow"); //이미지도 인덱스와 동일한 이미지가 부드럽게 보여짐 .img img[0],.img img[1],.img img[2]
			  $(this).addClass("select"); //내가 클릭한 a태그는 select클래스 추가
			  return false; //a태그 #때문에 위로 올라가는 성질을 거짓으로 만듦
			  
		  });
		  
		  //자동으로 페이드인/페이드아웃
		  setInterval(function(){
			  $(imgs).fadeOut();
			  $(btns).removeClass("select");
			  if(imgCount-1!=index){ //조건: index가 0,1이 아니면 참. imgCount-1!==0,3-1!=0은 참, 3-1!=1은 참, 3-1!=2가 되면 거짓값으므로 else로 가야함
				  index++; //index=index+1
				  }else{ //index가 2이면
				  index = 0;
				  }
			  $(imgs[index]).fadeIn(); //index가 0,1,2이면 첫번째 이미지가 부드럽게 나타남
			  $(btns[index]).addClass("select");
		  },3000);
    });
