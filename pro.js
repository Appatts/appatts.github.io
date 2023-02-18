function hovern(element){
	element.style.color = "white"
	
}

function offhovern(element){
	element.style.color = "#999"
	
}

function hovern2(element){
	element.style.color = "white"
	element.style.fontSize = "300px";
	
	
}

function offhovern2(element){
	element.style.color = "white"
	clearInterval(id);
}

function onof(element){
	var o = 0;
	id = setInterval(function(){
		if(o ==0){
			element.style.color = "#460c94";
			o++;
		}else{
			element.style.color = "#333";
			o = o-1;
		}
		
	}, 500);
}

function hovernbutton(element){
	element.style.background = "white";
	element.style.color = "black";
}

function offhovernbutton(element){
	element.style.background = "rgba(0,0,0, 0.1)";
	element.style.color = "white";
}

function greenoffhovernbutton(element){
    element.style.background = "rgba(09,96,10, 1.0)";
    element.style.color = "white";
}
