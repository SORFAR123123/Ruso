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

// NUEVOS: Elementos para audio en Ruso
const russianAudioButton = document.getElementById('russianAudioButton');
const russianPronunciationButton = document.getElementById('russianPronunciationButton');
const russianExampleButton = document.getElementById('russianExampleButton');

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

// NUEVOS: Elementos para audio en Coreano
const koreanAudioButton = document.getElementById('koreanAudioButton');
const koreanPronunciationButton = document.getElementById('koreanPronunciationButton');

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
        4: 'fas fa-language',
        5: 'fas fa-layer-group',
        6: 'fas fa-font',
        7: 'fas fa-comments',
        8: 'fas fa-quote-right'
    }
};

// Base de datos de pronunciaciones (simulada)
const audioPronunciations = {
    // Ruso
    'a': { text: 'a', lang: 'ru-RU' },
    'ye': { text: 'ye', lang: 'ru-RU' },
    'yo': { text: 'yo', lang: 'ru-RU' },
    'i': { text: 'и', lang: 'ru-RU' },
    'o': { text: 'o', lang: 'ru-RU' },
    'u': { text: 'у', lang: 'ru-RU' },
    'ы': { text: 'ы', lang: 'ru-RU' },
    'э': { text: 'э', lang: 'ru-RU' },
    'yu': { text: 'ю', lang: 'ru-RU' },
    'ya': { text: 'я', lang: 'ru-RU' },
    'b': { text: 'б', lang: 'ru-RU' },
    'v': { text: 'в', lang: 'ru-RU' },
    'g': { text: 'г', lang: 'ru-RU' },
    'd': { text: 'д', lang: 'ru-RU' },
    'zh': { text: 'ж', lang: 'ru-RU' },
    'z': { text: 'з', lang: 'ru-RU' },
    'k': { text: 'к', lang: 'ru-RU' },
    'l': { text: 'л', lang: 'ru-RU' },
    'm': { text: 'м', lang: 'ru-RU' },
    'n': { text: 'н', lang: 'ru-RU' },
    'p': { text: 'п', lang: 'ru-RU' },
    'r': { text: 'р', lang: 'ru-RU' },
    's': { text: 'с', lang: 'ru-RU' },
    't': { text: 'т', lang: 'ru-RU' },
    'f': { text: 'ф', lang: 'ru-RU' },
    'kh': { text: 'х', lang: 'ru-RU' },
    'ts': { text: 'ц', lang: 'ru-RU' },
    'ch': { text: 'ч', lang: 'ru-RU' },
    'sh': { text: 'ш', lang: 'ru-RU' },
    'shch': { text: 'щ', lang: 'ru-RU' },
    'signo_duro': { text: 'твёрдый знак', lang: 'ru-RU' },
    'signo_suave': { text: 'мягкий знак', lang: 'ru-RU' },
    'i_kratkoye': { text: 'и краткое', lang: 'ru-RU' },
    'privet': { text: 'привет', lang: 'ru-RU' },
    'spasibo': { text: 'спасибо', lang: 'ru-RU' },
    'da': { text: 'да', lang: 'ru-RU' },
    'nyet': { text: 'нет', lang: 'ru-RU' },
    'do_svidaniya': { text: 'до свидания', lang: 'ru-RU' },
    'kak_dela': { text: 'как дела', lang: 'ru-RU' },
    
    // Coreano
    'g': { text: '기역', lang: 'ko-KR' },
    'n': { text: '니은', lang: 'ko-KR' },
    'd': { text: '디귿', lang: 'ko-KR' },
    'r': { text: '리을', lang: 'ko-KR' },
    'm': { text: '미음', lang: 'ko-KR' },
    'b': { text: '비읍', lang: 'ko-KR' },
    's': { text: '시옷', lang: 'ko-KR' },
    'silente': { text: '이응', lang: 'ko-KR' },
    'j': { text: '지읒', lang: 'ko-KR' },
    'ch': { text: '치읓', lang: 'ko-KR' },
    'kk': { text: '키읔', lang: 'ko-KR' },
    'tt': { text: '티읕', lang: 'ko-KR' },
    'pp': { text: '피읖', lang: 'ko-KR' },
    'h': { text: '히읗', lang: 'ko-KR' },
    'kk_tensa': { text: '쌍기역', lang: 'ko-KR' },
    'tt_tensa': { text: '쌍디귿', lang: 'ko-KR' },
    'pp_tensa': { text: '쌍비읍', lang: 'ko-KR' },
    'ss_tensa': { text: '쌍시옷', lang: 'ko-KR' },
    'jj_tensa': { text: '쌍지읒', lang: 'ko-KR' },
    'gs': { text: 'ㄳ', lang: 'ko-KR' },
    'a': { text: '아', lang: 'ko-KR' },
    'ya': { text: '야', lang: 'ko-KR' },
    'eo': { text: '어', lang: 'ko-KR' },
    'yeo': { text: '여', lang: 'ko-KR' },
    'o': { text: '오', lang: 'ko-KR' },
    'yo': { text: '요', lang: 'ko-KR' },
    'u': { text: '우', lang: 'ko-KR' },
    'yu': { text: '유', lang: 'ko-KR' },
    'eu': { text: '으', lang: 'ko-KR' },
    'i': { text: '이', lang: 'ko-KR' },
    'ae': { text: '애', lang: 'ko-KR' },
    'yae': { text: '얘', lang: 'ko-KR' },
    'e': { text: '에', lang: 'ko-KR' },
    'ye': { text: '예', lang: 'ko-KR' },
    'wa': { text: '와', lang: 'ko-KR' },
    'wae': { text: '왜', lang: 'ko-KR' },
    'oe': { text: '외', lang: 'ko-KR' },
    'wo': { text: '워', lang: 'ko-KR' },
    'we': { text: '웨', lang: 'ko-KR' },
    'wi': { text: '위', lang: 'ko-KR' },
    'ui': { text: '의', lang: 'ko-KR' },
    'nj': { text: 'ㄵ', lang: 'ko-KR' },
    'nh': { text: 'ㄶ', lang: 'ko-KR' },
    'lg': { text: 'ㄺ', lang: 'ko-KR' },
    'lm': { text: 'ㄻ', lang: 'ko-KR' },
    'lb': { text: 'ㄼ', lang: 'ko-KR' },
    'ls': { text: 'ㄽ', lang: 'ko-KR' },
    'lt': { text: 'ㄾ', lang: 'ko-KR' },
    'lp': { text: 'ㄿ', lang: 'ko-KR' },
    'lh': { text: 'ㅀ', lang: 'ko-KR' },
    'ga': { text: '가', lang: 'ko-KR' },
    'na': { text: '나', lang: 'ko-KR' },
    'da': { text: '다', lang: 'ko-KR' },
    'ra': { text: '라', lang: 'ko-KR' },
    'ma': { text: '마', lang: 'ko-KR' },
    'ba': { text: '바', lang: 'ko-KR' },
    'sa': { text: '사', lang: 'ko-KR' },
    'a_silaba': { text: '아', lang: 'ko-KR' },
    'ja': { text: '자', lang: 'ko-KR' },
    'cha': { text: '차', lang: 'ko-KR' },
    'annyeong': { text: '안녕', lang: 'ko-KR' },
    'gamsa': { text: '감사', lang: 'ko-KR' },
    'mian': { text: '미안', lang: 'ko-KR' },
    'sarang': { text: '사랑', lang: 'ko-KR' },
    'chinggu': { text: '친구', lang: 'ko-KR' },
    'gajok': { text: '가족', lang: 'ko-KR' },
    'hakgyo': { text: '학교', lang: 'ko-KR' },
    'hanguk': { text: '한국', lang: 'ko-KR' },
    'saram': { text: '사람', lang: 'ko-KR' },
    'mul': { text: '물', lang: 'ko-KR' },
    'ne': { text: '네', lang: 'ko-KR' },
    'aniyo': { text: '아니요', lang: 'ko-KR' },
    'juseyo': { text: '주세요', lang: 'ko-KR' },
    'eodiyeyo': { text: '어디예요', lang: 'ko-KR' },
    'mwoyeyo': { text: '뭐예요', lang: 'ko-KR' },
    'eolmayeyo': { text: '얼마예요', lang: 'ko-KR' },
    'ireumi_mwoyeyo': { text: '이름이 뭐예요', lang: 'ko-KR' },
    'hangungmal': { text: '한국말', lang: 'ko-KR' },
    'baegopayo': { text: '배고파요', lang: 'ko-KR' },
    'jaemiisseoyo': { text: '재미있어요', lang: 'ko-KR' }
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
    
    // NUEVO: Event listeners para audio en Ruso
    russianAudioButton.addEventListener('click', () => playRussianAudio());
    russianPronunciationButton.addEventListener('click', () => playRussianPronunciation());
    russianExampleButton.addEventListener('click', () => playRussianExample());
    
    // Event listeners para Coreano
    koreanBackToDecks.addEventListener('click', () => showKoreanDecks());
    koreanRestartQuiz.addEventListener('click', () => restartCurrentDeck());
    koreanPlayAgain.addEventListener('click', () => restartCurrentDeck());
    koreanTryOtherDeck.addEventListener('click', () => showKoreanDecks());
    koreanNextButton.addEventListener('click', nextQuestion);
    
    // NUEVO: Event listeners para audio en Coreano
    koreanAudioButton.addEventListener('click', () => playKoreanAudio());
    koreanPronunciationButton.addEventListener('click', () => playKoreanPronunciation());
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

// NUEVO: Reproducir audio en Ruso
function playRussianAudio() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        if (question.audio) {
            playTextToSpeech(question.audio, 'ru-RU');
        }
    }
}

// NUEVO: Reproducir pronunciación en Ruso
function playRussianPronunciation() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        if (question.audio) {
            playTextToSpeech(question.audio, 'ru-RU');
        }
    }
}

// NUEVO: Reproducir ejemplo en Ruso
function playRussianExample() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        // Extraer la palabra rusa del ejemplo
        const russianWord = question.ejemplo.split(' ')[0];
        playTextToSpeech(russianWord, 'ru-RU');
    }
}

// NUEVO: Reproducir audio en Coreano
function playKoreanAudio() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        if (question.audio) {
            playTextToSpeech(question.audio, 'ko-KR');
        }
    }
}

// NUEVO: Reproducir pronunciación en Coreano
function playKoreanPronunciation() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        if (question.audio) {
            playTextToSpeech(question.audio, 'ko-KR');
        }
    }
}

// NUEVO: Función para convertir texto a voz
function playTextToSpeech(audioKey, lang) {
    if (audioPronunciations[audioKey]) {
        const pronunciation = audioPronunciations[audioKey];
        
        // Usar la API de síntesis de voz del navegador
        if ('speechSynthesis' in window) {
            // Cancelar cualquier síntesis en curso
            speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(pronunciation.text);
            utterance.lang = pronunciation.lang || lang;
            utterance.rate = 0.8; // Velocidad ligeramente más lenta
            utterance.volume = 1.0;
            utterance.pitch = 1.0;
            
            // Buscar voces en el idioma correcto
            const voices = speechSynthesis.getVoices();
            const preferredVoice = voices.find(voice => 
                voice.lang.startsWith(lang.substring(0, 2))
            );
            
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            
            speechSynthesis.speak(utterance);
            
            // Efecto visual en el botón
            const button = event ? event.target.closest('.audio-button, .audio-small-button') : null;
            if (button) {
                button.classList.add('playing');
                utterance.onend = () => {
                    button.classList.remove('playing');
                };
            }
        } else {
            alert('Tu navegador no soporta la síntesis de voz. Prueba con Chrome, Edge o Safari.');
        }
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

// Inicializar las voces de síntesis de voz
function initializeVoices() {
    if ('speechSynthesis' in window) {
        // Cargar las voces disponibles
        speechSynthesis.getVoices();
        
        // Algunos navegadores necesitan este evento
        speechSynthesis.onvoiceschanged = function() {
            console.log('Voces de síntesis de voz cargadas');
        };
    }
}

// Iniciar la aplicación cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    init();
    initializeVoices();
});
