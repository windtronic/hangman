// const container = document.querySelector(".container")  // class selector from HTML (".className")
// const displayAnswer = document.getElementById("displayAnswer") // ID selector from HTML 
// const resetButton = document.getElementById("reset") // ID selector from HTML
// let stickFigure = document.getElementById("stickFigure") // ID selector from HTML
// let attempts = document.querySelector(".attemps") // another way to grab ID selector from HTML(querySelector needs an ID of main) example --> <p id="description class="main> "Education.launchcode.org"


 // the letters chosen will be single letters from the chosen array below.

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", // array of letters in the alphabet
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 
for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i].length)
}


let words = [                       
    "dream", "matrix", "Onyx",
    "cello", "boxcar", "funny",      // 15 random words chosen in the array to be used in game. 
    "akward", "juicy", "wizard",
    "topaz", "lucky", "avenue",
    "pixel", "puppy", "snazzy"
]

let word = words[Math.floor(Math.random() * words.length)]  // pick random word from the array of words //W3 Schools

let wordArray = []
for (let i = 0; i < word.length; i++) {   // for loop to start at 0 and goes up by 1 and will not surpass the length of words.
    wordArray[i] = "_"  // to end the for loop at the random generated word length. 
}

let remainder = word.length // will give the length of the word when generated.


function playerPick() {    // function provides availability to use over and over again instead of writing it out multiple times. (W3 Schools)
}