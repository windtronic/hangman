const keyboard = document.querySelector(".keyboard")
let letters = document.querySelectorAll(".letter")  
let emptyLetter = document.getElementById("empty-letters") 
let choice = document.getElementById("letters-chosen")
let count = document.getElementById("chances-left")
const resetButton = document.getElementById("reset") 
let win = document.getElementById("win")
let lost = document.getElementById("lost")

let correctLetters = []



let section = document.getElementById("empty-letters")
letters.forEach((letter)=> {                        
    letter.addEventListener("click", ()=> {
        // console.log(letter.innerText)
        // console.log(randomWord)
        // console.log(randomWord.toLowerCase().includes(letter.innerText.toLowerCase()))
        if (randomWord.toLowerCase().includes(letter.innerText.toLowerCase())) {
        let selectedItem = document.createElement("ul")
        selectedItem.innerText = letter.innerText
        section.appendChild(selectedItem)
        // console.log(letter.innerText)
        correctLetters.push(letter.innerText)
        }
        incorrect()
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


    
    let incorrectLetters = 0
    let limit = randomWord.length
    function incorrect () {
        if  (incorrectLetters >= limit) {
      resetGame()
       return 
    } 
        else {
        alert("wrong letter")
        incorrectLetters++
        console.log(incorrectLetters)
    }   
     
   
   
    } 





    function resetGame () {
        if (randomWord.length === correctLetters.length) {
            alert("you guessed the word")
            window.location.reload()
       }
       else if (incorrectLetters >= limit) {
         alert("you didn't guess the word")
           window.location.reload()
       }
       
}  
    

function resetWord() {
    randomWord = words[Math.floor(Math.random() * words.length)]
      window.location.reload()
  }
  resetButton.addEventListener("click", resetWord)
    console.log(randomWord)
  








  








