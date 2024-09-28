const prompt = require('prompt-sync')()
const name = prompt("what's your name? ")
console.log("Hello,", name, "welcome to The Game!")

const play = prompt("Do you wanna play? ")

if (play.toLowerCase() === "yes"){
    console.log("Ok! Lets's play :)")
}else if(play.toLowerCase === "no"){
    console.log("Ok, have a good day.")
}else{
    console.log("Invalid input. Answer should be yes or no")
}