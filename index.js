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
    letter.addEventListener("click", ()=> {
        console.log(letter.innerText)
        // console.log(randomWord)
        console.log(randomWord.toLowerCase().includes(letter.innerText.toLowerCase()))
        if (randomWord.toLowerCase().includes(letter.innerText.toLowerCase())) {
        let selectedItem = document.createElement("ul")
        selectedItem.innerText = letter.innerText
        section.appendChild(selectedItem)
        // console.log(letter.innerText)
        }
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


let wrongLetters = []
let lettersGuessed = ""
let limit = 7
let status = 0
let wins = 0
let losses = 0


function optionsPlay (letters) {
    let letterGuessed = false
    for (i = 0; i <= randomWord.length; i++) {
        if (randomWord[i] === letters) {
        letterGuessed = true
        } else {
            wrongLetters.push(letters)
            status -= 1
    }
    }  


function wrong () {
 
    if (wrongLetters >= limit) {
      wrongLetters += 1
      playing = false
      console.log(wrongLetters)
    }
}
}



// function endGame () {

// }


function resetWord() {
    randomWord = words[Math.floor(Math.random() * words.length)]
      window.location.reload()
  }
  resetButton.addEventListener("click", resetWord)
    console.log(randomWord)







  








