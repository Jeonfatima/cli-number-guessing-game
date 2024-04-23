import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 10 + 1) ;
const answer = await inquirer.prompt
([
    {
       name:"userGuessNumber",
       type:"number",
       message:"Please Guess The Number between 1 till 10 = "
    }
])

if(answer.userGuessNumber === randomNumber){
    console.log("You guessed right number")
}
else{
    console.log("You guessed wrong number")
}