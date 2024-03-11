toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')

// close nav bar
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})
// open modal
open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})
// close modal with x
close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})
// close modal w/outside click
window.addEventListener('click', (e) => {
    if (e.target == modal){
        modal.classList.remove('show-modal')
    }
})