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
    let selectedItem = selectedItem
    if (selectedItem.innerText <= randomWord) {
      console.log(selectedItem)
    
    } else  {
        console.log("pick another letter")
        }
}








let wrongGuesses = 0
function mvp() {
    for (i = 0; i > words.length; i++) {
        if (words === choice) {
        choice = selectedItem.innerText 
        }
    }

    if ( wrongGuesses === (choice)) {
      wrong += 1
      let count = wrongGuesses + 1
      count.choice
    }
   else if (count === 6) {
       console.log("you loose")
    } 


}
console.log(wrongGuesses)



function winner () {
  
 
 if (choice === words.length) {
  
   }
}








  








