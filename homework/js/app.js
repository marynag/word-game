//elem box


import { dictionary } from './dictionary.js';

const five=5;
const six=6;
const thousent=1000;
const minus_one=-1;



const guess_number = 6;
let guess_left = guess_number;
let current_guess = [];
let nextLetter = 0;
let CompWord = dictionary[Math.floor(Math.random() * dictionary.length)]

console.log(CompWord)


const butt = document.querySelector('#butt');
const res = document.querySelector('#res');




res.onclick = function() {
    location.reload()
}


function create_blocks() {
    let board = document.getElementById('game-board');

    for (let i = 0; i < guess_number; i++) {
        let user_try= document.createElement('div')
        user_try.className = 'word'
        
        for (let j = 0; j < five; j++) {
            let box = document.createElement('div')
            box.className = 'word-box'
            user_try.appendChild(box)
        }

        board.appendChild(user_try)
    }
}

create_blocks()


document.addEventListener('keyup', (e) => {

    if (guess_left === 0) {
        return
    }

    let key_is_pressed = String(e.key)
    if (key_is_pressed === 'Backspace' && nextLetter !== 0) {
        deleteLetter()
        return
    }

    butt.onclick = function() {
        checkGuess()
        return
    }

    let found = key_is_pressed.match(/[А-Яа-яёЁЇїІіЄєҐґ]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        find_letter(key_is_pressed)
    }
})


function deleteLetter () {
    let user_try = document.getElementsByClassName('word')[six - guess_left]
    let box = user_try.children[nextLetter - 1]
    box.textContent = ''
    box.classList.remove('filled-box')
    current_guess.pop()
    nextLetter -= 1
}

function checkGuess () {
    let user_try = document.getElementsByClassName('word')[six- guess_left]
    let user_guess = ''
    let CompWort_letter = Array.from(CompWord)

    for (const val of current_guess) {
        user_guess += val
    }

    if (!dictionary.includes(user_guess)) {
        alert('Слова нема в словнику')
        return
    }

    
    for (let i = 0; i < five; i++) {
        let letterColor = ''
        let box = user_try.children[i]
        let letter = current_guess[i]
        
        let letter_position = CompWort_letter.indexOf(current_guess[i])
        if (letter_position === minus_one) {
            letterColor = '#C0C0C0'
        } else {
            if (current_guess[i] === CompWort_letter[i]) {
                letterColor = '#00CC00'
            } else {
                letterColor = '#ffff33'
            }

            CompWort_letter[letter_position] = '#'
        }

        let delay = 0
        setTimeout(() => {
            box.style.backgroundColor = letterColor
            color_letter(letter, letterColor)
        }, delay)
    }

    if (user_guess === CompWord) {
        alert('Congratulations! You won.')
        guess_left = 0
        setTimeout(() => {
            location.reload()
        }, thousent)
        return
    } else {
        guess_left -= 1;
        current_guess = [];
        nextLetter = 0;

        if (guess_left === 0) {
            alert('Game over')
            setTimeout(() => {
                location.reload()
            }, thousent)
        }
    }
}

function color_letter(letter, color) {
    for (const elem of document.getElementsByClassName('keyboard-button')) {
        if (elem.textContent === letter) {
            let Coloring = elem.style.backgroundColor
            if (Coloring === 'green') {
                return
            } 

            if (Coloring === 'yellow' && color !== 'green') {
                return
            }

            elem.style.backgroundColor = color
            break
        }
    }
}


function find_letter (key_is_pressed) {
    if (nextLetter === five) {
        return
    }
    key_is_pressed = key_is_pressed.toLowerCase()

    let user_try = document.getElementsByClassName('word')[six - guess_left]
    let box = user_try.children[nextLetter]
    box.textContent = key_is_pressed
    box.classList.add('filled-box')
    current_guess.push(key_is_pressed)
    nextLetter += 1
}




