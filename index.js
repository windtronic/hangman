const keyboard = document.querySelector(".keyboard")
const letters = document.querySelectorAll(".letter")  
const displayAnswer = document.getElementById("displayAnswer") 
const resetButton = document.getElementById("reset") 
const emptyLetter = document.getElementById("empty-letters") 
  

letters.forEach((letter)=> {
    letter.addEventListener("click", (letters)=> {
        console.log(letter.innerText)
    })
})


let words = [                       
    "dream", "matrix", "onyx",
    "cello", "boxcar", "funny",     
    "akward", "juicy", "wizard",
    "topaz", "lucky", "avenue",
    "pixel", "puppy", "snazzy"
]
console.log(words)

let randomWord = words[Math.floor(Math.random() * words.length)]  // pick random word from the array of words //W3 Schools
let remainingLetters = words.length;
console.log(randomWord)

function resetWord() {
  randomWord = words[Math.floor(Math.random() * words.length)]
  console.log(randomWord)
}
resetButton.addEventListener("click", resetWord)
  
let startGame = true

function letterSelect() {
    if (startGame === false)
    return
}
console.log(startGame)


function seeLetter (emptyLetter) {
    emptyLetter.addEventListener("click", emptyLetter)
    console.log(emptyLetter)
}




  








