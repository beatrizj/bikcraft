//Links do menu
const links = document.querySelectorAll(".header-menu a")

links.forEach((link) => {
    const href = link.href

    if(window.location.href.includes(href)) {
        link.classList.add("ativo")
    }
})

//Itens do orçamento
const parameters = new URLSearchParams(location.search)

parameters.forEach((parameter) => {
    const element = document.getElementById(parameter)
    if (element) {
        element.checked = true
    }
})