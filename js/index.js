	var linenav = document.getElementsByClassName("line-nav")[0]
	if(linenav){
	linenav.addEventListener("click",transbar)
	linenav.addEventListener("mouseover",glowbar)
	linenav.addEventListener("mouseout",glowbar2)
	}
	
	function glowbar(){
		let linescol = document.getElementsByClassName("line")
		for(let i=0; i<3 ; i++){
			linescol[i].classList.add("lines-white")
		}
	}

	function glowbar2(){
		let linescol = document.getElementsByClassName("line")
		for(let i=0; i<3 ; i++){
			linescol[i].classList.remove("lines-white")
		}
	}
	function transbar(){
		document.getElementsByClassName("side-bar")[0].classList.toggle("side-bar-active");
		document.getElementsByClassName("line-nav")[0].classList.toggle("toggle")
	}