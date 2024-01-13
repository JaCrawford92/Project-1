const easyQuestions = [
    {question: "What monster turns you to stone if you look at it?",
    options: ["Medusa", "Kraken", 'Mermaids', 'Chimera'],
    answer: "Medusa"},

    {question: "What Greek god used a lightning bolt?",
    options: ["Odin", 'Hades', 'Zeus', 'Thor'],
    answer: "Zeus"},

    {question: "What Greek god rules the Seas?",
    options: ["Persephone", "Hades", 'Poseidon', 'Hera'],
    answer: "Poseidon"},

    {question: "Who is the ruler of Olympus?",
    options: ["Hades", "Poseidon", 'Hera', 'Zeus'],
    answer: "Zeus"},

    {question: "Where do the Greek gods reside?",
    options: ["Greece", "Olympus", 'Alantis', 'Vahalla'],
    answer: "Olympus"},

    {question: "Which creature in Greek mythology was half-man and half-bull?",
    options: ["Medusa", "Centaur", 'Mintaur', 'Pegasus'],
    answer: "Mintaur"},

    {question: "Who was the ancient Greek God of the Underworld and God of the Dead?",
    options: ["Hades", "Anubis", 'Hela', 'Cerberus'],
    answer: "Hades"},

    {question: "Which son of Zeus who killed Medusa?",
    options: ["Perseus", "Hercules", 'Athena', 'Artemis'],
    answer: "Hercules"},

    {question: "Who is the wife of Zeus?",
    options: ["Persephone", "Aphrodite", 'Hera', 'Medusa'],
    answer: "Hera"},

    {question: "In Greek mythology Medusa’s hair was made of what?",
    options: ["Snakes", "Worms", 'Centipedes', 'Lizards'],
    answer: "Snakes"},

    {question: "Monsters that lured sailors into the sea?",
    options: ["Mermaids", "Sirens", 'Merfolks', 'Chimera'],
    answer: "Sirens"},

    {question: "What is a centaur?",
    options: ["Half-man, Half-snake", "Half-man, Half-goat", 'Half-man, Half-horse', 'Half-man, Half-lion'],
    answer: "Half-man, Half-horse"},

    {question: "Icurus, flew to close to what?",
    options: ["Moon", "Uranus", 'Sun', 'Venus'],
    answer: "Sun"},

    {question: "Hercules is the son of what god?",
    options: ["Apollo", "Zeus", 'Hades', 'Posidon'],
    answer: "Zeus"},

    {question: "Who's the goddess of love?",
    options: ["Hera", "Artemis", 'Athena', 'Aphrodite'],
    answer: "Aphrodite"},
]

let currentQuestionIndex = 0;
let currentQuestion = easyQuestions[currentQuestionIndex];

function startGame() {
    document.getElementById("startBtn").style.display = "none";
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(optionIndex) {
    const selectedOption = currentQuestion.options[optionIndex];
    const correctAnswer = currentQuestion.answer;

    if (selectedOption === correctAnswer) {
        alert("Correct! Well done!");
    } else {
        alert(`Wrong! The correct answer is: ${correctAnswer}`);
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < easyQuestions.length) {
        currentQuestion = easyQuestions[currentQuestionIndex];
        loadQuestion();
    } else {
        alert("Congratulations! You've completed the trivia game.");
       
    }
}


loadQuestion();


// const mythQuestions = {
//     easy: [
//     {question: "What monster turns you to stone if you look at it?",
//     options: ["Medusa", "Kraken", 'Mermaids', 'Chimera'],
//     answer: "Medusa"},

//     {question: "What Greek god used a lightning bolt?",
//     options: ["Odin", 'Hades', 'Zeus', 'Thor'],
//     answer: "Zeus"},

//     {question: "What Greek god rules the Seas?",
//     options: ["Persephone", "Hades", 'Poseidon', 'Hera'],
//     answer: "Posidon"},

//     {question: "Who is the ruler of Olympus?",
//     options: ["Hades", "Poseidon", 'Hera', 'Zeus'],
//     answer: "Zeus"},

//     {question: "Where do the Greek gods reside?",
//     options: ["Greece", "Olympus", 'Alantis', 'Vahalla'],
//     answer: "Olympus"},

//     {question: "Which creature in Greek mythology was half-man and half-bull?",
//     options: ["Medusa", "Centaur", 'Mintaur', 'Pegasus'],
//     answer: "Mintaur"},

//     {question: "Who was the ancient Greek God of the Underworld and God of the Dead?",
//     options: ["Hades", "Anubis", 'Hela', 'Cerberus'],
//     answer: "Hades"},

//     {question: "Which son of Zeus who killed Medusa?",
//     options: ["Perseus", "Hercules", 'Athena', 'Artemis'],
//     answer: "Hercules"},

//     {question: "Who is the wife of Zeus?",
//     options: ["Persephone", "Aphrodite", 'Hera', 'Medusa'],
//     answer: "Hera"},

//     {question: "In Greek mythology Medusa’s hair was made of what?",
//     options: ["Snakes", "Worms", 'Centipedes', 'Lizards'],
//     answer: "Snakes"},

//     {question: "Monsters that lured sailors into the sea?",
//     options: ["Mermaids", "Sirens", 'Merfolks', 'Chimera'],
//     answer: "Sirens"},

//     {question: "What is a centaur?",
//     options: ["Half-man, Half-snake", "Half-man, Half-goat", 'Half-man, Half-horse', 'Half-man, Half-lion'],
//     answer: "Half-man, Half-horse"},

//     {question: "Icurus, flew to close to what?",
//     options: ["Moon", "Uranus", 'Sun', 'Venus'],
//     answer: "Sun"},

//     {question: "Hercules is the son of what god?",
//     options: ["Apollo", "Zeus", 'Hades', 'Posidon'],
//     answer: "Zeus"},

//     {question: "Who's the goddess of love?",
//     options: ["Hera", "Artemis", 'Athena', 'Aphrodite'],
//     answer: "Aphrodite"},
//     ]
// };

// const mediumQuestions = [
//     {question: "If you cut off 1 head, 2 grow back. What am I?",
//     options: ['Chimera', 'Hydra', 'Chiron', 'Cerberus'],
//     answer: "Hydra"},

//     {question: " Who is the father of Zeus, Hades and Poseidon?",
//     options: ['Uranus', 'Cronos', 'Rhea', 'Titan'],
//     answer: "Cronos"},

//     {question: "Who is Artemis twin?",
//     options: ['Hermes', 'Athena', 'Apollo', 'Aphrodite'],
//     answer: "Apollo"},

//     {question: "How many labors did Hercules have to take? 12",
//     options: ['15', '11', '12', '13'],
//     answer: "12"},

//     {question: "What was left in Pandora’s box after she released misery and evil?",
//     options: ['Love', 'Miracle', 'Hope', 'Care'],
//     answer: "Hope"},

//     {question: " Who is the ruler of all Monsters?",
//     options: ['Chimera', 'Echidna', 'Chiron', 'Lilith'],
//     answer: "Echidna"},

//     {question: "The Parthenon was built as a temple for whom?",
//     options: ['Ares', 'Athena', 'Artemis', 'Apollo'],
//     answer: "Athena"},

//     {question: "Who was the Ancient Greek Goddess of the Dawn?",
//     options: ['Helios', 'Nyx', 'Eos', 'Eros'],
//     answer: "Eos"},

//     {question: "Eros is the god of what?",
//     options: ['Love & Desire', 'Love & Fertility', 'Love & Hate', 'Love & Chaos'],
//     answer: "Love & Desire"},

//     {question: "Persephone is the goddess of what?",
//     options: ['Spring', 'Summer', 'Winter', 'Fall'],
//     answer: "Spring"},

//     {question: "How many Titans were there?",
//     options: ['15', '11', '12', '13'],
//     answer: "Hydra"},

//     {question: "Who killed their family in a fit of maddness?",
//     options: ['Hercules', 'Zeus', 'Troy', 'Helen'],
//     answer: "Hercules"},

//     {question: "Who's the mother of Zeus, Hades, Poseidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"}
// ];

// const hardQuestions = [
//     {question: "The Golden Apple of Discord incited what war?",
//     options: ['Peloponnesian War', 'Persian War', 'Trojan War', 'Battles of Marathon'],
//     answer: "Rhea"},

//     {question: "Who fired the arrow that hit Achilles in the heel?",
//     options: ['Thesus', 'Troy', 'Helen', 'Paris'],
//     answer: "Paris"},

//     {question: "Which legendary beauty was the daughter of Zeus and Leda?",
//     options: ['Helen of Troy', 'Pandora', 'Circe', 'Penelope'],
//     answer: "Helen of Troy"},

//     {question: "What is the name the horse riden by Achilles?",
//     options: ['Athos', 'Xanthus', 'Arion', 'Cerberus'],
//     answer: "Xanthus"},

//     {question: "Which mythical Greek hunter is associated with a constellation named after him?",
//     options: ['Scorpius', 'Lepus', 'Arion', 'Orion'],
//     answer: "Orion"},

//     {question: "After which mythological character was the drug morphine named?",
//     options: ['Moros', 'Methe', 'Morpheus', 'Mnemosyne'],
//     answer: "Morpheus"},

//     {question: "What temple is dedicated to all the gods?",
//     options: ['Pantheon', 'Paestum', 'Corinth', 'Erechtheum'],
//     answer: "Pantheon"},

//     {question: "The War of the Titans lasted how many years?",
//     options: ['11', '10', '12', '9'],
//     answer: "10"},

//     {question: "In greek legend, who turned men into swine?",
//     options: ['Circe', 'Cleta', 'Clio', 'Chloris'],
//     answer: "Circe"},

//     {question: "What was sought by Jason and the Argonauts",
//     options: ['Pandora Box', 'The Golden Apple of Discord', 'The Golden Fleece', 'Poseidon Trident'],
//     answer: "The Golden Fleece"},

//     {question: "How many Primordal gods are there?",
//     options: ['14', '13', '12', '11'],
//     answer: "13"}
// ];

// const expertQuestions = [
//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"},

//     {question: "Who's the mother of Zeus, Hades, Posidon?",
//     options: ['Gaia', 'Rhea', 'Oceanus', 'Mnemosyne'],
//     answer: "Rhea"}
// ];

// let currentQuestionIndex = 0;
// let currentDiffcultyLevel = "easy";

// function startGame(difficutyLevel) {
//     currentDiffcultyLevel = difficutyLevel;

//     const startBtn = document.getElementById("startBtn")
//     const nextBtn = document.getElementById("nextBtn");
//     startBtn.style.display = "none";
//     nextBtn.style.display = "inline";

//     displayQuestion();

// }

// function displayQuestion() {
//     const questionElement = document.getElementById("question");
//     const optionsElement = document.getElementById("options");

//     questionElement.textContent = mythQuestions[currentDiffcultyLevel][currentQuestionIndex].question;

//     optionsElement.innerHTML = "";
//     mythQuestions[currentDiffcultyLevel][currentQuestionIndex].options.forEacb((option, index) => {
//         const button = document.createElement("button");
//         button.textContent = option;
//         button.addEventListener("click", () => checkAnswer(index));
//         optionsElement.appendChild(button);
//     })  
// };




// // const startBtn = document.getElementById('startBtn');
// // const difficultyButtons = document.querySelectorAll('.difficultyBtn');
// // const questionContainer = document.getElementById('questionContainer');
// // const questionDisplay = document.getElementById('question');
// // const optionsContainer = document.getElementById('options');
// // const nextBtn = document.getElementById('nextBtn');
// // const submitButton = document.getElementById('submit')

// function onButtonClick() {
//     // alert('Button clicked')
//     const button = document.querySelector('startBtn');
//     button.addEventListener('click', onButtonClick); 
// }

// document.querySelectorAll('allBtn').forEach(a=>a.addEventListener('click',function(){
//     this.parentNode.removeChild(this)
//   }));

// // let difficulty;
// // let score = 0;

// document.getElementById("startBtn").addEventListener("click", function() {
//     document.getElementById("difficultySelection").style.display = "block";
// });

// document.getElementsByClassName("difficultySelection").addEventListener('click', function() {
//     document.getElementById("difficultyBtn").style.display = "block";
// });

// function buildQuiz(){
//     const output = [];

//     easyQuestions.forEach(currentQuestion, questionNumber) => {

//     }
// }

// function showQuestions (){
//     difficulty = difficultyButtons.values;
// }

// function showResults (){

// }

// buildQuiz()

// submitButton.addEventListener('click', showResults)

// function startGame () {

// }

// function selectionOption(){

// }

// function nextQuestion (){

// }

// function checkAnswer () {

// }

// function showResults (){

// }

// function easyQ (){
//     for (let i = 0; i < easyQuestions.length; i++) {
        
//     }
// }







// const button = document.querySelector('button');
// button.addEventListener('click', onButtonClick);

// const combineArray = [...easyQuestions, ...mediumQuestions, ...hardQuestions, ...expertQuestions]
// const startBtn = document.getElementById('startBtn');
// const difficultyButtons = document.querySelectorAll('.difficultyBtn');
// const questionContainer = document.getElementById('questionContainer');
// const questionDisplay = document.getElementById('question');
// const optionsContainer = document.getElementById('options');
// const nextBtn = document.getElementById('nextBtn');


// let questionChosen = []
// let difficultySelected = null;

// let chosenQuestions = [];
// let currentQuestionIndex = -1;
// let selectedDifficulty = null;
// let questions = 0;

// document.getElementById("startBtn").addEventListener("click", function() {
//     document.getElementById("difficultySelection").style.display = "block";
// });




// startBtn.addEventListener('click', (difficultyButtons) => {
//     document.getElementById('difficultySelection').style.display = 'block';
// });

// function setDifficulty(difficulty) {
//     selectedDifficulty = difficulty;
//     switch (selectedDifficulty) {
//       case 'easy':
//         questions = easyQuestions;
//         break;
//       case 'medium':
//         questions = mediumQuestions;
//         break;
//       case 'hard':
//         questions = hardQuestions;
//         break;
//       default:
//         break;
//     }
//     startGame();
  

//   function startGame() {
//     currentQuestion = 0;
//     displayQuestions();
//     resultElement.textContent = '';
//     nextBtn.style.display = 'none';
//   }
// }

// // difficultyButtons.forEach(button => {
// //     button.addEventListener('click', () => {
// //         const selectedDifficulty = button.getAttribute('data-difficulty');
// //         if (selectedDifficulty === 'easy') {
// //             chosenQuestions = easyQuestions;
// //         } else if (selectedDifficulty === 'medium') {
// //             chosenQuestions = mediumQuestions;
// //         } else if (selectedDifficulty === 'hard') {
// //             chosenQuestions = hardQuestions;
// //         } else if (selectedDifficulty === 'expert') {
// //             chosenQuestions === expertQuestions;
// //         }
// //         startGame();
// //     });
// // });

// function startGame(){
//     document.getElementById('difficultySelection').style.display = 'none';
//     document.getElementById('questionContainer').style.display = 'block';
//     currentQuestionIndex = Math.floor(Math.random() * chosenQuestions.length);
//     randomAnswers = Math
//     displayQuestion();
// };


