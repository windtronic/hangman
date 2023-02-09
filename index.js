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


words.forEach((word) => {                        
    words = words.map(function(upper){return upper.toUpperCase(); })
     },{ once: true } )



let choices = ""
let wrongLetters = []
let wins = 0
let losses = 0
let limit = 7


function optionsPlay() {
    wrongLetters = 0
    rightLetters = 0
    
   
    if (!randomWord.toLowerCase().includes(letters.innerText.toLowerCase())){
       
        for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i].toLowerCase() === letters.innerText.toLowerCase()) {
                  rightLetters++
                } 
        }
        } else {
            wrongLetters
        }
        
}
        

    choice.addEventListener("click", optionsPlay)


function resetWord() {
    randomWord = words[Math.floor(Math.random() * words.length)]
      window.location.reload()
  }
  resetButton.addEventListener("click", resetWord)
    console.log(randomWord)

  







  








