$(function(){
	$(window).load(function(){
		$("#slide li").eq(1).children(".content").fadeIn(2000);
	});
	
/*브라우저 사이즈*/
	var ht=$(window).height();
	$("section").height(ht);
	$("section").eq(4).height(600);


	$(window).on("resize",function(){
		var ht=$(window).height();
		$("section").height(ht);
		$("section").eq(4).height(600);
		
	});

/*메뉴*/
	$("#menu li").mouseenter(function(){
		$(this).children("a").css({
			opacity:1,
			transition:"all 0.5s"
		});
		$(this).children("#sub").slideDown(500);
	});
	$("#menu li").mouseleave(function(){
		$(this).children("a").css({
			opacity:0.6,
			transition:"all 0.5s"
		});
		$(this).children("#sub").slideUp(300);
	});
	$("#sub li").mouseenter(function(){
		$(this).css({
			backgroundColor:"#7aada7",
			opacity:1
		});
	});
	$("#sub li").mouseleave(function(){
		$(this).css({
			backgroundColor:"rgba(0,0,0,0)",
			opacity:0.6
		});
	});
	
	/*header slide*/
	var wt=$(window).width();
	$("#slide li").each(function(aa){
		$(this).css("left",(aa*wt)-wt);
	});
	/**/
	var n=1;
	var imgW=$("#slide li").width();
	setInterval(function(){
		n++;
		if(n==4){
			$("#slide").css({left:wt});
			n=1;
		}
		$("#slide").stop(true).animate({left:-(imgW*(n-1))});
		$("#button li").eq(n-1).children().attr("src","images/button_1.png");
		$("#button li").eq(n-1).siblings().children().attr("src","images/button_2.png");
		$("#slide li").eq(n).children(".content").fadeIn(2000);
		$("#slide li").eq(n).siblings().children(".content").fadeOut();
	},5000);
	
	
	/*header slide 이미지와 버튼 연동*/
	$("#button li").click(function(){
		index=$(this).index();
		$("#header #slide").stop().animate({left:-(imgW*index)});
		$(this).children().attr("src","images/button_1.png");
		$(this).siblings().children().attr("src","images/button_2.png");
	});
	
	/*section2 상품 페이지 버튼*/
		$(".fa-chevron-right").click(function(){
			var currentLeft = parseInt($('section:nth-of-type(3) ul').css('left'));
				console.log(currentLeft);
				if(currentLeft<=-700){
						return;
					}
					var moveLeft = currentLeft-350;
					$('section:nth-of-type(3) ul').animate({left:moveLeft},500);
		});
		$(".fa-chevron-left").click(function(){
			var currentLeft = parseInt($('section:nth-of-type(3) ul').css('left'));
					if(currentLeft>=0){
						return;
					}
					var moveLeft = currentLeft+350;
					$('section:nth-of-type(3) ul').animate({left:moveLeft},500);
		});

/*스크롤*/
		$("#scroll.up").hide();
		$("section").on("mousewheel", function(event, delta){
			if(delta>0){ //마우스 휠 올림
				var prev=$(this).prev().offset().top;
				
				console.log(prev);
				$("html, body").stop().animate({"scrollTop":prev},1000, "easeOutCirc");
			}else if(delta<0){  //마우스 휠 내림
				var next=$(this).next().offset().top;
				$("html, body").stop().animate({"scrollTop":next},1000,"easeOutCirc");	
			}
		});

/*section4 button*/
	$(".button button").mouseenter(function(){
		$(this).stop(true).animate({backgroundColor:"#7aada7"},500);
		$(".box2>div:nth-child(6)").stop(true).animate({color:"#7aada7",},500);
	});
	$(".button button").mouseleave(function(){
		$(this).stop(true).animate({backgroundColor:"#222"},500);
		$(".box2>div:nth-child(6)").stop(true).animate({color:"#bbb",},500);
	});

/*footer영역*/
	//SNS 아이콘
	$("#sns li a").on({
		"mouseenter":function(){
				$(this).children("img").css({opacity:1, transition:"all 0.2s"});
		},
		"mouseleave":function(){
				$(this).children("img").css({opacity:0.4, transition:"all 0.2s"});
		}
	});

});