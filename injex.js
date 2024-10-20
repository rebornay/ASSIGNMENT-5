const toggleButton = document.querySelector("#hamburger-menu");

const navListMenu = document.querySelector("#nav-menu")

toggleButton.addEventListener("click", onButtonClick);

function onButtonClick(){
    if (!navListMenu.classList.contains("open")) {
        navListMenu.classList.add("open");
    } else {
        navListMenu.classList.remove("open")
    }
}