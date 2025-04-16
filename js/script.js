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
