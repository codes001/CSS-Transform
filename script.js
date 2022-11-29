const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const container = document.querySelector(".container")

open_btn.addEventListener('click', () => {
    container.classList.toggle('show')
})

close_btn.addEventListener('click', () => container.classList.toggle ('show'));


// const open_btn = document.querySelector ('.open-btn');
// const close_btn = document.querySelector ('.close-btn');
// const container = document.querySelector('.container');
// open_btn.addEventListener ('click', navToggle)

// function navToggle () {
//     btn.classList.toggle('open');
//     container.classList.toggle('show');
//     menu.classList.toggle('show-menu');
// }