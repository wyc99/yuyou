document.documentElement.style.fontSize = window.innerWidth/4.32 + 'px';

//点我的跳转到新页

     	$('.mui-bar .mui-btn').on('tap',function(){
						
			mui.openWindow({
				url:'personal.html',
			});
			return false;
		});


