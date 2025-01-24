const opeanModalBtnElement = document.querySelector('#opeanModal');
const modalElement = document.querySelector('.modal');
const modalContentElemetnt = modalElement.querySelector('.modal_overlay');

opeanModalBtnElement.addEventListener('click', () => {
    modalElement.classList.add('open') // when the "open Modal" button is clicked then the open class is added
})

modalContentElemetnt.addEventListener('click', () => {
    modalElement.classList.remove('open');
})