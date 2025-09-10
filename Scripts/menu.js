window.addEventListener('scroll', ()=>{
    let header = document.getElementById("header")
    header.classList.toggle('rolagem', window.scrollY > 0)
})

let icon = document.getElementById("btn-menu");
let menu = document.getElementById("menu-lateral")


icon.addEventListener("click", () => {
  menu.classList.toggle("active")
  icon.classList.toggle("active")
});


let links = menu.querySelectorAll("a")


links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active")
    icon.classList.remove("active")
  });
});

