let numSquare = 6
let colors = []
let pickedColor;

const h1 = document.querySelector('h1')
const squares = document.querySelectorAll('.square')
const colorDisplay = document.querySelector('#colorDisplay')
const modesBtn = document.querySelectorAll('.mode')

let massageDly = document.querySelector('#massage')
let resetBtn = document.querySelector('#reset')

init()

function init(){
    setupMode()
    setupSquare()
    reset()
}

function setupMode(){
    for(let i = 0; i < modesBtn.length; i++){
        modesBtn[i].addEventListener('click', function(){
            modesBtn[0].classList.remove('selected')
            modesBtn[1].classList.remove('selected')
            this.classList.add('selected')
            this.textContent === 'Easy' ? numSquare = 3 : numSquare = 6;
            reset()
        })
    }
}

function setupSquare(){
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', function(){
            const clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                changeColor(clickedColor)
                h1.style.backgroundColor = clickedColor
                massageDly.textContent = 'CORRECT!'
                resetBtn.textContent = 'Play Again?'
            } else {
                this.style.backgroundColor = '#232323'
                massageDly.textContent = 'Try Again!'
            }
        })
    }
}

function reset(){
    colors = genarateRandomColor(numSquare)
    pickedColor = pickColor()

    resetBtn.textContent = 'New Game'
    massageDly.textContent = ''

    colorDisplay.textContent = pickedColor
    h1.style.background = 'steelblue'

    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block'
            squares[i].style.background = colors[i]
        } else{
            squares[i].style.display = 'none'
        }
    }
}

function changeColor(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = color
    }
}

function pickColor(){
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
} 

function genarateRandomColor(num){
    let array = []
    for(let i = 0; i < num; i++)
    array.push(randomColor())
    return array
}

function randomColor(){
    r = Math.floor(Math.random() * 256)
    g = Math.floor(Math.random() * 256)
    b = Math.floor(Math.random() * 256)
    return  `rgb(${r}, ${g}, ${b})`
}

