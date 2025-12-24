// ================================================
// ALFABETO HANGUL COREANO COMPLETO - QUIZ DE APRENDIZAJE
// ================================================

const alfabetoCoreano = {
    // Consonantes básicas
    1: [
        { coreano: 'ㄱ', romanizacion: 'g/k', pronunciacion: 'g/k', significado: 'Entre g y k suave', opciones: ['g/k', 'n', 'd/t', 'r/l'], respuesta: 0 },
        { coreano: 'ㄴ', romanizacion: 'n', pronunciacion: 'n', significado: 'Como "n" en "nido"', opciones: ['n', 'm', 'g/k', 's'], respuesta: 0 },
        { coreano: 'ㄷ', romanizacion: 'd/t', pronunciacion: 'd/t', significado: 'Entre d y t suave', opciones: ['d/t', 'b/p', 'ch/j', 'h'], respuesta: 0 },
        { coreano: 'ㄹ', romanizacion: 'r/l', pronunciacion: 'r/l', significado: 'Entre r y l, vibrante', opciones: ['r/l', 'n', 'm', 's'], respuesta: 0 },
        { coreano: 'ㅁ', romanizacion: 'm', pronunciacion: 'm', significado: 'Como "m" en "mesa"', opciones: ['m', 'n', 'b/p', 'g/k'], respuesta: 0 },
        { coreano: 'ㅂ', romanizacion: 'b/p', pronunciacion: 'b/p', significado: 'Entre b y p suave', opciones: ['b/p', 'd/t', 'ch/j', 'h'], respuesta: 0 },
        { coreano: 'ㅅ', romanizacion: 's', pronunciacion: 's', significado: 'Como "s" en "sopa"', opciones: ['s', 'sh', 'ch', 'ts'], respuesta: 0 },
        { coreano: 'ㅇ', romanizacion: 'silente/ng', pronunciacion: 'silente/ng', significado: 'Silente al inicio, "ng" al final', opciones: ['silente/ng', 'g/k', 'n', 'm'], respuesta: 0 },
        { coreano: 'ㅈ', romanizacion: 'j/ch', pronunciacion: 'j/ch', significado: 'Entre j y ch suave', opciones: ['j/ch', 's', 'h', 'k'], respuesta: 0 },
        { coreano: 'ㅊ', romanizacion: 'ch', pronunciacion: 'ch', significado: 'Como "ch" en "chocolate"', opciones: ['ch', 'j', 's', 't'], respuesta: 0 }
    ],
    
    // Más consonantes y consonantes tensas
    2: [
        { coreano: 'ㅋ', romanizacion: 'k', pronunciacion: 'k', significado: 'K fuerte, aspirada', opciones: ['k', 'g', 'ng', 'h'], respuesta: 0 },
        { coreano: 'ㅌ', romanizacion: 't', pronunciacion: 't', significado: 'T fuerte, aspirada', opciones: ['t', 'd', 'n', 'r'], respuesta: 0 },
        { coreano: 'ㅍ', romanizacion: 'p', pronunciacion: 'p', significado: 'P fuerte, aspirada', opciones: ['p', 'b', 'm', 'ph'], respuesta: 0 },
        { coreano: 'ㅎ', romanizacion: 'h', pronunciacion: 'h', significado: 'Como "h" en "hola"', opciones: ['h', 'k', 'g', 'f'], respuesta: 0 },
        { coreano: 'ㄲ', romanizacion: 'kk', pronunciacion: 'kk', significado: 'K tensa, doble', opciones: ['kk', 'k', 'g', 'ng'], respuesta: 0 },
        { coreano: 'ㄸ', romanizacion: 'tt', pronunciacion: 'tt', significado: 'T tensa, doble', opciones: ['tt', 't', 'd', 'r'], respuesta: 0 },
        { coreano: 'ㅃ', romanizacion: 'pp', pronunciacion: 'pp', significado: 'P tensa, doble', opciones: ['pp', 'p', 'b', 'ph'], respuesta: 0 },
        { coreano: 'ㅆ', romanizacion: 'ss', pronunciacion: 'ss', significado: 'S tensa, doble', opciones: ['ss', 's', 'sh', 'ts'], respuesta: 0 },
        { coreano: 'ㅉ', romanizacion: 'jj', pronunciacion: 'jj', significado: 'J tensa, doble', opciones: ['jj', 'j', 'ch', 'zh'], respuesta: 0 },
        { coreano: 'ㄳ', romanizacion: 'gs', pronunciacion: 'gs', significado: 'Consonante compuesta final', opciones: ['gs', 'g', 's', 'k'], respuesta: 0 }
    ],
    
    // Vocales básicas
    3: [
        { coreano: 'ㅏ', romanizacion: 'a', pronunciacion: 'a', significado: 'Como "a" en "padre"', opciones: ['a', 'eo', 'o', 'u'], respuesta: 0 },
        { coreano: 'ㅑ', romanizacion: 'ya', pronunciacion: 'ya', significado: 'Como "ya" en "yarda"', opciones: ['ya', 'yeo', 'yo', 'yu'], respuesta: 0 },
        { coreano: 'ㅓ', romanizacion: 'eo', pronunciacion: 'eo', significado: 'Sonido entre "o" y "u"', opciones: ['eo', 'a', 'o', 'eu'], respuesta: 0 },
        { coreano: 'ㅕ', romanizacion: 'yeo', pronunciacion: 'yeo', significado: 'Ye + eo combinado', opciones: ['yeo', 'ya', 'yo', 'yae'], respuesta: 0 },
        { coreano: 'ㅗ', romanizacion: 'o', pronunciacion: 'o', significado: 'Como "o" en "oso"', opciones: ['o', 'u', 'a', 'i'], respuesta: 0 },
        { coreano: 'ㅛ', romanizacion: 'yo', pronunciacion: 'yo', significado: 'Como "yo" en "yogur"', opciones: ['yo', 'yu', 'ya', 'yeo'], respuesta: 0 },
        { coreano: 'ㅜ', romanizacion: 'u', pronunciacion: 'u', significado: 'Como "u" en "luna"', opciones: ['u', 'o', 'eu', 'i'], respuesta: 0 },
        { coreano: 'ㅠ', romanizacion: 'yu', pronunciacion: 'yu', significado: 'Como "yu" en "yudo"', opciones: ['yu', 'yo', 'ya', 'yeo'], respuesta: 0 },
        { coreano: 'ㅡ', romanizacion: 'eu', pronunciacion: 'eu', significado: 'Sonido único coreano', opciones: ['eu', 'u', 'i', 'e'], respuesta: 0 },
        { coreano: 'ㅣ', romanizacion: 'i', pronunciacion: 'i', significado: 'Como "i" en "niño"', opciones: ['i', 'e', 'ae', 'ya'], respuesta: 0 }
    ],
    
    // Vocales compuestas y sílabas básicas
    4: [
        { coreano: 'ㅐ', romanizacion: 'ae', pronunciacion: 'ae', significado: 'Como "e" en "mesa"', opciones: ['ae', 'e', 'a', 'ya'], respuesta: 0 },
        { coreano: 'ㅒ', romanizacion: 'yae', pronunciacion: 'yae', significado: 'Ya + ae combinado', opciones: ['yae', 'ye', 'ya', 'ae'], respuesta: 0 },
        { coreano: 'ㅔ', romanizacion: 'e', pronunciacion: 'e', significado: 'Como "e" en "elefante"', opciones: ['e', 'ae', 'ya', 'yeo'], respuesta: 0 },
        { coreano: 'ㅖ', romanizacion: 'ye', pronunciacion: 'ye', significado: 'Ye + e combinado', opciones: ['ye', 'yae', 'ya', 'eo'], respuesta: 0 },
        { coreano: 'ㅘ', romanizacion: 'wa', pronunciacion: 'wa', significado: 'O + a combinado', opciones: ['wa', 'we', 'wo', 'wae'], respuesta: 0 },
        { coreano: 'ㅙ', romanizacion: 'wae', pronunciacion: 'wae', significado: 'O + ae combinado', opciones: ['wae', 'wa', 'we', 'wo'], respuesta: 0 },
        { coreano: 'ㅚ', romanizacion: 'oe', pronunciacion: 'oe', significado: 'O + e combinado', opciones: ['oe', 'we', 'wa', 'wae'], respuesta: 0 },
        { coreano: 'ㅝ', romanizacion: 'wo', pronunciacion: 'wo', significado: 'U + eo combinado', opciones: ['wo', 'we', 'wa', 'wae'], respuesta: 0 },
        { coreano: 'ㅞ', romanizacion: 'we', pronunciacion: 'we', significado: 'U + e combinado', opciones: ['we', 'wo', 'wa', 'wae'], respuesta: 0 },
        { coreano: 'ㅟ', romanizacion: 'wi', pronunciacion: 'wi', significado: 'U + i combinado', opciones: ['wi', 'we', 'wo', 'ui'], respuesta: 0 }
    ],
    
    // Más sílabas y consonantes compuestas
    5: [
        { coreano: 'ㅢ', romanizacion: 'ui', pronunciacion: 'ui', significado: 'Eu + i combinado', opciones: ['ui', 'wi', 'we', 'oe'], respuesta: 0 },
        { coreano: 'ㄵ', romanizacion: 'nj', pronunciacion: 'nj', significado: 'N + j compuesta final', opciones: ['nj', 'n', 'j', 'jn'], respuesta: 0 },
        { coreano: 'ㄶ', romanizacion: 'nh', pronunciacion: 'nh', significado: 'N + h compuesta final', opciones: ['nh', 'n', 'h', 'hn'], respuesta: 0 },
        { coreano: 'ㄺ', romanizacion: 'lg', pronunciacion: 'lg', significado: 'L + g compuesta final', opciones: ['lg', 'l', 'g', 'gl'], respuesta: 0 },
        { coreano: 'ㄻ', romanizacion: 'lm', pronunciacion: 'lm', significado: 'L + m compuesta final', opciones: ['lm', 'l', 'm', 'ml'], respuesta: 0 },
        { coreano: 'ㄼ', romanizacion: 'lb', pronunciacion: 'lb', significado: 'L + b compuesta final', opciones: ['lb', 'l', 'b', 'bl'], respuesta: 0 },
        { coreano: 'ㄽ', romanizacion: 'ls', pronunciacion: 'ls', significado: 'L + s compuesta final', opciones: ['ls', 'l', 's', 'sl'], respuesta: 0 },
        { coreano: 'ㄾ', romanizacion: 'lt', pronunciacion: 'lt', significado: 'L + t compuesta final', opciones: ['lt', 'l', 't', 'tl'], respuesta: 0 },
        { coreano: 'ㄿ', romanizacion: 'lp', pronunciacion: 'lp', significado: 'L + p compuesta final', opciones: ['lp', 'l', 'p', 'pl'], respuesta: 0 },
        { coreano: 'ㅀ', romanizacion: 'lh', pronunciacion: 'lh', significado: 'L + h compuesta final', opciones: ['lh', 'l', 'h', 'hl'], respuesta: 0 }
    ],
    
    // Sílabas comunes y palabras básicas
    6: [
        { coreano: '가', romanizacion: 'ga', pronunciacion: 'ga', significado: 'Primera sílaba del alfabeto', opciones: ['ga', 'na', 'da', 'ma'], respuesta: 0 },
        { coreano: '나', romanizacion: 'na', pronunciacion: 'na', significado: 'Yo (informal)', opciones: ['na', 'da', 'ra', 'ma'], respuesta: 0 },
        { coreano: '다', romanizacion: 'da', pronunciacion: 'da', significado: 'Todo, todos', opciones: ['da', 'ta', 'na', 'ga'], respuesta: 0 },
        { coreano: '라', romanizacion: 'ra/la', pronunciacion: 'ra/la', significado: 'Venir (imperativo)', opciones: ['ra/la', 'na', 'da', 'ma'], respuesta: 0 },
        { coreano: '마', romanizacion: 'ma', pronunciacion: 'ma', significado: 'Caballo', opciones: ['ma', 'ba', 'pa', 'na'], respuesta: 0 },
        { coreano: '바', romanizacion: 'ba', pronunciacion: 'ba', significado: 'Bar, lugar', opciones: ['ba', 'pa', 'ma', 'da'], respuesta: 0 },
        { coreano: '사', romanizacion: 'sa', pronunciacion: 'sa', significado: 'Cuatro', opciones: ['sa', 'ja', 'cha', 'ta'], respuesta: 0 },
        { coreano: '아', romanizacion: 'a', pronunciacion: 'a', significado: 'Ah, oh (interjección)', opciones: ['a', 'ya', 'eo', 'o'], respuesta: 0 },
        { coreano: '자', romanizacion: 'ja', pronunciacion: 'ja', significado: 'Bien, ahora', opciones: ['ja', 'cha', 'sa', 'ta'], respuesta: 0 },
        { coreano: '차', romanizacion: 'cha', pronunciacion: 'cha', significado: 'Auto, té', opciones: ['cha', 'ja', 'sa', 'ta'], respuesta: 0 }
    ],
    
    // Palabras comunes
    7: [
        { coreano: '안녕', romanizacion: 'annyeong', pronunciacion: 'an-nyeong', significado: 'Hola / Adiós', opciones: ['Hola/Adiós', 'Gracias', 'Sí', 'No'], respuesta: 0 },
        { coreano: '감사', romanizacion: 'gamsa', pronunciacion: 'gam-sa', significado: 'Gracias (formal)', opciones: ['Gracias', 'Hola', 'Adiós', 'Por favor'], respuesta: 0 },
        { coreano: '미안', romanizacion: 'mian', pronunciacion: 'mi-an', significado: 'Lo siento', opciones: ['Lo siento', 'Gracias', 'Hola', 'Adiós'], respuesta: 0 },
        { coreano: '사랑', romanizacion: 'sarang', pronunciacion: 'sa-rang', significado: 'Amor', opciones: ['Amor', 'Odio', 'Alegría', 'Tristeza'], respuesta: 0 },
        { coreano: '친구', romanizacion: 'chinggu', pronunciacion: 'chin-gu', significado: 'Amigo', opciones: ['Amigo', 'Enemigo', 'Familia', 'Extraño'], respuesta: 0 },
        { coreano: '가족', romanizacion: 'gajok', pronunciacion: 'ga-jok', significado: 'Familia', opciones: ['Familia', 'Amigo', 'Escuela', 'Trabajo'], respuesta: 0 },
        { coreano: '학교', romanizacion: 'hakgyo', pronunciacion: 'hak-gyo', significado: 'Escuela', opciones: ['Escuela', 'Casa', 'Trabajo', 'Parque'], respuesta: 0 },
        { coreano: '한국', romanizacion: 'hanguk', pronunciacion: 'han-guk', significado: 'Corea', opciones: ['Corea', 'Japón', 'China', 'Estados Unidos'], respuesta: 0 },
        { coreano: '사람', romanizacion: 'saram', pronunciacion: 'sa-ram', significado: 'Persona', opciones: ['Persona', 'Animal', 'Cosa', 'Lugar'], respuesta: 0 },
        { coreano: '물', romanizacion: 'mul', pronunciacion: 'mul', significado: 'Agua', opciones: ['Agua', 'Fuego', 'Tierra', 'Aire'], respuesta: 0 }
    ],
    
    // Frases útiles
    8: [
        { coreano: '네', romanizacion: 'ne', pronunciacion: 'ne', significado: 'Sí (formal)', opciones: ['Sí', 'No', 'Tal vez', 'Nunca'], respuesta: 0 },
        { coreano: '아니요', romanizacion: 'aniyo', pronunciacion: 'a-ni-yo', significado: 'No (formal)', opciones: ['No', 'Sí', 'Tal vez', 'Siempre'], respuesta: 0 },
        { coreano: '주세요', romanizacion: 'juseyo', pronunciacion: 'ju-se-yo', significado: 'Por favor deme', opciones: ['Por favor deme', 'Gracias', 'Hola', 'Adiós'], respuesta: 0 },
        { coreano: '어디예요?', romanizacion: 'eodiyeyo?', pronunciacion: 'eo-di-ye-yo?', significado: '¿Dónde está?', opciones: ['¿Dónde está?', '¿Qué es?', '¿Cuánto?', '¿Cómo?'], respuesta: 0 },
        { coreano: '뭐예요?', romanizacion: 'mwoyeyo?', pronunciacion: 'mwo-ye-yo?', significado: '¿Qué es?', opciones: ['¿Qué es?', '¿Dónde?', '¿Cuándo?', '¿Por qué?'], respuesta: 0 },
        { coreano: '얼마예요?', romanizacion: 'eolmayeyo?', pronunciacion: 'eol-ma-ye-yo?', significado: '¿Cuánto cuesta?', opciones: ['¿Cuánto cuesta?', '¿Qué es?', '¿Dónde?', '¿Por qué?'], respuesta: 0 },
        { coreano: '이름이 뭐예요?', romanizacion: 'ireumi mwoyeyo?', pronunciacion: 'i-reu-mi mwo-ye-yo?', significado: '¿Cómo te llamas?', opciones: ['¿Cómo te llamas?', '¿Cuántos años?', '¿De dónde?', '¿Qué hora?'], respuesta: 0 },
        { coreano: '한국말', romanizacion: 'hangungmal', pronunciacion: 'han-gung-mal', significado: 'Idioma coreano', opciones: ['Idioma coreano', 'Comida coreana', 'Música coreana', 'Cultura coreana'], respuesta: 0 },
        { coreano: '배고파요', romanizacion: 'baegopayo', pronunciacion: 'bae-go-pa-yo', significado: 'Tengo hambre', opciones: ['Tengo hambre', 'Tengo sed', 'Estoy cansado', 'Estoy feliz'], respuesta: 0 },
        { coreano: '재미있어요', romanizacion: 'jaemiisseoyo', pronunciacion: 'jae-mi-is-seo-yo', significado: 'Es divertido/interesante', opciones: ['Es divertido', 'Es aburrido', 'Es difícil', 'Es fácil'], respuesta: 0 }
    ]
};

// Funciones para Coreano
function obtenerLetrasCoreano(mazo) {
    return alfabetoCoreano[mazo] || [];
}

function contarMazosCoreanoDisponibles() {
    return Object.keys(alfabetoCoreano).length;
}

function obtenerNombreMazoCoreano(mazo) {
    const nombres = {
        1: 'Consonantes Básicas (1)',
        2: 'Consonantes Básicas (2)',
        3: 'Vocales Básicas',
        4: 'Vocales Compuestas',
        5: 'Consonantes Finales',
        6: 'Sílabas Básicas',
        7: 'Palabras Comunes',
        8: 'Frases Útiles'
    };
    return nombres[mazo] || `Mazo ${mazo}`;
}
