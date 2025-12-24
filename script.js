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

// Sistema de pronunciaciones más seguro
const audioPronunciations = {
    // Ruso - letras
    'a': { text: 'а', lang: 'ru-RU', fallback: 'a' },
    'ye': { text: 'е', lang: 'ru-RU', fallback: 'ye' },
    'yo': { text: 'ё', lang: 'ru-RU', fallback: 'yo' },
    'i': { text: 'и', lang: 'ru-RU', fallback: 'i' },
    'o': { text: 'о', lang: 'ru-RU', fallback: 'o' },
    'u': { text: 'у', lang: 'ru-RU', fallback: 'u' },
    'ы': { text: 'ы', lang: 'ru-RU', fallback: 'i' },
    'э': { text: 'э', lang: 'ru-RU', fallback: 'e' },
    'yu': { text: 'ю', lang: 'ru-RU', fallback: 'yu' },
    'ya': { text: 'я', lang: 'ru-RU', fallback: 'ya' },
    
    // Ruso - consonantes
    'b': { text: 'б', lang: 'ru-RU', fallback: 'b' },
    'v': { text: 'в', lang: 'ru-RU', fallback: 'v' },
    'g': { text: 'г', lang: 'ru-RU', fallback: 'g' },
    'd': { text: 'д', lang: 'ru-RU', fallback: 'd' },
    'zh': { text: 'ж', lang: 'ru-RU', fallback: 'zh' },
    'z': { text: 'з', lang: 'ru-RU', fallback: 'z' },
    'k': { text: 'к', lang: 'ru-RU', fallback: 'k' },
    'l': { text: 'л', lang: 'ru-RU', fallback: 'l' },
    'm': { text: 'м', lang: 'ru-RU', fallback: 'm' },
    'n': { text: 'н', lang: 'ru-RU', fallback: 'n' },
    'p': { text: 'п', lang: 'ru-RU', fallback: 'p' },
    'r': { text: 'р', lang: 'ru-RU', fallback: 'r' },
    's': { text: 'с', lang: 'ru-RU', fallback: 's' },
    't': { text: 'т', lang: 'ru-RU', fallback: 't' },
    'f': { text: 'ф', lang: 'ru-RU', fallback: 'f' },
    'kh': { text: 'х', lang: 'ru-RU', fallback: 'kh' },
    'ts': { text: 'ц', lang: 'ru-RU', fallback: 'ts' },
    'ch': { text: 'ч', lang: 'ru-RU', fallback: 'ch' },
    'sh': { text: 'ш', lang: 'ru-RU', fallback: 'sh' },
    'shch': { text: 'щ', lang: 'ru-RU', fallback: 'shch' },
    
    // Ruso - palabras
    'signo_duro': { text: 'твёрдый знак', lang: 'ru-RU', fallback: 'signo duro' },
    'signo_suave': { text: 'мягкий знак', lang: 'ru-RU', fallback: 'signo suave' },
    'i_kratkoye': { text: 'и краткое', lang: 'ru-RU', fallback: 'i corta' },
    'privet': { text: 'привет', lang: 'ru-RU', fallback: 'privet' },
    'spasibo': { text: 'спасибо', lang: 'ru-RU', fallback: 'spasibo' },
    'da': { text: 'да', lang: 'ru-RU', fallback: 'da' },
    'nyet': { text: 'нет', lang: 'ru-RU', fallback: 'nyet' },
    'do_svidaniya': { text: 'до свидания', lang: 'ru-RU', fallback: 'do svidaniya' },
    'kak_dela': { text: 'как дела', lang: 'ru-RU', fallback: 'kak dela' },
    
    // Coreano - consonantes
    'g': { text: 'ㄱ', lang: 'ko-KR', fallback: 'g' },
    'n': { text: 'ㄴ', lang: 'ko-KR', fallback: 'n' },
    'd': { text: 'ㄷ', lang: 'ko-KR', fallback: 'd' },
    'r': { text: 'ㄹ', lang: 'ko-KR', fallback: 'r' },
    'm': { text: 'ㅁ', lang: 'ko-KR', fallback: 'm' },
    'b': { text: 'ㅂ', lang: 'ko-KR', fallback: 'b' },
    's': { text: 'ㅅ', lang: 'ko-KR', fallback: 's' },
    'silente': { text: 'ㅇ', lang: 'ko-KR', fallback: 'silente' },
    'j': { text: 'ㅈ', lang: 'ko-KR', fallback: 'j' },
    'ch': { text: 'ㅊ', lang: 'ko-KR', fallback: 'ch' },
    'kk': { text: 'ㅋ', lang: 'ko-KR', fallback: 'k' },
    'tt': { text: 'ㅌ', lang: 'ko-KR', fallback: 't' },
    'pp': { text: 'ㅍ', lang: 'ko-KR', fallback: 'p' },
    'h': { text: 'ㅎ', lang: 'ko-KR', fallback: 'h' },
    
    // Coreano - vocales
    'a': { text: 'ㅏ', lang: 'ko-KR', fallback: 'a' },
    'ya': { text: 'ㅑ', lang: 'ko-KR', fallback: 'ya' },
    'eo': { text: 'ㅓ', lang: 'ko-KR', fallback: 'eo' },
    'yeo': { text: 'ㅕ', lang: 'ko-KR', fallback: 'yeo' },
    'o': { text: 'ㅗ', lang: 'ko-KR', fallback: 'o' },
    'yo': { text: 'ㅛ', lang: 'ko-KR', fallback: 'yo' },
    'u': { text: 'ㅜ', lang: 'ko-KR', fallback: 'u' },
    'yu': { text: 'ㅠ', lang: 'ko-KR', fallback: 'yu' },
    'eu': { text: 'ㅡ', lang: 'ko-KR', fallback: 'eu' },
    'i': { text: 'ㅣ', lang: 'ko-KR', fallback: 'i' },
    
    // Coreano - palabras
    'annyeong': { text: '안녕', lang: 'ko-KR', fallback: 'annyeong' },
    'gamsa': { text: '감사', lang: 'ko-KR', fallback: 'gamsa' },
    'mian': { text: '미안', lang: 'ko-KR', fallback: 'mian' },
    'sarang': { text: '사랑', lang: 'ko-KR', fallback: 'sarang' },
    'chinggu': { text: '친구', lang: 'ko-KR', fallback: 'chinggu' },
    'gajok': { text: '가족', lang: 'ko-KR', fallback: 'gajok' },
    'hakgyo': { text: '학교', lang: 'ko-KR', fallback: 'hakgyo' },
    'hanguk': { text: '한국', lang: 'ko-KR', fallback: 'hanguk' },
    'saram': { text: '사람', lang: 'ko-KR', fallback: 'saram' },
    'mul': { text: '물', lang: 'ko-KR', fallback: 'mul' },
    'ne': { text: '네', lang: 'ko-KR', fallback: 'ne' },
    'aniyo': { text: '아니요', lang: 'ko-KR', fallback: 'aniyo' },
    'juseyo': { text: '주세요', lang: 'ko-KR', fallback: 'juseyo' }
};

// Variables para control de audio
let isAudioPlaying = false;
let currentUtterance = null;

// Inicialización
function init() {
    console.log('Inicializando aplicación...');
    try {
        loadRussianDecks();
        loadKoreanDecks();
        setupEventListeners();
        console.log('Aplicación inicializada correctamente');
    } catch (error) {
        console.error('Error en la inicialización:', error);
        showError('Error al cargar la aplicación. Por favor, recarga la página.');
    }
}

// Cargar mazos rusos
function loadRussianDecks() {
    try {
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
    } catch (error) {
        console.error('Error cargando mazos rusos:', error);
    }
}

// Cargar mazos coreanos
function loadKoreanDecks() {
    try {
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
    } catch (error) {
        console.error('Error cargando mazos coreanos:', error);
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
    
    // Event listeners para audio en Ruso (con manejo de errores)
    russianAudioButton.addEventListener('click', (e) => {
        e.preventDefault();
        playRussianAudio();
    });
    
    russianPronunciationButton.addEventListener('click', (e) => {
        e.preventDefault();
        playRussianPronunciation();
    });
    
    russianExampleButton.addEventListener('click', (e) => {
        e.preventDefault();
        playRussianExample();
    });
    
    // Event listeners para Coreano
    koreanBackToDecks.addEventListener('click', () => showKoreanDecks());
    koreanRestartQuiz.addEventListener('click', () => restartCurrentDeck());
    koreanPlayAgain.addEventListener('click', () => restartCurrentDeck());
    koreanTryOtherDeck.addEventListener('click', () => showKoreanDecks());
    koreanNextButton.addEventListener('click', nextQuestion);
    
    // Event listeners para audio en Coreano (con manejo de errores)
    koreanAudioButton.addEventListener('click', (e) => {
        e.preventDefault();
        playKoreanAudio();
    });
    
    koreanPronunciationButton.addEventListener('click', (e) => {
        e.preventDefault();
        playKoreanPronunciation();
    });
}

// Mostrar selección de idioma
function showLanguageSelection() {
    try {
        languageSelection.style.display = 'block';
        russianSystem.style.display = 'none';
        koreanSystem.style.display = 'none';
    } catch (error) {
        console.error('Error mostrando selección de idioma:', error);
    }
}

// Mostrar sistema de idioma específico
function showLanguageSystem(language) {
    try {
        currentLanguage = language;
        languageSelection.style.display = 'none';
        russianSystem.style.display = language === 'russian' ? 'block' : 'none';
        koreanSystem.style.display = language === 'korean' ? 'block' : 'none';
        
        if (language === 'russian') {
            showRussianDecks();
        } else {
            showKoreanDecks();
        }
    } catch (error) {
        console.error('Error mostrando sistema de idioma:', error);
    }
}

// Mostrar mazos rusos
function showRussianDecks() {
    try {
        russianDeckSelection.style.display = 'block';
        russianQuizContainer.style.display = 'none';
        russianResultsContainer.style.display = 'none';
    } catch (error) {
        console.error('Error mostrando mazos rusos:', error);
    }
}

// Mostrar mazos coreanos
function showKoreanDecks() {
    try {
        koreanDeckSelection.style.display = 'block';
        koreanQuizContainer.style.display = 'none';
        koreanResultsContainer.style.display = 'none';
    } catch (error) {
        console.error('Error mostrando mazos coreanos:', error);
    }
}

// Empezar un mazo
function startDeck(language, deckId) {
    try {
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
    } catch (error) {
        console.error('Error empezando mazo:', error);
        showError('Error al cargar el mazo. Intenta de nuevo.');
    }
}

// Mostrar el quiz
function showQuiz() {
    try {
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
    } catch (error) {
        console.error('Error mostrando quiz:', error);
    }
}

// Cargar pregunta actual
function loadQuestion() {
    try {
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
    } catch (error) {
        console.error('Error cargando pregunta:', error);
        showError('Error al cargar la pregunta. Intenta de nuevo.');
    }
}

// NUEVO: Sistema de audio más seguro
function playRussianAudio() {
    try {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            if (question.audio) {
                playTextToSpeech(question.audio, 'ru-RU');
            }
        }
    } catch (error) {
        console.error('Error reproduciendo audio ruso:', error);
        showAudioError();
    }
}

function playRussianPronunciation() {
    try {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            if (question.audio) {
                playTextToSpeech(question.audio, 'ru-RU');
            }
        }
    } catch (error) {
        console.error('Error reproduciendo pronunciación rusa:', error);
        showAudioError();
    }
}

function playRussianExample() {
    try {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            // Extraer la palabra rusa del ejemplo
            const russianWord = question.ejemplo.split(' ')[0];
            if (russianWord) {
                // Intentar usar Text-to-Speech para la palabra
                const audioKey = question.audio;
                if (audioKey) {
                    playTextToSpeech(audioKey, 'ru-RU');
                }
            }
        }
    } catch (error) {
        console.error('Error reproduciendo ejemplo ruso:', error);
        showAudioError();
    }
}

function playKoreanAudio() {
    try {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            if (question.audio) {
                playTextToSpeech(question.audio, 'ko-KR');
            }
        }
    } catch (error) {
        console.error('Error reproduciendo audio coreano:', error);
        showAudioError();
    }
}

function playKoreanPronunciation() {
    try {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex];
            if (question.audio) {
                playTextToSpeech(question.audio, 'ko-KR');
            }
        }
    } catch (error) {
        console.error('Error reproduciendo pronunciación coreana:', error);
        showAudioError();
    }
}

// NUEVO: Función mejorada para convertir texto a voz
function playTextToSpeech(audioKey, lang) {
    try {
        // Si ya hay audio reproduciéndose, detenerlo
        if (isAudioPlaying && currentUtterance) {
            speechSynthesis.cancel();
            isAudioPlaying = false;
        }
        
        if (!audioPronunciations[audioKey]) {
            console.warn(`No se encontró pronunciación para: ${audioKey}`);
            return;
        }
        
        const pronunciation = audioPronunciations[audioKey];
        
        // Verificar si el navegador soporta speechSynthesis
        if (!('speechSynthesis' in window)) {
            console.warn('Text-to-Speech no soportado en este navegador');
            showBrowserWarning();
            return;
        }
        
        // Verificar si hay voces disponibles
        const voices = speechSynthesis.getVoices();
        if (voices.length === 0) {
            console.warn('No hay voces disponibles para Text-to-Speech');
            
            // Intentar cargar voces después de un tiempo
            setTimeout(() => {
                const voicesAfterWait = speechSynthesis.getVoices();
                if (voicesAfterWait.length > 0) {
                    createAndPlayUtterance(pronunciation, voicesAfterWait, lang);
                } else {
                    showBrowserWarning();
                }
            }, 500);
            return;
        }
        
        createAndPlayUtterance(pronunciation, voices, lang);
        
    } catch (error) {
        console.error('Error en Text-to-Speech:', error);
        showAudioError();
    }
}

// NUEVO: Función auxiliar para crear y reproducir utterance
function createAndPlayUtterance(pronunciation, voices, lang) {
    try {
        const utterance = new SpeechSynthesisUtterance(pronunciation.text);
        utterance.lang = pronunciation.lang || lang;
        utterance.rate = 0.8;
        utterance.volume = 1.0;
        utterance.pitch = 1.0;
        
        // Buscar una voz adecuada
        const preferredVoice = voices.find(voice => 
            voice.lang.startsWith(lang.substring(0, 2))
        );
        
        if (preferredVoice) {
            utterance.voice = preferredVoice;
        } else if (voices.length > 0) {
            // Usar cualquier voz disponible si no hay una específica
            utterance.voice = voices[0];
        }
        
        // Manejar eventos del utterance
        utterance.onstart = () => {
            isAudioPlaying = true;
            currentUtterance = utterance;
            
            // Efecto visual
            const activeButton = document.querySelector('.audio-button:hover, .audio-small-button:hover');
            if (activeButton) {
                activeButton.classList.add('playing');
            }
        };
        
        utterance.onend = () => {
            isAudioPlaying = false;
            currentUtterance = null;
            
            // Quitar efecto visual
            const playingButtons = document.querySelectorAll('.playing');
            playingButtons.forEach(button => button.classList.remove('playing'));
        };
        
        utterance.onerror = (event) => {
            console.error('Error en la reproducción de voz:', event.error);
            isAudioPlaying = false;
            currentUtterance = null;
            
            // Quitar efecto visual
            const playingButtons = document.querySelectorAll('.playing');
            playingButtons.forEach(button => button.classList.remove('playing'));
            
            // Mostrar fallback si está disponible
            if (pronunciation.fallback) {
                console.log(`Usando fallback: ${pronunciation.fallback}`);
            }
        };
        
        // Reproducir
        speechSynthesis.speak(utterance);
        
    } catch (error) {
        console.error('Error creando utterance:', error);
        isAudioPlaying = false;
        currentUtterance = null;
        showAudioError();
    }
}

// NUEVO: Mostrar advertencia de navegador
function showBrowserWarning() {
    try {
        // Crear un mensaje temporal
        const warning = document.createElement('div');
        warning.className = 'browser-warning';
        warning.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: #fef3c7;
                color: #92400e;
                padding: 15px;
                border-radius: 8px;
                border: 2px solid #f59e0b;
                z-index: 1000;
                max-width: 300px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                font-size: 14px;
            ">
                <strong>⚠️ Audio no disponible</strong><br>
                El audio puede no funcionar en tu navegador.
                Prueba con Chrome para mejor compatibilidad.
            </div>
        `;
        
        document.body.appendChild(warning);
        
        // Remover después de 5 segundos
        setTimeout(() => {
            if (warning.parentNode) {
                warning.parentNode.removeChild(warning);
            }
        }, 5000);
    } catch (error) {
        console.error('Error mostrando advertencia:', error);
    }
}

// NUEVO: Mostrar error de audio
function showAudioError() {
    try {
        const feedbackElement = currentLanguage === 'russian' 
            ? russianFeedbackContent 
            : koreanFeedbackContent;
        
        const originalContent = feedbackElement.textContent;
        const originalClass = feedbackElement.className;
        
        feedbackElement.textContent = '⚠️ Audio no disponible en este navegador';
        feedbackElement.className = 'feedback-content';
        
        // Restaurar después de 2 segundos
        setTimeout(() => {
            feedbackElement.textContent = originalContent;
            feedbackElement.className = originalClass;
        }, 2000);
    } catch (error) {
        console.error('Error mostrando error de audio:', error);
    }
}

// NUEVO: Mostrar error general
function showError(message) {
    try {
        alert(message);
    } catch (error) {
        console.error('Error mostrando mensaje:', error);
    }
}

// Verificar respuesta
function checkAnswer(selectedIndex, correctIndex, question) {
    try {
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
    } catch (error) {
        console.error('Error verificando respuesta:', error);
    }
}

// Siguiente pregunta
function nextQuestion() {
    try {
        currentQuestionIndex++;
        loadQuestion();
    } catch (error) {
        console.error('Error avanzando pregunta:', error);
    }
}

// Mostrar resultados
function showResults() {
    try {
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
    } catch (error) {
        console.error('Error mostrando resultados:', error);
    }
}

// Reiniciar el mazo actual
function restartCurrentDeck() {
    try {
        startDeck(currentLanguage, selectedDeckId);
    } catch (error) {
        console.error('Error reiniciando mazo:', error);
    }
}

// Mezclar array (para randomizar preguntas)
function shuffleArray(array) {
    try {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    } catch (error) {
        console.error('Error mezclando array:', error);
        return array;
    }
}

// Inicializar las voces de síntesis de voz
function initializeVoices() {
    try {
        if ('speechSynthesis' in window) {
            // Cargar las voces disponibles
            const voices = speechSynthesis.getVoices();
            console.log(`Voces disponibles: ${voices.length}`);
            
            // Algunos navegadores necesitan este evento
            speechSynthesis.onvoiceschanged = function() {
                const voicesChanged = speechSynthesis.getVoices();
                console.log(`Voces cargadas después del evento: ${voicesChanged.length}`);
            };
        } else {
            console.warn('Speech Synthesis API no disponible');
        }
    } catch (error) {
        console.error('Error inicializando voces:', error);
    }
}

// Iniciar la aplicación cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, iniciando aplicación...');
    try {
        init();
        initializeVoices();
        
        // Verificar compatibilidad
        if (!('speechSynthesis' in window)) {
            console.warn('Este navegador no soporta Text-to-Speech');
            showBrowserWarning();
        }
    } catch (error) {
        console.error('Error crítico al iniciar:', error);
        alert('Error al cargar la aplicación. Por favor, recarga la página.');
    }
});

// Manejar errores no capturados
window.addEventListener('error', function(event) {
    console.error('Error no capturado:', event.error);
});

window.addEventListener('unhandledrejection', function(event) {
    console.error('Promesa rechazada no manejada:', event.reason);
});
