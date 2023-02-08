const keyboard = document.querySelector(".keyboard")
let letters = document.querySelectorAll(".letter")  
let emptyLetter = document.getElementById("empty-letters") 
let choice = document.getElementById("letters-chosen")
let count = document.getElementById("chances-left")
let win = document.getElementById("win")
let lost = document.getElementById("lost")
const resetButton = document.getElementById("reset") 



let section = document.getElementById("empty-letters")
letters.forEach((letter)=> {                        
    letter.addEventListener("click", (letters)=> {
    let selectedItem = document.createElement("ul")
    selectedItem.innerText = letter.innerText
    section.appendChild(selectedItem)
    console.log(letter.innerText)
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


function optionsPlay () {
    let correctLetters = []
    let hiddenWords = ""
  
    for (i = 0; i <= randomWord.length; i++) {
        if (correctLetters[i] = randomWord) {
        console.log("you did it")
        } else {
            console.log(null)
        }
    } 
} 

let wrongLetters = 0
let limit = 7
function wrong (count) {
  
    if (wrongLetters >= limit) {
      wrongLetters += 1
      let wrongLetters = wrongLetters + 1
      playing = false
      console.log(count)
    }
}

let counter = limit - wrongLetters















function resetWord() {
    randomWord = words[Math.floor(Math.random() * words.length)]
      window.location.reload()
  }
  resetButton.addEventListener("click", resetWord)
    console.log(randomWord)

  
  



// document.getElementById("play").addEventListener("click", play);



  








