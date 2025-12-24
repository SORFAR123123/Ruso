// Variables globales para ambos idiomas
let currentLanguage = null; // 'russian' o 'korean'
let currentDeck = null;
let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let selectedDeckId = null;

// Elementos del DOM para selección de idioma
const languageSelection = document.getElementById('languageSelection');
const russianSystem = document.getElementById('russianSystem');
const koreanSystem = document.getElementById('koreanSystem');
const russianCard = document.getElementById('russianCard');
const koreanCard = document.getElementById('koreanCard');
const backFromRussian = document.getElementById('backFromRussian');
const backFromKorean = document.getElementById('backFromKorean');

// Elementos para Ruso
const russianDeckSelection = document.getElementById('russianDeckSelection');
const russianDeckGrid = document.getElementById('russianDeckGrid');
const russianQuizContainer = document.getElementById('russianQuizContainer');
const russianResultsContainer = document.getElementById('russianResultsContainer');
const russianCurrentDeckName = document.getElementById('russianCurrentDeckName');
const russianProgressText = document.getElementById('russianProgressText');
const russianProgressFill = document.getElementById('russianProgressFill');
const russianCharacter = document.getElementById('russianCharacter');
const russianCharacterName = document.getElementById('russianCharacterName');
const russianPronunciation = document.getElementById('russianPronunciation');
const russianExample = document.getElementById('russianExample');
const russianAnswerInfo = document.getElementById('russianAnswerInfo');
const russianOptionsGrid = document.getElementById('russianOptionsGrid');
const russianFeedbackContent = document.getElementById('russianFeedbackContent');
const russianNextButton = document.getElementById('russianNextButton');
const russianBackToDecks = document.getElementById('russianBackToDecks');
const russianRestartQuiz = document.getElementById('russianRestartQuiz');
const russianFinalScore = document.getElementById('russianFinalScore');
const russianCorrectCount = document.getElementById('russianCorrectCount');
const russianIncorrectCount = document.getElementById('russianIncorrectCount');
const russianResultDeckName = document.getElementById('russianResultDeckName');
const russianPlayAgain = document.getElementById('russianPlayAgain');
const russianTryOtherDeck = document.getElementById('russianTryOtherDeck');

// Elementos para Coreano
const koreanDeckSelection = document.getElementById('koreanDeckSelection');
const koreanDeckGrid = document.getElementById('koreanDeckGrid');
const koreanQuizContainer = document.getElementById('koreanQuizContainer');
const koreanResultsContainer = document.getElementById('koreanResultsContainer');
const koreanCurrentDeckName = document.getElementById('koreanCurrentDeckName');
const koreanProgressText = document.getElementById('koreanProgressText');
const koreanProgressFill = document.getElementById('koreanProgressFill');
const koreanCharacter = document.getElementById('koreanCharacter');
const koreanRomanization = document.getElementById('koreanRomanization');
const koreanPronunciation = document.getElementById('koreanPronunciation');
const koreanMeaning = document.getElementById('koreanMeaning');
const koreanAnswerInfo = document.getElementById('koreanAnswerInfo');
const koreanOptionsGrid = document.getElementById('koreanOptionsGrid');
const koreanFeedbackContent = document.getElementById('koreanFeedbackContent');
const koreanNextButton = document.getElementById('koreanNextButton');
const koreanBackToDecks = document.getElementById('koreanBackToDecks');
const koreanRestartQuiz = document.getElementById('koreanRestartQuiz');
const koreanFinalScore = document.getElementById('koreanFinalScore');
const koreanCorrectCount = document.getElementById('koreanCorrectCount');
const koreanIncorrectCount = document.getElementById('koreanIncorrectCount');
const koreanResultDeckName = document.getElementById('koreanResultDeckName');
const koreanPlayAgain = document.getElementById('koreanPlayAgain');
const koreanTryOtherDeck = document.getElementById('koreanTryOtherDeck');

// Iconos para cada mazo
const deckIcons = {
    russian: {
        1: 'fas fa-volume-up',
        2: 'fas fa-font',
        3: 'fas fa-text-height',
        4: 'fas fa-star'
    },
    korean: {
        1: 'fas fa-volume-up',
        2: 'fas fa-font',
        3: 'fas fa-bold',
        4: 'fas fa-language'
    }
};

// Inicialización
function init() {
    loadRussianDecks();
    loadKoreanDecks();
    setupEventListeners();
}

// Cargar mazos rusos
function loadRussianDecks() {
    const totalDecks = contarMazosRusoDisponibles();
    russianDeckGrid.innerHTML = '';
    
    for (let i = 1; i <= totalDecks; i++) {
        const deckName = obtenerNombreMazoRuso(i);
        const deckCard = document.createElement('div');
        deckCard.className = 'deck-card';
        deckCard.dataset.deckId = i;
        
        deckCard.innerHTML = `
            <i class="${deckIcons.russian[i] || 'fas fa-question'}"></i>
            <div class="deck-title">${deckName}</div>
            <div class="deck-count">10 preguntas</div>
        `;
        
        deckCard.addEventListener('click', () => startDeck('russian', i));
        russianDeckGrid.appendChild(deckCard);
    }
}

// Cargar mazos coreanos
function loadKoreanDecks() {
    const totalDecks = contarMazosCoreanoDisponibles();
    koreanDeckGrid.innerHTML = '';
    
    for (let i = 1; i <= totalDecks; i++) {
        const deckName = obtenerNombreMazoCoreano(i);
        const deckCard = document.createElement('div');
        deckCard.className = 'deck-card';
        deckCard.dataset.deckId = i;
        
        deckCard.innerHTML = `
            <i class="${deckIcons.korean[i] || 'fas fa-question'}"></i>
            <div class="deck-title">${deckName}</div>
            <div class="deck-count">10 preguntas</div>
        `;
        
        deckCard.addEventListener('click', () => startDeck('korean', i));
        koreanDeckGrid.appendChild(deckCard);
    }
}

// Configurar event listeners
function setupEventListeners() {
    // Navegación entre idiomas
    russianCard.addEventListener('click', () => showLanguageSystem('russian'));
    koreanCard.addEventListener('click', () => showLanguageSystem('korean'));
    backFromRussian.addEventListener('click', () => showLanguageSelection());
    backFromKorean.addEventListener('click', () => showLanguageSelection());
    
    // Event listeners para Ruso
    russianBackToDecks.addEventListener('click', () => showRussianDecks());
    russianRestartQuiz.addEventListener('click', () => restartCurrentDeck());
    russianPlayAgain.addEventListener('click', () => restartCurrentDeck());
    russianTryOtherDeck.addEventListener('click', () => showRussianDecks());
    russianNextButton.addEventListener('click', nextQuestion);
    
    // Event listeners para Coreano
    koreanBackToDecks.addEventListener('click', () => showKoreanDecks());
    koreanRestartQuiz.addEventListener('click', () => restartCurrentDeck());
    koreanPlayAgain.addEventListener('click', () => restartCurrentDeck());
    koreanTryOtherDeck.addEventListener('click', () => showKoreanDecks());
    koreanNextButton.addEventListener('click', nextQuestion);
}

// Mostrar selección de idioma
function showLanguageSelection() {
    languageSelection.style.display = 'block';
    russianSystem.style.display = 'none';
    koreanSystem.style.display = 'none';
}

// Mostrar sistema de idioma específico
function showLanguageSystem(language) {
    currentLanguage = language;
    languageSelection.style.display = 'none';
    russianSystem.style.display = language === 'russian' ? 'block' : 'none';
    koreanSystem.style.display = language === 'korean' ? 'block' : 'none';
    
    if (language === 'russian') {
        showRussianDecks();
    } else {
        showKoreanDecks();
    }
}

// Mostrar mazos rusos
function showRussianDecks() {
    russianDeckSelection.style.display = 'block';
    russianQuizContainer.style.display = 'none';
    russianResultsContainer.style.display = 'none';
}

// Mostrar mazos coreanos
function showKoreanDecks() {
    koreanDeckSelection.style.display = 'block';
    koreanQuizContainer.style.display = 'none';
    koreanResultsContainer.style.display = 'none';
}

// Empezar un mazo
function startDeck(language, deckId) {
    currentLanguage = language;
    selectedDeckId = deckId;
    
    if (language === 'russian') {
        currentDeck = obtenerLetrasRuso(deckId);
        russianCurrentDeckName.textContent = obtenerNombreMazoRuso(deckId);
    } else {
        currentDeck = obtenerLetrasCoreano(deckId);
        koreanCurrentDeckName.textContent = obtenerNombreMazoCoreano(deckId);
    }
    
    currentQuestionIndex = 0;
    score = 0;
    questions = [...currentDeck];
    shuffleArray(questions);
    
    showQuiz();
    loadQuestion();
}

// Mostrar el quiz
function showQuiz() {
    if (currentLanguage === 'russian') {
        russianDeckSelection.style.display = 'none';
        russianResultsContainer.style.display = 'none';
        russianQuizContainer.style.display = 'block';
        russianFeedbackContent.textContent = '';
        russianFeedbackContent.className = 'feedback-content';
        russianNextButton.style.display = 'none';
        russianAnswerInfo.style.display = 'none';
    } else {
        koreanDeckSelection.style.display = 'none';
        koreanResultsContainer.style.display = 'none';
        koreanQuizContainer.style.display = 'block';
        koreanFeedbackContent.textContent = '';
        koreanFeedbackContent.className = 'feedback-content';
        koreanNextButton.style.display = 'none';
        koreanAnswerInfo.style.display = 'none';
    }
}

// Cargar pregunta actual
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    
    if (currentLanguage === 'russian') {
        // Configurar para Ruso
        russianCharacter.textContent = question.ruso;
        russianCharacterName.textContent = question.nombre;
        russianPronunciation.textContent = question.pronunciacion;
        russianExample.textContent = question.ejemplo;
        russianAnswerInfo.style.display = 'none';
        
        // Actualizar progreso
        russianProgressText.textContent = `Pregunta ${currentQuestionIndex + 1}/${questions.length}`;
        const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
        russianProgressFill.style.width = `${progressPercentage}%`;
        
        // Limpiar opciones anteriores
        russianOptionsGrid.innerHTML = '';
        russianFeedbackContent.textContent = '';
        russianFeedbackContent.className = 'feedback-content';
        russianNextButton.style.display = 'none';
        
        // Crear botones de opciones
        question.opciones.forEach((opcion, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option';
            optionButton.textContent = opcion;
            optionButton.dataset.optionIndex = index;
            
            optionButton.addEventListener('click', () => checkAnswer(index, question.respuesta, question));
            russianOptionsGrid.appendChild(optionButton);
        });
    } else {
        // Configurar para Coreano
        koreanCharacter.textContent = question.coreano;
        koreanRomanization.textContent = question.romanizacion;
        koreanPronunciation.textContent = question.pronunciacion;
        koreanMeaning.textContent = question.significado;
        koreanAnswerInfo.style.display = 'none';
        
        // Actualizar progreso
        koreanProgressText.textContent = `Pregunta ${currentQuestionIndex + 1}/${questions.length}`;
        const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
        koreanProgressFill.style.width = `${progressPercentage}%`;
        
        // Limpiar opciones anteriores
        koreanOptionsGrid.innerHTML = '';
        koreanFeedbackContent.textContent = '';
        koreanFeedbackContent.className = 'feedback-content';
        koreanNextButton.style.display = 'none';
        
        // Crear botones de opciones
        question.opciones.forEach((opcion, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option';
            optionButton.textContent = opcion;
            optionButton.dataset.optionIndex = index;
            
            optionButton.addEventListener('click', () => checkAnswer(index, question.respuesta, question));
            koreanOptionsGrid.appendChild(optionButton);
        });
    }
}

// Verificar respuesta
function checkAnswer(selectedIndex, correctIndex, question) {
    let options, selectedOption, correctOption, feedbackContent, answerInfo, nextButton;
    
    if (currentLanguage === 'russian') {
        options = russianOptionsGrid.querySelectorAll('.option');
        feedbackContent = russianFeedbackContent;
        answerInfo = russianAnswerInfo;
        nextButton = russianNextButton;
    } else {
        options = koreanOptionsGrid.querySelectorAll('.option');
        feedbackContent = koreanFeedbackContent;
        answerInfo = koreanAnswerInfo;
        nextButton = koreanNextButton;
    }
    
    selectedOption = options[selectedIndex];
    correctOption = options[correctIndex];
    
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
        let correctAnswer;
        if (currentLanguage === 'russian') {
            correctAnswer = question.opciones[correctIndex];
        } else {
            correctAnswer = question.opciones[correctIndex];
        }
        feedbackContent.textContent = `Incorrecto. La respuesta correcta es: "${correctAnswer}"`;
        feedbackContent.className = 'feedback-content incorrect';
        nextButton.style.display = 'inline-flex';
    }
}

// Siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Mostrar resultados
function showResults() {
    const totalQuestions = questions.length;
    const incorrect = totalQuestions - score;
    
    if (currentLanguage === 'russian') {
        russianQuizContainer.style.display = 'none';
        russianResultsContainer.style.display = 'block';
        
        russianFinalScore.textContent = `${score}/${totalQuestions}`;
        russianCorrectCount.textContent = score;
        russianIncorrectCount.textContent = incorrect;
        russianResultDeckName.textContent = obtenerNombreMazoRuso(selectedDeckId);
    } else {
        koreanQuizContainer.style.display = 'none';
        koreanResultsContainer.style.display = 'block';
        
        koreanFinalScore.textContent = `${score}/${totalQuestions}`;
        koreanCorrectCount.textContent = score;
        koreanIncorrectCount.textContent = incorrect;
        koreanResultDeckName.textContent = obtenerNombreMazoCoreano(selectedDeckId);
    }
}

// Reiniciar el mazo actual
function restartCurrentDeck() {
    startDeck(currentLanguage, selectedDeckId);
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
