require(["animateScore","Balloon","bg","Clound","gun","score"],function(animateScore,Balloon,bg,Clound,gun,score){
	var game = {
			frameIndex:0,
			acts:[],//所有的演员
			amount:5, //气球的数量
			addScore:function(addScore){
				score.add(addScore);
			},
			start:function(){
				var that = this;
				var currentAmount = 0; //当前气球数量
				
				animateScore.init();
				gun.init();
				score.init();
				bg.init();
				
				document.body.addEventListener("click",function(e){
		
					var a =  new Audio("img/gun.mp3");
					a.play();
					var currentScore = 0; //这一次的点击可以得多少分
					console.info(e.pageX,e.pageY);
					//找到所有的气球，并计算与当前的点的距离
					for(var i = 0 ; i< that.acts.length;i++){
						var t  =that.acts[i];
						if( t.hasOwnProperty("mark") ){
							//算这个气球的中心点与e.pageX,e.pageY的距离
							var cX = t.ele.offsetLeft + 96/2;
							var cY = t.ele.offsetTop  + 96/2;
							
							if(Math.pow(e.pageX - cX,2) + Math.pow(e.pageY - cY,2) < Math.pow(96/2,2)){
								
								console.info( t.mark +"  被打中了");
								console.info("这个气球有:"+t.mark+"分","气球被点了");
								game.addScore(t.mark);
								
								currentScore +=t.mark;
								
								
								t.ele.className = "balloon blow";	
								
							}
						}
					}
					
//					if(currentScore !=0)){
//						animateScore.start(currentScore);
//					}
					
					currentScore &&  animateScore.start(currentScore);
				})
				
				document.body.addEventListener("mousemove",function(e){
					
					
					gun.moveTo(e.pageX,e.pageY);
				})
				

				//游戏开始
				//创建 10 个 气球
//				for(var i = 0 ;i < this.amount; i++){
//					this.acts.push( new Balloon() );
//				}
				
				//创建 3 云朵
				for(var i = 0 ;i <3; i++){
					this.acts.push( new Clound() );
				}
				
				setInterval(function(){
					that.frameIndex++;

					if(currentAmount < that.amount && that.frameIndex % 20 == 0){
						console.info(Date.now());
						console.info(that.frameIndex);
						currentAmount++;
						console.info("新气球......")
						
						
						that.acts.push( new Balloon() );
					}
					for(var i = 0 ;i < that.acts.length ;i ++){
						//console.info( this.acts[i] );
						that.acts[i].move()
					}
					
					
				},50);
				
				console.info("start");
			}
			
		}
	game.start();
	
	
})
