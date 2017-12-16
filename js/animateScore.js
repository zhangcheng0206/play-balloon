define(function(){
	
	var animateScore = {
		ele:document.createElement("div"),
		init:function(){
			this.ele.innerHTML = "+0";
			this.ele.className = "addScore";
			this.ele.addEventListener("animationend",function(){
				
				this.className = "addScore";
			})
			document.body.appendChild(this.ele);
		},
		start:function(yourscore){
			this.ele.innerHTML = "+" +yourscore;
			this.ele.className = "addScore move1";
		}
	}
	
	return animateScore;
})
