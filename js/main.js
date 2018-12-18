// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */
document.querySelector(".btn-toggle-menu").addEventListener('click',function(){

    if(document.querySelector(".answer-box nav").className === 'nav-menu'){

    	document.querySelector(".answer-box nav").className = 'nav-menu-hidden';
    	document.querySelector(".btn-toggle-menu").innerHTML = "show now";

    } else{
		
		document.querySelector(".answer-box nav").className = 'nav-menu';
		document.querySelector(".btn-toggle-menu").innerHTML = "hide now";
	}
 })

	
/* TASK 2 -- Select/Deslect an Icon */
document.querySelectorAll(".option").forEach(function(div){
	div.addEventListener("click",function(e){

		if(e.currentTarget.className === "option"){
			e.currentTarget.classList.add("selected")
		} else{
			e.currentTarget.classList.remove("selected")
		}
	})
})






/* TASK 3 -- Increase total number*/

document.querySelectorAll('.point').forEach(function(btn){
	btn.addEventListener('click', function(){
		var total = document.querySelector('.total-points');
		total.textContent = parseInt(total.textContent) + parseInt(btn.textContent)
	})

})


/* TASK 4 (Adventure Mode)-- Move Item List to List */

document.querySelectorAll('.individual').forEach(li => {
  li.addEventListener('click', () => {
    if (li.parentNode.className === "good-standing-list") {
      document.querySelector('.probation-list').appendChild(li)

    } else if (li.parentNode.className === "probation-list") {
      document.querySelector('.good-standing-list').appendChild(li)
    }

  })
})




/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */

document.querySelectorAll('.palette span').forEach(function(span) {
  span.addEventListener('click', function() {
    document.querySelector('.answer-box p').setAttribute('class', `msg ${span.className}`)
  }) 
})
