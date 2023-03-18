
var player = document.getElementById("player");
var computer = document.getElementById("computer");
var pScore = 0;
var cScore = 0;

//Add Event Listener
var playerButton = player.getElementsByTagName("button")
player.addEventListener("click", playerPlay)

function computerPlay()
{
    let r = (Math.floor(Math.random() * 100)) % 3
    //Just Styling
    let computerButton = Array.from(computer.getElementsByTagName("button"))
    computerButton.forEach(c => {c.classList.remove("selected")})

    if(r == 0)
    {
        computerButton[0].classList.add("selected")
        return "rock"
    }
    else if(r == 1)
    {
        computerButton[1].classList.add("selected")
        return "paper"
    }
    else
    {
        computerButton[2].classList.add("selected")
        return "scissors"
    }
}
function playerPlay(elem)
{
    let p = elem.target.textContent;
    let result = document.getElementById("result").textContent = playRound(p.toLowerCase(),computerPlay())
    check();//Check for winning condition
}
function playRound(playerSelection, computerSelection)
{
    computerSelection = computerPlay()

    //Win conditions
    if(playerSelection == "rock" && computerSelection == "scissors")
    {   score("player");    return "You win, " + playerSelection + " beats " + computerSelection}
    else if(playerSelection == "paper" && computerSelection == "rock")
    {   score("player");    return "You win, " + playerSelection + " beats " + computerSelection}
    else if(playerSelection == "scissors" && computerSelection == "paper")
    {   score("player");    return "You win, " + playerSelection + " beats " + computerSelection}
    //Draw
    else if(playerSelection == computerSelection)
    {                       return "Draw"}
    //You Lose
    else
    {   score("computer");  return "You lose, " + computerSelection + " beats " + playerSelection}

}
function score(s)
{
    if(s=="player")
    {
        pScore++
        player.getElementsByClassName("score")[0].textContent="Score: " + pScore
    }
    else if(s == "computer")
    {
        cScore++
        computer.getElementsByClassName("score")[0].textContent="Score: " + cScore
    }
}
function check()
{
    if(pScore == 5)
    {
        document.getElementById("result").textContent = "YOU WIN! Now go home"
        document.getElementsByClassName("container")[0].style.pointerEvents = "none"
        document.getElementsByClassName("container")[0].classList.add("win")
    }
    else if(cScore == 5)
    {
        document.getElementById("result").textContent = "YOU LOSE! BAD LUCK"
        document.getElementsByClassName("container")[0].style.pointerEvents = "none"
        document.getElementsByClassName("container")[0].classList.add("lose")
    }
}


