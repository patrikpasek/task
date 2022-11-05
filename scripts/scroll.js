const work = document.querySelector("#scroll-work")
const more = document.querySelector("#scroll-more")

let scroll = () => {
    let about = document.querySelector(".about").offsetTop
    
    window.scrollTo({
        top: about,
        behavior: "smooth"
    })
}

work.addEventListener("click", () => {
    scroll()
})

more.addEventListener("click", () => {
    scroll()
})