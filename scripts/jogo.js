const grid = document.querySelector('.jogo')

const images = [
    "aluminio-par1",
    "aluminio-par2",
    "calcio-par1",
    "calcio-par2",
    "ferro-par1",
    "ferro-par2",
    "oxigenio-par1",
    "oxigenio-par2",
    "sodio-par1",
    "sodio-par2"
]

let firstCard = ''
let secondCard = ''

function revealCard(event) {
    if (event.target.parentNode.className.includes('reveal-card')) return

    if (firstCard === '') {
        event.target.parentNode.classList.add('reveal-card')
        firstCard = event.target.parentNode
    } else if (secondCard === '') {
        event.target.parentNode.classList.add('reveal-card')
        secondCard = event.target.parentNode

        checkCards()
    }
}

function checkCards() {
    const firstChoice = firstCard.getAttribute('data-image')
    const secondChoice = secondCard.getAttribute('data-image')

    if (firstChoice === secondChoice) {
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')
        firstCard = ''
        secondCard = ''

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')
            firstCard = ''
            secondCard = ''

        }, 1500)

    }
}

function createElement(tag, classname) {
    const elemento = document.createElement(tag)
    elemento.className = classname
    return elemento
}

function createCard(image) {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../imgs/jogo-memoria/${image}.jfif')`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-image', image.slice(0, -1))

    return card
}


function loadGame() {
    const shuffleImages = images.sort(() => Math.random() - 0.5)

    shuffleImages.forEach((image) => {

        const card = createCard(image)
        grid.appendChild(card)
    })
}

loadGame()