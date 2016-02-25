var createdTime; var clickedTime;var reactionTime;var oldScore=10;
		draw();

		document.getElementById("square").onclick=function(){
			clickedTime=Date.now();
			reactionTime=(clickedTime-createdTime)/1000;
			document.getElementById("result").innerHTML=reactionTime+"s";
			bestScore(reactionTime);
			document.getElementById("square").style.display="none";

			
			draw();
		}

		function draw(){
		var x=Math.random();
		x=x*5000;
		x=Math.floor(x);
		setTimeout(function(){

			drawShape();
			var top=Math.random()*300;
			var left=Math.random()*300;

			document.getElementById("square").style.top=top+"px";
			document.getElementById("square").style.left=left+"px";
			document.getElementById("square").style.display="block";
			document.getElementById("square").style.backgroundColor=randomColor();
			createdTime=Date.now();
		},x);
		}

		function drawShape(){
			var shape=Math.floor(Math.random()*2);
			console.log(shape);
			if(shape==0){
				document.getElementById("square").style.borderRadius="100px";
			}
			if(shape==1){
				document.getElementById("square").style.borderRadius="0px";
				//alert(document.getElementById("square").style.borderRadius);
			}
		}
		
		function randomColor(){
			var color;
			var r=Math.floor(Math.random()*256);
			var g=Math.floor(Math.random()*256);
			var b=Math.floor(Math.random()*256);

			var hexR=r.toString(16);
			var hexG=g.toString(16);
			var hexB=b.toString(16);

			if(hexR.length==1){
				hexR="0"+hexR;
			}
			if(hexG.length==1){
				hexG="0"+hexG;
			}
			if(hexB.length==1){
				hexB="0"+hexB;
			}
			color="#"+hexR+hexG+hexB;
			return color.toUpperCase();
		}

		function bestScore(newScore){
			
			if(newScore<oldScore){
				document.getElementById("hscore").innerHTML=newScore+"s";
				oldScore=newScore;
			}
		}