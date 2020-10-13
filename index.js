// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter2 uses global scope rather than functional scope. Meaning it referencs things outside the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *function 1 uses closure becuase It has data that it uses within the function rather than just outside of the function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *counter 2 would be better if you need to be able to access the let count = 0 variable, it would be better used within a function. 1 would be easier to reuse on other things
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

//returns number of points that team score in an inning
//It should be a whole number -- Math.round?
//Math.floor(Math.random()*3);? try it out


function inning(){
  return Math.floor(Math.random * 3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

- function that recieves a inning, and number of innings
- number is how many times the function ran
- innings or func is the score
- returns score in the object score

*/
function finalScore(func,num){
  let home= 0;
  let away= 0;
  for (let i = 0; i < num; i++){
   home += func();
   away += func();
  }
return {
  Home: home,
  Away: away,
};

}
console.log(finalScore(inning, 9));



// const score ={
//   home: 0,
//   away: 0,
// };

// function finalScore(func,num){
//   for (let i = 0; i < num; i++){
//    score.home +=func;
//    score.away +=func;
//   }
// return score;
// }
// console.log(finalScore(inning, 9));

// function finalScore(num, func){

//   /*Code Here*/
//   const home = {
//     home: 0,
//     away: 0,
//   };
  
//   for( let i = 0; i <num; i++)
//   if (i< num ){
//     console.log(func)
//   }

// }



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
//see below for better option
function inning(){
  return Math.floor(Math.random() *3);
}

function finalScore(func,num){
  let home= 0;
  let away= 0;
  for (let i = 0; i < num; i++){
   home += func();
   away += func();
  }
return {
  Home: home,
  Away: away,
};
}


// function scoreboard(inns, finalScore) {
//   const score = finalScore;
//   for (let i = 0; i < score; i++){                  //the purpose of the for loop is to go over things. 
//     let var1 = `Inning${i}: ${away} - ${home}`;     //[ i] is only for arrays
    
//     getInningScore = 
//     console.log (`final Score: `)//away total and home total seperate?
//   }

//   return getInningScore;
//  }
//  console.log(scoreboard());

//This one is also valid and better.

 function scoreboard(func, num) {
  let gameScores = {
    "Home": 0,
    "Away": 0,
  }
  for (let i = 0; i < num; i++) {
    gameScores.Home = gameScores.Home + func();
    gameScores.Away = gameScores.Away + func();
    if (i===0){
      console.log(`${i+1}st inning: ${gameScores.Home}-${gameScores.Away}`);
    }else if(i===1){
      console.log(`${i+1}nd inning: ${gameScores.Home}-${gameScores.Away}`);
    }else if(i===2){
      console.log(`${i+1}rd inning: ${gameScores.Home}-${gameScores.Away}`);
    }else{
      console.log(`${i+1}th inning: ${gameScores.Home}-${gameScores.Away}`);
    }
  }
  console.log(`Final Score : ${gameScores.Home} - ${gameScores.Away}`)
}
console.log(scoreboard(inning, 4)) 


//add score to final score for as many times as it loops


