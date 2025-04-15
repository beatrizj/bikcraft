const links = document.querySelectorAll(".header-menu a")

links.forEach((link) => {
    const href = link.href

    if(window.location.href.includes(href)) {
        link.classList.add("ativo")
    }
})