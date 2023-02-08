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
        console.log(randomWord)
        console.log(randomWord.toLowerCase().includes(letter.innerText.toLowerCase()))
        if (randomWord.toLowerCase().includes(letter.innerText.toLowerCase())) {
        let selectedItem = document.createElement("ul")
        selectedItem.innerText = letter.innerText
        section.appendChild(selectedItem)
        console.log(letter.innerText)
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


function optionsPlay (letters) {
    let status = 0
  for (i = 0; i <= randomWord.length; i++) {
        if (randomWord[i] == letters) {
            status = 1
        console.log("you did it")
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
}


// function endGame () {

// }















function resetWord() {
    randomWord = words[Math.floor(Math.random() * words.length)]
      window.location.reload()
  }
  resetButton.addEventListener("click", resetWord)
    console.log(randomWord)

  
  



// document.getElementById("play").addEventListener("click", play);



  








