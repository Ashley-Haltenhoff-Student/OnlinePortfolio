
let newX = 0, newY = 0, startX = 0, startY = 0, mouseX = 0, mouseY = 0;

const windows = document.getElementsByClassName('window');

addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
});

windows.forEach(window => {
    window.addEventListener('dragstart', () => {
        console.log('dragstart')
        let position = window.getBoundingClientRect()
        startX = position.left
        startY = position.top
    })
    window.addEventListener('dragend',() => {
        console.log('dragend')
        newX = startX - mouseX
        newY = startY - mouseY

        window.position = newX, newY
    })
})