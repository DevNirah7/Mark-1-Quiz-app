var readlineSync = require("readline-sync");

//variable initialisation
var score=0


//welcome
function welcome()
{
var name = readlineSync.question("What is your name?")
console.log("Welcome to my quiz",name,"!!!")
}

var list = [{
  question:"Where does Harin live in?",
  answer:"Chennai"
  
},{
  question:"What is Harin's favourite food?",
  answer:"Briyani"
},{
  question:"What is Harin's favourtie animal?",
  answer:"Tiger"
},{
  question:"What is Harin's favourite football club?",
  answer:"Manchester United"
},{
  question:"What is Harins favourite beverage?",
  answer:"Coffee"
}]



function quiz(question,answer)

{
  var ans= readlineSync.question(question)
  if(ans.toUpperCase()==answer.toUpperCase())
  {
    console.log("Correct!")
    score=score+1
    
  }
  else
  {
    console.log("Wrong!")
  } 

  console.log("Current score: ", score);
  console.log("-------------")
}


function game()
{
 for(var i=0;i<list.length;i++)
 {
 var tempQues=list[i]
 quiz(tempQues.question,tempQues.answer)
 }
}

var highScores = [
  {
    name: "Sancho",
    score: 4,
  },

  {
    name: "Rashford",
    score: 3,
  },
]

function showScores() 

{
  console.log("Your total score is : ", score);

  if(score==5){
    console.log("Congrats you got the highest score !!!!!!!!")
  }

  console.log("Check out the high scores till now:");

  const x = highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome()
game()
showScores()

