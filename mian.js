let menuel = document.querySelector(".toogle i");
let links = document.querySelector(".link");
let spanel = document.querySelector(".up");
menuel.onclick = function() {
    links.classList.toggle("active");
    if (links.classList.contains("active")) {
        menuel.classList.remove("fa-bars");
        menuel.classList.add("fa-x");
    } else {
        menuel.classList.add("fa-bars");
        menuel.classList.remove("fa-x");

    }
}
window.onscroll = function() {
    // console.log(this.scroll)
    if (this.scrollY >= 140) {
        spanel.classList.add("active");
    } else {
        spanel.classList.remove("active");

    }
}
spanel.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
const move = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
move.reveal(".landing", { delay: 100, origin: "left" })
move.reveal(".care", { delay: 100, origin: "left" })
move.reveal(".shop", { delay: 100, origin: "left" })
move.reveal(".news", { delay: 100, origin: "left" })
move.reveal(".footer ", { delay: 100, origin: "left" })