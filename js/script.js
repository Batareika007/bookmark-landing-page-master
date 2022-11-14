const submit = document.getElementById("submit")
const email = document.getElementById("email")
const accordionItems = document.querySelectorAll(".accordion__item")

submit.addEventListener("click", (event) => {
	event.preventDefault()
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
		email.classList.remove("active")
	} else {
		email.classList.add("active")
	}
	return false
})

accordionItems.forEach((element) => {
	element.addEventListener("click", function(){
		accordionItems.forEach(el =>  el.classList.remove('active') )
        this.classList.toggle('active')
        console.log(this)
	})
})
