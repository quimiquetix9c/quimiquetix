const grid = document.querySelector('.jogo')
const timer = document.querySelector('.tempo')

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
    "sodio-par2",
    "magnesio-par1",
    "magnesio-par2",
    "cloro-par1",
    "cloro-par2",
    "fosforo-par1",
    "fosforo-par2",
    "boro-par1",
    "boro-par2",
    "berilio-par1",
    "berilio-par2",
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

function checksEndGames() {
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length == images.length) {
        alert(`Parabéns, você venceu!!! O tempo para terminar o jogo foi: ${timer.innerHTML} segundos.`)
        clearInterval(window.loop)
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
        checksEndGames()

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')
            firstCard = ''
            secondCard = ''

        }, 1500)

    }
}

const timerCount = () => {
    window.loop = setInterval(() => {
        const currentTime = Number(timer.innerHTML)
        timer.innerHTML = currentTime + 1

    }, 1000)
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

timerCount()
loadGame()