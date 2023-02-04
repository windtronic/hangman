


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", // array of letters in the alphabet
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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

