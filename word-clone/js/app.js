import { dictionary } from './dictionary.js';

let WORDS_All=[]

let currentChoice=1;

let id1=['#elem11','#elem12','#elem13','#elem14','#elem15']
let id2=['#elem21','#elem22','#elem23','#elem24','#elem25']
let id3=['#elem31','#elem32','#elem33','#elem34','#elem35']
let id4=['#elem41','#elem42','#elem43','#elem44','#elem45']
let id5=['#elem51','#elem52','#elem53','#elem54','#elem55']
let id6=['#elem61','#elem62','#elem63','#elem64','#elem65']


const NumberGuessing=6;
res.onclick = function() {
    location.reload()
}


butt.onclick = function() {
    if (currentChoice==1){
        let word=[]
        let WORDS=[]
        let letter1 = document.getElementById('elem11').value;
        let letter2 = document.getElementById('elem12').value;
        let letter3 = document.getElementById('elem13').value;
        let letter4 = document.getElementById('elem14').value;
        let letter5 = document.getElementById('elem15').value;

        word.push(letter1)
        word.push(letter2)
        word.push(letter3)
        word.push(letter4)
        word.push(letter5)
    
        WORDS.push(word.join(''))
        WORDS_All.push(word.join(''))
        console.log(WORDS);
        checkGuess(word.join(''),word,currentChoice);
    }
    if (currentChoice==2){
        let word=[]
        let WORDS=[]
        let letter1 = document.getElementById('elem21').value;
        let letter2 = document.getElementById('elem22').value;
        let letter3 = document.getElementById('elem23').value;
        let letter4 = document.getElementById('elem24').value;
        let letter5 = document.getElementById('elem25').value;

        word.push(letter1)
        word.push(letter2)
        word.push(letter3)
        word.push(letter4)
        word.push(letter5)

        WORDS.push(word.join(''))
        WORDS_All.push(word.join(''))
        console.log(WORDS);
        checkGuess(word.join(''),word,currentChoice);
    }
    if (currentChoice==3){
        let word=[]
        let WORDS=[]
        let letter1 = document.getElementById('elem31').value;
        let letter2 = document.getElementById('elem32').value;
        let letter3 = document.getElementById('elem33').value;
        let letter4 = document.getElementById('elem34').value;
        let letter5 = document.getElementById('elem35').value;

        word.push(letter1)
        word.push(letter2)
        word.push(letter3)
        word.push(letter4)
        word.push(letter5)

        WORDS.push(word.join(''))
        WORDS_All.push(word.join(''))
        console.log(WORDS);
        checkGuess(word.join(''),word,currentChoice);
    }
    if (currentChoice==4){
        let word=[]
        let WORDS=[]
        let letter1 = document.getElementById('elem41').value;
        let letter2 = document.getElementById('elem42').value;
        let letter3 = document.getElementById('elem43').value;
        let letter4 = document.getElementById('elem44').value;
        let letter5 = document.getElementById('elem45').value;

        word.push(letter1)
        word.push(letter2)
        word.push(letter3)
        word.push(letter4)
        word.push(letter5)

        WORDS.push(word.join(''))
        console.log(WORDS);
        WORDS_All.push(word.join(''))
        checkGuess(word.join(''),word,currentChoice);
    }
    if (currentChoice==5){
        let word=[]
        let WORDS=[]
        let letter1 = document.getElementById('elem51').value;
        let letter2 = document.getElementById('elem52').value;
        let letter3 = document.getElementById('elem53').value;
        let letter4 = document.getElementById('elem54').value;
        let letter5 = document.getElementById('elem55').value;

        word.push(letter1)
        word.push(letter2)
        word.push(letter3)
        word.push(letter4)
        word.push(letter5)

        WORDS.push(word.join(''))
        console.log(WORDS);
        WORDS_All.push(word.join(''))
        checkGuess(word.join(''),word,currentChoice);
    }
    if (currentChoice==6){
        let word=[]
        let WORDS=[]
        let letter1 = document.getElementById('elem61').value;
        let letter2 = document.getElementById('elem62').value;
        let letter3 = document.getElementById('elem63').value;
        let letter4 = document.getElementById('elem64').value;
        let letter5 = document.getElementById('elem65').value;

        word.push(letter1)
        word.push(letter2)
        word.push(letter3)
        word.push(letter4)
        word.push(letter5)

        WORDS.push(word.join(''))
        console.log(WORDS);
        WORDS_All.push(word.join(''))
        console.log(WORDS_All)
        checkGuess(word.join(''),word,currentChoice);
    }
    currentChoice+=1
    if((NumberGuessing-currentChoice)<0 && user_try !== rightGuessString){
        alert('Ви прогали')
        location.reload()
    }
};

let rightGuessString = dictionary[Math.floor(Math.random() * dictionary.length)]
console.log(rightGuessString)

let rightGuessString_letters=rightGuessString.split('');


function find_in_dictionary(user_try){
    let find=dictionary.includes(user_try);

    if (find==false) {
        alert("Слова нема в словнику")
    }
    return find
}

function checkGuess (user_try, user_try_letter,currentChoice) {
    find_in_dictionary(user_try)

    console.log(`user_try ${user_try_letter}`)
    for (let i = 0; i < 5; i++) {
        if(user_try_letter[i]==rightGuessString_letters[i]){
            console.log('к')           
        } 
    


    if (currentChoice==1){

        
        let letterPosition = rightGuessString_letters.indexOf(user_try_letter[i])

        if (letterPosition === -1) {
           console.log('++')
           $(id1[i]).addClass("wrong_letter");
        } else {

            if (user_try_letter[i] === rightGuessString_letters[i]) {
                console.log('з')
                $(id1[i]).addClass("right_letter_and_position");
            } else {
                console.log('ж')
                $(id1[i]).addClass("right_letter")
            }
        }
    }

    if (currentChoice==2){
        
        let letterPosition = rightGuessString_letters.indexOf(user_try_letter[i])
        if (letterPosition === -1) {
           console.log('++')
           $(id2[i]).addClass("wrong_letter");
        } else {

            if (user_try_letter[i] === rightGuessString_letters[i]) {

                console.log('з')
                $(id2[i]).addClass("right_letter_and_position");
            } else {

                console.log('ж')
                $(id2[i]).addClass("right_letter")
            }
        }
    }

    if (currentChoice==3){        
        let letterPosition = rightGuessString_letters.indexOf(user_try_letter[i])
        if (letterPosition === -1) {
           console.log('++')
           $(id3[i]).addClass("wrong_letter");
        } else {
            if (user_try_letter[i] === rightGuessString_letters[i]) {
                console.log('з')
                $(id3[i]).addClass("right_letter_and_position");
            } else {
                console.log('ж')
                $(id3[i]).addClass("right_letter")
            }
        }
    }
    
    if (currentChoice==4){        
        let letterPosition = rightGuessString_letters.indexOf(user_try_letter[i])
        if (letterPosition === -1) {
           console.log('++')
           $(id4[i]).addClass("wrong_letter");
        } else {
            if (user_try_letter[i] === rightGuessString_letters[i]) {
                console.log('з')
                $(id4[i]).addClass("right_letter_and_position");
            } else {
                console.log('ж')
                $(id4[i]).addClass("right_letter")
            }
        }
    }
    
    if (currentChoice==5){        
        let letterPosition = rightGuessString_letters.indexOf(user_try_letter[i])
        if (letterPosition === -1) {
           console.log('++')
           $(id5[i]).addClass("wrong_letter");
        } else {
            if (user_try_letter[i] === rightGuessString_letters[i]) {
                console.log('з')
                $(id5[i]).addClass("right_letter_and_position");
            } else {
                console.log('ж')
                $(id5[i]).addClass("right_letter")
            }
        }
    }
    
    if (currentChoice==6){        
        let letterPosition = rightGuessString_letters.indexOf(user_try_letter[i])
        if (letterPosition === -1) {
           console.log('++')
           $(id6[i]).addClass("wrong_letter");
        } else {
            if (user_try_letter[i] === rightGuessString_letters[i]) {
                console.log('з')
                $(id6[i]).addClass("right_letter_and_position");
            } else {
                console.log('ж')
                $(id6[i]).addClass("right_letter")
            }
        }
    }


        let delay = 250 * i
        setTimeout(()=> {

        }, delay)
    }

    if (user_try === rightGuessString) {
        alert("You guessed right! Game over!")
      
        return
    } else {
        if (currentChoice >6) {
            alert("You've run out of guesses! Game over!")
            alert(`The right word was: "${rightGuessString}"`)
        }
    }


    
}


