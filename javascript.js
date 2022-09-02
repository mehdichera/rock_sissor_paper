let ps=0
let cs=0
let container = document.querySelector('.container4');
let comscore = document.querySelector('#comscore');
let plscore = document.querySelector('#plscore');
let div = document.createElement('div');
div.classList.add('score');
let div2 = document.createElement('div');
div2.classList.add('result');
let buttons = document.querySelectorAll('button'); 
buttons.forEach(button => {
  button.addEventListener('click',round)
});
container.appendChild(div);
container.appendChild(div2);
function computerplay (){
  let y = Math.random();
   if (y>=0 && y<=0.333){
     return "rock";
    }
   else if (y>0.333 && y<=0.666){
     return "scissors";
    }
    else {
     return "paper";
   } 
 };
function playround (pls,coms) {
   if( coms=="rock" && pls == "scissors"|| coms == "scissors" && pls == "paper"|| coms =="paper" && pls == "rock"){
      return "lose";
     }
   else if( coms=="rock" && pls == "rock"|| coms == "scissors" && pls == "scissors"|| coms =="paper" && pls == "paper"){
      return "draw";
     }
   else {
       return "win";
     }
 };
 function gameResult() {  
  if (cs == 5){
    div2.textContent ="the winner is computer";
    cs = 0;
    ps = 0;
    comscore.textContent = cs;
    plscore.textContent = cs;
  }
  else if (ps == 5){
    div2.textContent ="the winner is player";
    cs = 0;
    ps = 0;
    comscore.textContent = cs;
    plscore.textContent = cs;
  }
  else{
    div2.textContent ="";
  }
 }
 function round () {
  let plSelection = this.getAttribute('id'); 
  let comSelection = computerplay ();
  let result = (playround(plSelection,comSelection));
  if (result == "win"){
    ps++;
    div.textContent = `${plSelection} beats ${comSelection}`;
    plscore.textContent = ps;
   }
  else if(result == "lose"){
    cs++;  
    div.textContent = `${comSelection} beats ${plSelection}`;
    comscore.textContent = cs;
  }
  else{
    div.textContent = "it is a tie";
  }
  gameResult();
 }
