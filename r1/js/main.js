    $(document).ready(function(){
		   $("#menu_col li").click(function(){
           $("#menu_col li").removeClass("on");
           $(this).addClass("on");
       }); 
		 var wd = parseInt($(".slider_wrap").width());// 문자열을 정수로 바꾸는 함수 즉 
        $(".btn_box li").click(function(){//버튼박스의 li를 클릭하면
            var idx = $(this).index();//내자신(li)의 인덱스(0,1,2,3,4)를 idx라는 변수명으로 저장해라
            $(".vs_lst").not(":animated").animate({"margin-left" : wd*idx*-1+"px"}, 540);
            //vs의 ma
            //0번째라면 *0*-1에 px단위 붙이면 0
            //1번째라면 *1*-1   -->-1
            $(".btn_box li").removeClass("on");//모든 li에 on을 제거
            $(this).addClass("on");//내가 클릭한 li에 on을 추가
        });
    });    