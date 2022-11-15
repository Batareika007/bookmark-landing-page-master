const submit = document.getElementById("submit")
const email = document.getElementById("email")
const accordionItems = document.querySelectorAll(".accordion__item")
const openMenu = document.getElementById("openMenu")
const closeMenu = document.getElementById("closeMenu")
const navMenu = document.querySelector(".nav")
const body = document.querySelector("body")
const logoHeader = document.querySelector(".header__logo")
const sliderContainer = document.querySelector(".slider__container")
const sliderItem = document.querySelectorAll(".slider__link")

// form validation
submit.addEventListener("click", (event) => {
	event.preventDefault()
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
		email.classList.remove("active")
	} else {
		email.classList.add("active")
	}
})
// accordion
accordionItems.forEach((element) => {
	element.addEventListener("click", function () {
		if(this.classList.contains('active')){
			accordionItems.forEach((el) => el.classList.remove("active"))
		}
		else{
			accordionItems.forEach((el) => el.classList.remove("active"))
			this.classList.add("active")
		}
	})
})

// hamburger menu

function showMenu() {
	navMenu.classList.add("active")
	closeMenu.style.display = "block"
	openMenu.style.display = "none"
	body.classList.add("active")
	logoHeader.classList.add("active")
}
function hideMenu() {
	navMenu.classList.remove("active")
	closeMenu.style.display = "none"
	openMenu.style.display = "block"
	body.classList.remove("active")
	logoHeader.classList.remove("active")
}

document.addEventListener('click', event => {
    if(event.target !== openMenu){
        hideMenu()
    }
})

openMenu.addEventListener("click", showMenu)
closeMenu.addEventListener("click", hideMenu)

// slider

sliderItem.forEach((item) => {
	item.addEventListener("click", function () {
        sliderItem.forEach(item => item.classList.remove('active'))
        if(this === document.getElementById('slider1')){
            sliderContainer.style.justifyContent = 'flex-start'
            this.classList.add('active')
        }
        else if (this === document.getElementById('slider2')){
            sliderContainer.style.justifyContent = 'center'
            this.classList.add('active')
        }
        else if (this === document.getElementById('slider3')){
            sliderContainer.style.justifyContent = 'flex-end'
            this.classList.add('active')
        }
        
	})
})

