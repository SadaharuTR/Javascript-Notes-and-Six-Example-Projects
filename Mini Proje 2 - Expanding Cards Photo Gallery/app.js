const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        aktifClassSilici()
        panel.classList.add('active')
    })
})

function aktifClassSilici() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}