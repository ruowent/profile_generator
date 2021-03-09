const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// answer object or array

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];
const answers = [];
let i = 0;


const printAnswers = () => {
  console.log("------------ Output ------------");
  let idx;
  for (idx=0; idx<answers.length; idx++) {
    console.log(`${questions[idx]}\n${answers[idx]}`);
  }
};

const nextQuestionHandler = (answer) => {
  //console.log(`Answer ${i}: ${answer}`);
  answers.push(answer);

  if(i < questions.length - 1) {
    i++;
    rl.question(questions[i], nextQuestionHandler);
  } else {
    rl.close();
    printAnswers();
  }
};

rl.question(questions[i],nextQuestionHandler);
