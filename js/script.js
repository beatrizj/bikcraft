//Menu links
const links = document.querySelectorAll(".header-menu a")

links.forEach((link) => {
    const href = link.href

    if(window.location.href.includes(href)) {
        link.classList.add("ativo")
    }
})

//Budget itens
const parameters = new URLSearchParams(location.search)

parameters.forEach((parameter) => {
    const element = document.getElementById(parameter)
    if (element) {
        element.checked = true
    }
})

//FAQ
const questions = document.querySelectorAll(".faq button")

questions.forEach((question) => {    
    question.addEventListener("click", (e) => {
        const question = e.currentTarget
        const controls = question.getAttribute("aria-controls")
        const answer = document.getElementById(controls)
        
        answer.classList.toggle("active")
        const active = answer.classList.contains("active")
        question.setAttribute("aria-expanded", active)
    })
})

//Bikes gallery
const images = document.querySelectorAll(".bike-img img")
const imagesContainer = document.querySelector(".bike-img")

images.forEach((image) => {
    image.addEventListener("click", (e) => {
        const media1000px = matchMedia("(min-width: 920px)").matches
        const media800px = matchMedia("(max-width: 800px)").matches
        if (media1000px || media800px) {
            imagesContainer.prepend(e.currentTarget)
        }        
    })
})

//Animation plugin
if (window.SimpleAnime) {
    new SimpleAnime()
}
