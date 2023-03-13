const questions = [
    {
      question: "Quel est le meilleur langage de programmation en 2022 ?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },
    {
      question: "Qui a inventé le World Wide Web ?",
      a: "Tim Berners-Lee",
      b: "Bill Gates",
      c: "Steve Jobs",
      d: "Mark Zuckerberg",
      correct: "a"
    },
    {
      question: "Quel est le langage de programmation le plus populaire en 2022 ?",
      a: "Java",
      b: "Python",
      c: "JavaScript",
      d: "C#",
      correct: "c"
    },
    {
      question: "Quel est le langage de programmation le plus adapté pour le développement web ?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },
    {
      question: " Que signifie Js ?",
      a: "Java",
      b: "Java Script",
      c: "Script",
      d: "Jscript",
      correct: "b"
    }
  ];
  
  const questionEl = document.getElementById("question");
  const aText = document.getElementById("a_text");
  const bText = document.getElementById("b_text");
  const cText = document.getElementById("c_text");
  const dText = document.getElementById("d_text");
  const answerEls = document.getElementsByName("answer");
  const nextBtn = document.getElementById("next-btn");
  const result = document.getElementById("result");
  const scoreText = document.getElementById("score");
  const totalText = document.getElementById("total");
  
  let currentQuestion = 0;
  let score = 0;
  
  loadQuestion();
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
  
    questionEl.innerText = currentQuestionData.question;
    aText.innerText = currentQuestionData.a;
    bText.innerText = currentQuestionData.b;
    cText.innerText = currentQuestionData.c;
    dText.innerText = currentQuestionData.d;
  }
  
  function getSelected() {
    let answer = undefined;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.value;
      }
    });
  
    return answer;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  nextBtn.addEventListener("click", () => {
    const answer = getSelected();
  
    if (answer) {
      if (answer === questions[currentQuestion].correct) {
        score++;
      }
  
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        loadQuestion();
        deselectAnswers();
      } else {
        result.classList.remove("hidden");
        scoreText.innerText = score;
        totalText.innerText = questions.length;
        nextBtn.disabled = true;
      }
    }
  });
  
  answerEls.forEach((answerEl) => {
    answerEl.addEventListener("click", () => {
      nextBtn.disabled = false;
    });
  });
  