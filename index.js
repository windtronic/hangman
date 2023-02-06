const keyboard = document.querySelector(".keyboard")
const letters = document.querySelectorAll(".letter")  
const displayAnswer = document.getElementById("displayAnswer") 
const resetButton = document.getElementById("reset()") 
const emptyLetter = document.getElementById("empty-letters") 
  

letters.forEach((letter)=> {
    letter.addEventListener("click", (letters)=> {
        console.log(letter)
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



  









//Restart Game // and add an Event listener
// resetButton.addEventListener("click", () => {
//     //need the conditions in place to reset //
// })