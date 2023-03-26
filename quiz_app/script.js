const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "15",
    c: "20",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programming languague in 2019?",
    a: "java",
    b: "C",
    c: "Python",
    d: "javaScript",
    correct: "d",
  },
  {
    question: "who is the president of US?",
    a: "Florin pop",
    b: "Donald Trump",
    c: "ivan saldano",
    d: "Mihai andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading style sheet",
    c: "Jason object notation",
    d: "helicopters terminals motorboats lamborginis",
    correct: "a",
  },
  {
    question: "What year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuiz++;
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach((answerEL) => {
    if (answerEls.checked) {
      return answerEL.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      alert("You finished!");
    }
  }
});
