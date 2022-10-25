const navigationColorite = document.getElementById("color-selector")

function open_menu(){

}

function close_menu(){

}

function open_navigation(){
	document.getElementById("navigator").classList.remove("invisible");
}

function close_navigation(){
	document.getElementById("navigator").classList.add("invisible");
}

window.addEventListener('scroll', function() {
	let elements = new Array(navigationColorite.children[0].children[0], navigationColorite.children[1].children[0], navigationColorite.children[2].children[0])
	let scrollTop = document.documentElement.scrollTop;
	for(let i in elements){
		elements[i].style["color"] = "white"
	}
	if(scrollTop < 500){
		elements[0].style["color"] = "blue"
	}
	else if(scrollTop < 2000){
		elements[1].style["color"] = "blue"
	}
	else{
		elements[2].style["color"] = "blue"
	}
});
