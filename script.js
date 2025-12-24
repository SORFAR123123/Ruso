
// Variables globales
let currentDeck = null;
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedDeckId = null;

// Elementos del DOM
const deckSelection = document.getElementById('deckSelection');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const deckGrid = document.getElementById('deckGrid');
const currentDeckName = document.getElementById('currentDeckName');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const russianCharacter = document.getElementById('russianCharacter');
const characterName = document.getElementById('characterName');
const pronunciation = document.getElementById('pronunciation');
const example = document.getElementById('example');
const answerInfo = document.getElementById('answerInfo');
const optionsGrid = document.getElementById('optionsGrid');
const feedback = document.getElementById('feedback');
const feedbackContent = document.getElementById('feedbackContent');
const nextButton = document.getElementById('nextButton');
const backToDecks = document.getElementById('backToDecks');
const restartQuiz = document.getElementById('restartQuiz');
const finalScore = document.getElementById('finalScore');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const resultDeckName = document.getElementById('resultDeckName');
const playAgain = document.getElementById('playAgain');
const tryOtherDeck = document.getElementById('tryOtherDeck');

// Iconos para cada mazo
const deckIcons = {
    1: 'fas fa-volume-up',        // Vocales
    2: 'fas fa-font',            // Consonantes A-J
    3: 'fas fa-text-height',     // Consonantes P-Shch
    4: 'fas fa-star'             // Signos y palabras
};

// Inicialización
function init() {
    loadDecks();
    setupEventListeners();
}

// Cargar los mazos disponibles
function loadDecks() {
    const totalDecks = contarMazosRusoDisponibles();
    deckGrid.innerHTML = '';
    
    for (let i = 1; i <= totalDecks; i++) {
        const deckName = obtenerNombreMazoRuso(i);
        const deckCard = document.createElement('div');
        deckCard.className = 'deck-card';
        deckCard.dataset.deckId = i;
        
        deckCard.innerHTML = `
            <i class="${deckIcons[i] || 'fas fa-question'}"></i>
            <div class="deck-title">${deckName}</div>
            <div class="deck-count">10 preguntas</div>
        `;
        
        deckCard.addEventListener('click', () => startDeck(i));
        deckGrid.appendChild(deckCard);
    }
}

// Configurar event listeners
function setupEventListeners() {
    backToDecks.addEventListener('click', showDeckSelection);
    restartQuiz.addEventListener('click', restartCurrentDeck);
    playAgain.addEventListener('click', restartCurrentDeck);
    tryOtherDeck.addEventListener('click', showDeckSelection);
    nextButton.addEventListener('click', nextQuestion);
}

// Empezar un mazo
function startDeck(deckId) {
    selectedDeckId = deckId;
    currentDeck = obtenerLetrasRuso(deckId);
    currentQuestionIndex = 0;
    score = 0;
    questions = [...currentDeck]; // Copia del array para no modificar el original
    
    // Mezclar las preguntas
    shuffleArray(questions);
    
    showQuiz();
    loadQuestion();
}

// Mostrar el quiz
function showQuiz() {
    deckSelection.style.display = 'none';
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    
    currentDeckName.textContent = obtenerNombreMazoRuso(selectedDeckId);
    feedbackContent.textContent = '';
    feedbackContent.className = 'feedback-content';
    nextButton.style.display = 'none';
    answerInfo.style.display = 'none'; // Ocultar información inicialmente
}

// Mostrar selección de mazos
function showDeckSelection() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    deckSelection.style.display = 'block';
}

// Mostrar resultados
function showResults() {
    quizContainer.style.display = 'none';
    deckSelection.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    const totalQuestions = questions.length;
    const incorrect = totalQuestions - score;
    
    finalScore.textContent = `${score}/${totalQuestions}`;
    correctCount.textContent = score;
    incorrectCount.textContent = incorrect;
    resultDeckName.textContent = obtenerNombreMazoRuso(selectedDeckId);
}

// Cargar pregunta actual
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    // Actualizar interfaz
    russianCharacter.textContent = question.ruso;
    characterName.textContent = question.nombre;
    pronunciation.textContent = question.pronunciacion;
    example.textContent = question.ejemplo;
    
    // Ocultar información de respuesta
    answerInfo.style.display = 'none';
    
    // Actualizar progreso
    progressText.textContent = `Pregunta ${currentQuestionIndex + 1}/${questions.length}`;
    const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progressPercentage}%`;
    
    // Limpiar opciones anteriores
    optionsGrid.innerHTML = '';
    feedbackContent.textContent = '';
    feedbackContent.className = 'feedback-content';
    nextButton.style.display = 'none';
    
    // Crear botones de opciones en grid 2x2
    question.opciones.forEach((opcion, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option';
        optionButton.textContent = opcion;
        optionButton.dataset.optionIndex = index;
        
        optionButton.addEventListener('click', () => checkAnswer(index, question));
        optionsGrid.appendChild(optionButton);
    });
}

// Verificar respuesta
function checkAnswer(selectedIndex, question) {
    const options = document.querySelectorAll('.option');
    const selectedOption = options[selectedIndex];
    const correctIndex = question.respuesta;
    const correctOption = options[correctIndex];
    
    // Deshabilitar todos los botones
    options.forEach(option => {
        option.classList.add('disabled');
        option.disabled = true;
    });
    
    // Marcar respuesta correcta e incorrecta
    selectedOption.classList.add(selectedIndex === correctIndex ? 'correct' : 'incorrect');
    
    if (selectedIndex !== correctIndex) {
        correctOption.classList.add('correct');
    }
    
    // Mostrar información de la respuesta
    answerInfo.style.display = 'block';
    
    // Mostrar feedback
    if (selectedIndex === correctIndex) {
        score++;
        feedbackContent.textContent = '¡Correcto! 👏 Excelente trabajo.';
        feedbackContent.className = 'feedback-content correct';
        
        // Avanzar automáticamente después de 1.5 segundos si es correcta
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                loadQuestion();
            } else {
                // Última pregunta contestada correctamente
                setTimeout(() => {
                    showResults();
                }, 800);
            }
        }, 1500);
    } else {
        feedbackContent.textContent = `Incorrecto. La respuesta correcta es: "${question.opciones[correctIndex]}"`;
        feedbackContent.className = 'feedback-content incorrect';
        nextButton.style.display = 'inline-flex';
    }
}

// Siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Reiniciar el mazo actual
function restartCurrentDeck() {
    startDeck(selectedDeckId);
}

// Mezclar array (para randomizar preguntas)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Iniciar la aplicación cuando se cargue la página
document.addEventListener('DOMContentLoaded', init);
