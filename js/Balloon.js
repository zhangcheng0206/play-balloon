define(['myjquery'],function($){
	var position = ["0 0","-96px 0","-192px 0","-288px 0",
							"0 -120px","-96px -120px","-192px -120px","-288px -120px"];
	
	function Balloon(){
				
		var that = this;
		//属性
		//ele:显示气球的dom元素.
		this.ele = document.createElement("div");
		
		
		this.reBirth();
	
		document.body.appendChild(this.ele)
		
		this.ele.addEventListener("animationend",function(){
			//动画结束
			console.info("动画结束")
			
			that.reBirth();
		})
	}
	
	//重生
	Balloon.prototype.reBirth = function(){
		//分值。[1 , 8]。
		this.mark = $.r(1,8);
		this.ele.className = "balloon";
		this.ele.style.backgroundPosition = position[this.mark-1];
		
		this.x = $.r(0, document.body.offsetWidth-96 );
		this.y = $.r(document.body.offsetHeight, document.body.offsetHeight+100 );
		
		this.ele.style.left = this.x +'px';
		this.ele.style.top  = this.y +'px';
		
		
	}
	Balloon.prototype.move = function(){
		//console.info("上升吧，气球！");
		
		//每一次调用move都改变气球的top值。
		
		this.y -= this.mark; //调用一次 move . this.y减少10 
		
		if(this.y < -120){
			//alert("气球出去了");
			//重生
			this.reBirth();
			
		}
		else{
			//设置css
			this.ele.style.top  = this.y +'px';
		}
		
		
	}
	
	
	return Balloon;
	
})
