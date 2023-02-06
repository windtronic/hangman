const keyboard = document.querySelector(".keyboard")
const letters = document.querySelectorAll(".letter")  // class selector from HTML (".className")
const displayAnswer = document.getElementById("displayAnswer") // ID selector from HTML 
const resetButton = document.getElementById("reset") // ID selector from HTML
const emptyLetter = document.getElementById("empty-letters") 
  
                                                                                                  // another way to grab ID selector from HTML(querySelector needs an ID of main) example --> <p id="description class="main> "Education.launchcode.org"
// the letters chosen will be single letters from the html below.
  

letters.forEach((letter)=> {
    letter.addEventListener("click", (letters)=> {
        console.log(letter)
    })
})



let words = [                       
    "dream", "matrix", "Onyx",
    "cello", "boxcar", "funny",      // 15 random words chosen in the array to be used in game. 
    "akward", "juicy", "wizard",
    "topaz", "lucky", "avenue",
    "pixel", "puppy", "snazzy"
]
console.log(words)


let randomWord = words[Math.floor(Math.random() * words.length)]  // pick random word from the array of words //W3 Schools
console.log(randomWord)

let choice = "";
let count = 6;
let mistakes = 0;
let guessed = [];










function playerPick() {    // function provides availability to use over and over again instead of writing it out multiple times. (W3 Schools)
}

//Restart Game // and add an Event listener
resetButton.addEventListener("click", () => {
    //need the conditions in place to reset //
})