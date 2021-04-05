const quizDB = [
    {
        question: 'Q1: What is the full form of "XHTML"?',
        a: "Xtensible Markup Language",
        b: "EXtended Markup Language",
        c: "Expandable Hyper Text Markup Language",
        d: "Extensible Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: 'Q2: What is the full form of "CSS"?',
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: 'Q3: What is the full form of "HTTP"?',
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: 'Q4: What is the full form of "EOF"?',
        a: "Experts on Format",
        b: "External File",
        c: "End Of File",
        d: "Endless on Format",
        ans: "ans3"
    },
    {
        question: 'Q5: What is the full form of "DNS"?',
        a: "Digital Noise Receiver",
        b: "Development of Natural Solutions",
        c: "Domain Name System",
        d: "Domain Naming System",
        ans: "ans3"
    },
    {
        question: 'Q6: What is the full form of "MPEG"?',
        a: "Machine Parameter Expert Group",
        b: "Moving Picture Experts Group",
        c: "Modular Presentation Experts Group",
        d: "Mobile Picture Experience Group",
        ans: "ans2"
    },
    {
        question: 'Q7: What is the full form of "OSI"?',
        a: "Organisational Server Interface",
        b: "Open Server Interconnection",
        c: "Operating System Interface",
        d: "Open System Interconnection",
        ans: "ans4"
    },
    {
        question: 'Q8: What is the full form of "JPEG"?',
        a: "Java Programming Expert Group",
        b: "Joint Photographic Experts Group",
        c: "Job Processing External Group",
        d: "Join Project Explorer Graduates",
        ans: "ans2"
    },
    {
        question: 'Q9: What is the full form of "MP3"?',
        a: "Media player 3",
        b: "MPEG-1 or MPEG-2 Audio Layer 3",
        c: "Machine Portable 3",
        d: "Machione Level Project 3",
        ans: "ans2"
    },
    {
        question: 'Q10: What is the full form of "OOPS"?',
        a: "Object Oriented Program and Synopsis",
        b: "Object Oriented Programming System",
        c: "Optional Preliminary System",
        d: "Objective of Preliminary System",
        ans: "ans2"
    }

];
const question = document.querySelector('.question');

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const answers = document.querySelectorAll('.answer');

const loadQuestion = () => {
    // console.log(quizDB[0]);
    // console.log(quizDB[0].question);

    // innerHTML and innerText both are same

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You scored ${score} out of ${quizDB.length} </h3>
            <button class="btn" onclick="location.reload()"> Play Again</button>
        `;

        showScore.classList.remove('showArea');
    }
});
