const keyboard = document.querySelector(".keyboard")
const letters = document.querySelectorAll(".letter")  
const displayAnswer = document.getElementById("displayAnswer") 
const resetButton = document.getElementById("reset") 
const emptyLetter = document.getElementById("empty-letters") 
const choice = document.getElementById("displayAnswer")
const lettersChosen = document.getElementById("letters-chosen")
const lost = document.getElementById("end-of-game")
const count = document.getElementById("choices-left")



let section = document.getElementById("empty-letters")
letters.forEach((letter)=> {                        
    letter.addEventListener("click", (letters)=> {
    let selectedItem = document.createElement("ul")
    selectedItem.innerText = letter.innerText
    section.appendChild(selectedItem)
    console.log(letter.innerText)
    },{ once: true } ) 
    })


// let test = document.createElement("p") 
// test.innerText = ("hello")
// section.appendChild(test)


let words = [                       
    "dream", "matrix", "onyx",
    "cello", "boxcar", "funny",     
    "akward", "juicy", "wizard",
    "topaz", "lucky", "avenue",
    "pixel", "puppy", "snazzy"
]


let randomWord = words[Math.floor(Math.random() * words.length)]  // pick random word from the array of words //W3 Schools
let remainingLetters = words.length;
// console.log(randomWord)

words.forEach((word)=> {                        
   words = words.map(function(upper){return upper.toUpperCase(); })
    },{ once: true } ) 

function resetWord() {
  randomWord = words[Math.floor(Math.random() * words.length)]
  console.log(randomWord)
//   section.removeChild(selectedItem)
}

resetButton.addEventListener("click", resetWord)

// location.reload() <--- USE THIS CORRECTLY
  
let choices = "letters";  // <----ASK ABOUT THIS PART !!!!! 
let wrong = 7;


function options () {
    if (choices == (choice)) {
            console.log(choice)
        } else {
        console.log(none)
        }
}


choice.addEventListener("click", options)

function mvp() {
    for (i = 7; i < words.length; i--) {
        if (words === choice) {
        choice = selectedItem.innerText 
        }
    }

    if (words === (choice)) {
      wrong -= 1
      let count = wrong - 7
      count.innerIndex
    }
    if (count === 0) {
       resetButton()
    }


  
  
}

// function winner () {
  
 
//  if ( === words.length) {
//   resetButton()
//    }
// }








  








