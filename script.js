const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const container = document.querySelector(".container")

open_btn.addEventListener('click', () => {
    container.classList.toggle('show')
})

close_btn.addEventListener('click', () => container.classList.toggle ('show'));
