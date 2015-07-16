function getWindowSize() {
	var size = {};
	size.width = (document.documentElement && document.documentElement.clientWidth) || document.body.clientWidth;
	size.height = (document.documentElement&&document.documentElement.clientHeight) || document.body.clientHeight;
	return size;
}

window.addEventListener('load',function(){
	(function(){
		var team = document.getElementsByClassName('team')[0];
		var size = getWindowSize();
		team.style.height = size.height + 'px';
		team.style.width = size.width + 'px';
		moveBackground(document.body);
		showName();
	})();
});



function moveBackground(node){
	var size = getWindowSize();
	var xRange = size.width * 0.2; 
	var yRange = size.height*0.2;
	var x=0,y=0;
	var moveToLeft = true;
	var IdofInterval = setInterval(function(){
		node.style.backgroundPosition = x+'px '+y+'px';
		if(moveToLeft==true){
			x -= 1;
			y -= 1;
			if(Math.abs(x)>xRange || Math.abs(y)>yRange){
				moveToLeft = !moveToLeft;
			}
		}else{
			x += 1;
			y += 1;
			if(Math.abs(x)==0 || Math.abs(y) == 0){
				moveToLeft = !moveToLeft;
			}
		}
	},200);
}



function showName(){
	var canvas = document.getElementsByTagName('canvas')[0];
	var cxt = canvas.getContext('2d');

	var windowSize = getWindowSize();

	cxt.font="lighter 70px Arial";
	cxt.textAlign = "center";
	cxt.textBaseline = "middle";
	cxt.fillStyle = '#fff';
	var i = 0;
	var x = windowSize.width/2;
	var y = windowSize.height/2;
	(function(){
		var id0_5 = setInterval(function(){
			cxt.clearRect(x-70,y-70,300,300);
			cxt.fillText(''+(i/100).toFixed(2), x, y);
			i++;
			if(i == 5){
				clearInterval(id0_5);
				(function(){
					var id0_95 = setInterval(function(){
						cxt.clearRect(x-70,y-70,300,300);
						cxt.fillText(''+(i/100).toFixed(2), x, y);
						i++;
						if(i==95){
							clearInterval(id0_95);
							(function(){
								var id100 = setInterval(function(){
									cxt.clearRect(x-70,y-70,300,300);
									if(i==100){
										cxt.fillText(''+(i/100).toFixed(0), x, y);	
									}else{
										cxt.fillText(''+(i/100).toFixed(2), x, y);	
									}
									i++;
									if(i == 101){
										clearInterval(id100);
										(function(){
											setTimeout(function(){
												cxt.clearRect(x-70,y-70,300,300);
												cxt.fillText('ZTO', x, y);
												setTimeout(function(){
													cxt.clearRect(x-70,y-70,300,300);
													cxt.fillText('Zero To One', x, y);
													setTimeout(function(){
														cxt.font = 'lighter 32px Arial'; 
														cxt.fillText('We are on the way of ZTO!', x, y+140);
													},1000);
												},1000);
											},1000);
										})();
									}
								},400);							
							})();
						}
					},50);
				})();
			}
		},500);
	})();
}


