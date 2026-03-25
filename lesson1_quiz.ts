import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: "1. What language are we using to add strong typing to our Node.js and Angular app? ",
    answer: "typescript"
  },
  {
    question: "2. What runtime allows us to run JavaScript outside the browser? ",
    answer: "node"
  },
  {
    question: "3. Before we build a complex web UI, where will we build and test our chat application? ",
    answer: "terminal"
  }
];

let currentQuestion = 0;
let score = 0;

console.log("=== Lesson 1: Foundation Quiz ===\n");

function askQuestion() {
  if (currentQuestion < questions.length) {
    rl.question(questions[currentQuestion].question, (answer) => {
      const normalizedAnswer = answer.trim().toLowerCase();
      const correctAnswer = questions[currentQuestion].answer;
      
      // Allow some flexibility for the last question
      if (normalizedAnswer.includes(correctAnswer) || 
         (correctAnswer === "terminal" && (normalizedAnswer.includes("console") || normalizedAnswer.includes("cli")))) {
        console.log("✅ Correct!\n");
        score++;
      } else {
        console.log(`❌ Incorrect. The expected answer was related to: ${correctAnswer}\n`);
      }
      currentQuestion++;
      askQuestion();
    });
  } else {
    console.log(`=== Quiz Complete ===`);
    console.log(`Your Score: ${score}/${questions.length}`);
    if (score === questions.length) {
      console.log("Congratulations! You are ready for Milestone 2.");
    } else {
      console.log("Review Lesson 1 and try again when you're ready.");
    }
    rl.close();
  }
}

askQuestion();
