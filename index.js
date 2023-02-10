const keyboard = document.querySelector(".keyboard")
let letters = document.querySelectorAll(".letter")  
let emptyLetter = document.getElementById("empty-letters") 
let choice = document.getElementById("letters-chosen")
let count = document.getElementById("chances-left")

const resetButton = document.getElementById("reset") 

let correctLetters = []

let section = document.getElementById("empty-letters")
letters.forEach((letter)=> {                        
    letter.addEventListener("click", ()=> {
        console.log(letter.innerText)
        // console.log(randomWord)
        console.log(randomWord.toLowerCase().includes(letter.innerText.toLowerCase()))
        if (randomWord.toLowerCase().includes(letter.innerText.toLowerCase())) {
        let selectedItem = document.createElement("ul")
        selectedItem.innerText = letter.innerText
        section.appendChild(selectedItem)
        console.log(letter.innerText)
        correctLetters.push(letter.innerText)
        incorrectLetters.push(letter.innerText)
        }
        resetGame()
    },{ once: true } ) 
    })

let words = [                       
    "dream", "matrix", "onyx",
    "cat", "boxcar", "fun",     
    "layers", "juicy", "wizard",
    "topaz", "lucky", "phone",
    "pixel", "shepard", "simple"
]

let randomWord = words[Math.floor(Math.random() * words.length)]  

words.forEach((word) => {                        
   words = words.map(function(upper){return upper.toUpperCase(); })
    },{ once: true } ) 


let limit = 6
let incorrectLetters = []

    function incorrect () {
    for (i = 0; i < limit.length; i ++) {
      if  (incorrectLetters !== correctLetters.length) {
        alert("you didn't guess the correct letter")
        
    } else if (limit > randomWord.length) {
        alert("you didn't guess the word")
    }   
    } window.location.reload()
    console.log(limit.innerText)
    }
    function resetGame () {
        if (randomWord.length === correctLetters.length) {
            alert("you guessed the word")
            window.location.reload()
       
}
}  
    

function resetWord() {
    randomWord = words[Math.floor(Math.random() * words.length)]
      window.location.reload()
  }
  resetButton.addEventListener("click", resetWord)
    console.log(randomWord)
  








  








