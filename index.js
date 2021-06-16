const readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question("Hi, What is your name? \n");
console.log(chalk.bgBlue(`Welcome ${userName.toUpperCase()} to "How well you know INDIA" Quiz`));

var score=0;

var questionList = [{
  question: "Q1 What is the capital of India? \n a) Mumbai \n b) New Delhi \n c) Chennai \n d) Kolkata\n",
  answer: "b",
  correctAns: "New Delhi is the capital of India."
},
{
  question: "Q2 What Indian city is the capital of two states? \n a) Mumbai \n b) New Delhi \n c) Chennai \n d) Chandigarh\n",
  answer: "d",
  correctAns: "Chandigarh is the capital of the states Haryana and Punjab"
},
{
  question: "Q3 How many countries border India \n a) 6 \n b) 14 \n c) 2 \n d) 9\n",
  answer: "a",
  correctAns: "India shares borders with 6 countries. It shares borders with China, Bhutan, Nepal, and Pakistan in the north or north-west, and with Bangladesh and Myanmar in the east. "
},
{
  question: "Q4 What is the capital of Gujarat? \n a) Mumbai \n b) New Delhi \n c) Lucknow \n d) Ghandinagar\n",
  answer: "d",
  correctAns: "Ghandinagar is the capital of Gujarat"
},
{
  question: "Q5 Delhi is located along what river? \n a) The Brahmaputra \n b) The Yamuna \n c) The Nile \n d) The Ganges\n",
  answer: "b",
  correctAns: "The Yamuna then passes Delhi, where it feeds the Agra Canal. South of Delhi."
},
{
  question: "Q6 What, approximately, is the area of India, in square kilometers? \n a) 2000K \n b) 3000K \n c) 4000K \n d) 1500K\n",
  answer: "b",
  correctAns: "India's geographical area amounted to about 3.3 million square kilometers."
},
{
  question: "Q7 When is India’s Independence Day? \n a) July 14 \n b) August 15 \n c) October 31 \n d) January 1\n",
  answer: "b",
  correctAns: "Independence Day is celebrated annually on 15 August as a national holiday in India commemorating the nation's independence from the United Kingdom on 15 August 1947."
},
{
  question: "Q8 What is India’s smallest state by area? \n a) Goa \n b) Kerala \n c) Chennai \n d) Puducherry\n",
  answer: "a",
  correctAns: "Goa is the smallest state by area."
},
{
  question: "Q9 Which of these bodies of water does not border India? \n a) Indian Ocean \n b) Bay of Bengal \n c) Red Sea \n d) Arabian Sea\n",
  answer: "c",
  correctAns: "Red Sea does not border India."
},
{
  question: "Q10 Which of these is not a river of India? \n a) Yamuna \n b) Brahmaputra \n c) Ganges \n d) Mekong\n",
  answer: "d",
  correctAns: "Mekong is not a river of India.It is a trans-boundary river in East Asia and Southeast Asia."
}
];

function play( ques, ans, correctAns) {
  var userAns = readlineSync.question(ques);

  if(userAns.toUpperCase() === ans.toUpperCase()){
    console.log(chalk.green("Yes, That's correct. "));
    score++;
  }
  else {
    console.log(chalk.red("No, That's wromg."));
    console.log(chalk.green(correctAns));
    score--;
  }

  console.log("----------------------------");
  console.log(chalk.bgMagenta("Your current Score is: "+ score));
  console.log("----------------------------\n");
}

for(var i=0; i<questionList.length; i++) {
  var currentQues = questionList[i];
  play(currentQues.question , currentQues.answer , currentQues.correctAns);
}


console.log(chalk.yellow(userName.toUpperCase()) + " ,Your final score is : " + chalk.green(score) + " \n\n");

var topScorers = [
	{	name : "vivek",
		score: 9
	},
	{	name : "puneet",
		score: 8
	},
	{	name : "vipul",
		score: 8
	}
];

function hasUserBeatHighScore(){
		for (var i=0; i<topScorers.length; i++){
      var currentScorer = topScorers[i];
			if(score > currentScorer.score){
				console.log(chalk.cyan("Congratulations! you have beat one of the top score Please send me a screenshot and I wil update your name in the top scorers.\n"));
				break;
			}
		}
}
hasUserBeatHighScore();

function printTopScores(topScorers){
		for (var i=0; i<topScorers.length; i++){
      var currentScorer = topScorers[i];
		console.log(currentScorer.name + " : " + currentScorer.score);
	}
}

console.log(chalk.black.bgCyan.bold("\nThe top scorers are :"));
printTopScores(topScorers);

console.log(chalk.bgYellow("\nShare this quiz to your friends."));