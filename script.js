let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let choices=document.querySelectorAll(".rps");
const msg=document.querySelector(".msg");
let playerScorePara=document.querySelector("#playerScr");
let compScorePara=document.querySelector("#computerScr");
let btn=document.querySelector("#btn");
let playerScore=0;
let compScore=0;


const genCompChoice = ()=>{
   const options = ["rock","paper","scissors"];
   const randomIdx =Math.floor(Math.random()*3);
   return options[randomIdx];
};


const drawMatch = () => {
   msg.innerText="Draw,Play again";
   msg.style.backgroundColor="#31355D";
};
const showWinner = (userWin,userChoice,compChoice) => {
   if (userWin) {
      playerScore++;
      playerScorePara.innerText=playerScore;
      msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor="green";
   }
   else {
      compScore++;
      compScorePara.innerText=compScore;
      msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor="red";
   }
};


const playGame =(userChoice)=>{
   const compChoice = genCompChoice();
   
   if (userChoice===compChoice) {
      drawMatch();
   }
   else {
      let userWin=true;
      if (userChoice==="rock") {
         userWin=compChoice==="paper"?false:true;
      } else if (userChoice==="paper") {
         userWin=compChoice==="scissors"?false:true;
      } else {
         userWin=compChoice==="rock"?false:true;
      }
      showWinner(userWin,userChoice,compChoice); 
   }
   
}; 


choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
      const userChoice= choice.getAttribute("id");
      playGame(userChoice);
   });
   
});
btn.addEventListener("click", () => {
   playerScorePara.innerText="0";
   compScorePara.innerText="0";
   playerScore=0;
   compScore=0;
   msg.innerText="Play Your Move";
   msg.style.backgroundColor="#31355D";
});