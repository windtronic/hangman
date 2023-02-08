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
let remainingLetters = words.length;
// console.log(randomWord)

words.forEach((word) => {                        
   words = words.map(function(upper){return upper.toUpperCase(); })
    },{ once: true } ) 

function resetWord() {
  randomWord = words[Math.floor(Math.random() * words.length)]
    window.location.reload()
}

resetButton.addEventListener("click", resetWord)
  console.log(randomWord)





function options () {
    let correctLetters = ""
  

    for (i = 0; i <= randomWord.length; i++) {
        if (correctLetters[i] != randomWord) {
        console.log("you did it")
        }
    }
}


function wrongPick () {
  let wrongLetters = 0
    
  if ( wrongLetters != (correctLetters)) {
      wrongLetters += 1
      let wrongLetters = wrongLetters + 1
      
    }
   else if (wrongLetters === 6) {
       console.log("you loose")
    } 
}










function winner () {
  
 
 if (choice === words.length) {
  
   }
}








  








