const choices = ['rock','paper','Scissors']
const playerDisplay = document.getElementById("playerDisplay")
const computerSisplay = document.getElementById("computerSisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0
let computerscore =0




function playGame(playerchoice){
    let computerChoice = choices[Math.floor(Math.random()*3)]
    let result = ""

    if(playerchoice === computerChoice)
    {
        result = "It's a tie"
    }
    else{
        switch(playerchoice){
            case 'rock':
                result=(computerChoice === 'Scissors') ? 'YOU WIN!' : 'YOU LOSE'
                break

            case 'paper':
                result = (computerChoice ==='rock') ? 'YOU WIN!' : 'YOU LOSE'    
                break
            case 'Scissors':
                result = (computerChoice === 'paper') ? 'YOU WIN!' : 'YOU LOSE'    
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerchoice}`
    computerSisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = `${result}`

    resultDisplay.classList.remove('greenText','redText')
    if(result==='YOU WIN!')
    {
        resultDisplay.classList.add('greenText')
        ++playerScore
    }
    else if(result==='YOU LOSE'){
        resultDisplay.classList.add('redText')
        ++computerscore
    }

    playerScoreDisplay.textContent = `${playerScore}`
    computerScoreDisplay.textContent = `${computerscore}`
   
}