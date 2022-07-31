	// 스크롤 최상단 처리
	var tempToTop = function(){
		var savDate = new Date(),
			scTar = $('html, body'),
			btntt = $('.moveTopBtn'),
			curDate,
			calDate,
			sett,
			action,
			chk = 2000;
		sett = function(){
			action = setTimeout(function(){
				btntt.removeClass('on');
			}, chk);
		};
		$(window).scroll(function(){
			curDate = new Date();
			if ($(this).scrollTop() <= 0) {
				clearTimeout(action);
				btntt.removeClass('on');
			} else {
				calDate = curDate - savDate;
				btntt.addClass('on');
				(calDate < chk) ? clearTimeout(action) : savDate = new Date()
				sett();
			}
		});
		btntt.click(function(e){
			scTar.stop().animate({
				scrollTop : 0
			}, 300);
			e.preventDefault();
		});
	};
	tempToTop();

    export default tempToTop