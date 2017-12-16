define(function(){
	
	function getR(m,n){
		var r = Math.random();
		
		return Math.round( r*(n - m) + m) ;
	}
	
	return {
		r:getR
	}
})