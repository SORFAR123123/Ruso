// ================================================
// ALFABETO HANGUL COREANO COMPLETO - QUIZ DE APRENDIZAJE
// ================================================

const alfabetoCoreano = {
    // Consonantes básicas
    1: [
        { coreano: 'ㄱ', romanizacion: 'g/k', pronunciacion: 'g/k', significado: 'Entre g y k suave', opciones: ['r/l', 'g/k', 'n', 'd/t'], respuesta: 1, audio: 'g' },
        { coreano: 'ㄴ', romanizacion: 'n', pronunciacion: 'n', significado: 'Como "n" en "nido"', opciones: ['m', 'g/k', 'n', 's'], respuesta: 2, audio: 'n' },
        { coreano: 'ㄷ', romanizacion: 'd/t', pronunciacion: 'd/t', significado: 'Entre d y t suave', opciones: ['d/t', 'ch/j', 'h', 'b/p'], respuesta: 0, audio: 'd' },
        { coreano: 'ㄹ', romanizacion: 'r/l', pronunciacion: 'r/l', significado: 'Entre r y l, vibrante', opciones: ['s', 'n', 'r/l', 'm'], respuesta: 2, audio: 'r' },
        { coreano: 'ㅁ', romanizacion: 'm', pronunciacion: 'm', significado: 'Como "m" en "mesa"', opciones: ['b/p', 'g/k', 'n', 'm'], respuesta: 3, audio: 'm' },
        { coreano: 'ㅂ', romanizacion: 'b/p', pronunciacion: 'b/p', significado: 'Entre b y p suave', opciones: ['ch/j', 'b/p', 'd/t', 'h'], respuesta: 1, audio: 'b' },
        { coreano: 'ㅅ', romanizacion: 's', pronunciacion: 's', significado: 'Como "s" en "sopa"', opciones: ['ch', 'ts', 'sh', 's'], respuesta: 3, audio: 's' },
        { coreano: 'ㅇ', romanizacion: 'silente/ng', pronunciacion: 'silente/ng', significado: 'Silente al inicio, "ng" al final', opciones: ['m', 'g/k', 'silente/ng', 'n'], respuesta: 2, audio: 'silente' },
        { coreano: 'ㅈ', romanizacion: 'j/ch', pronunciacion: 'j/ch', significado: 'Entre j y ch suave', opciones: ['h', 'j/ch', 'k', 's'], respuesta: 1, audio: 'j' },
        { coreano: 'ㅊ', romanizacion: 'ch', pronunciacion: 'ch', significado: 'Como "ch" en "chocolate"', opciones: ['j', 's', 'ch', 't'], respuesta: 2, audio: 'ch' }
    ],
    
    // Más consonantes y consonantes tensas
    2: [
        { coreano: 'ㅋ', romanizacion: 'k', pronunciacion: 'k', significado: 'K fuerte, aspirada', opciones: ['ng', 'g', 'k', 'h'], respuesta: 2, audio: 'kk' },
        { coreano: 'ㅌ', romanizacion: 't', pronunciacion: 't', significado: 'T fuerte, aspirada', opciones: ['n', 't', 'r', 'd'], respuesta: 1, audio: 'tt' },
        { coreano: 'ㅍ', romanizacion: 'p', pronunciacion: 'p', significado: 'P fuerte, aspirada', opciones: ['ph', 'b', 'p', 'm'], respuesta: 2, audio: 'pp' },
        { coreano: 'ㅎ', romanizacion: 'h', pronunciacion: 'h', significado: 'Como "h" en "hola"', opciones: ['f', 'g', 'k', 'h'], respuesta: 3, audio: 'h' },
        { coreano: 'ㄲ', romanizacion: 'kk', pronunciacion: 'kk', significado: 'K tensa, doble', opciones: ['g', 'kk', 'k', 'ng'], respuesta: 1, audio: 'kk_tensa' },
        { coreano: 'ㄸ', romanizacion: 'tt', pronunciacion: 'tt', significado: 'T tensa, doble', opciones: ['r', 't', 'tt', 'd'], respuesta: 2, audio: 'tt_tensa' },
        { coreano: 'ㅃ', romanizacion: 'pp', pronunciacion: 'pp', significado: 'P tensa, doble', opciones: ['b', 'ph', 'p', 'pp'], respuesta: 3, audio: 'pp_tensa' },
        { coreano: 'ㅆ', romanizacion: 'ss', pronunciacion: 'ss', significado: 'S tensa, doble', opciones: ['ss', 'ts', 'sh', 's'], respuesta: 0, audio: 'ss_tensa' },
        { coreano: 'ㅉ', romanizacion: 'jj', pronunciacion: 'jj', significado: 'J tensa, doble', opciones: ['zh', 'ch', 'jj', 'j'], respuesta: 2, audio: 'jj_tensa' },
        { coreano: 'ㄳ', romanizacion: 'gs', pronunciacion: 'gs', significado: 'Consonante compuesta final', opciones: ['g', 'k', 'gs', 's'], respuesta: 2, audio: 'gs' }
    ],
    
    // Vocales básicas
    3: [
        { coreano: 'ㅏ', romanizacion: 'a', pronunciacion: 'a', significado: 'Como "a" en "padre"', opciones: ['u', 'a', 'o', 'eo'], respuesta: 1, audio: 'a' },
        { coreano: 'ㅑ', romanizacion: 'ya', pronunciacion: 'ya', significado: 'Como "ya" en "yarda"', opciones: ['yeo', 'yu', 'ya', 'yo'], respuesta: 2, audio: 'ya' },
        { coreano: 'ㅓ', romanizacion: 'eo', pronunciacion: 'eo', significado: 'Sonido entre "o" y "u"', opciones: ['eu', 'eo', 'o', 'a'], respuesta: 1, audio: 'eo' },
        { coreano: 'ㅕ', romanizacion: 'yeo', pronunciacion: 'yeo', significado: 'Ye + eo combinado', opciones: ['yae', 'ya', 'yeo', 'yo'], respuesta: 2, audio: 'yeo' },
        { coreano: 'ㅗ', romanizacion: 'o', pronunciacion: 'o', significado: 'Como "o" en "oso"', opciones: ['o', 'a', 'i', 'u'], respuesta: 0, audio: 'o' },
        { coreano: 'ㅛ', romanizacion: 'yo', pronunciacion: 'yo', significado: 'Como "yo" en "yogur"', opciones: ['yeo', 'yu', 'yo', 'ya'], respuesta: 2, audio: 'yo' },
        { coreano: 'ㅜ', romanizacion: 'u', pronunciacion: 'u', significado: 'Como "u" en "luna"', opciones: ['i', 'o', 'u', 'eu'], respuesta: 2, audio: 'u' },
        { coreano: 'ㅠ', romanizacion: 'yu', pronunciacion: 'yu', significado: 'Como "yu" en "yudo"', opciones: ['ya', 'yu', 'yeo', 'yo'], respuesta: 1, audio: 'yu' },
        { coreano: 'ㅡ', romanizacion: 'eu', pronunciacion: 'eu', significado: 'Sonido único coreano', opciones: ['eu', 'i', 'e', 'u'], respuesta: 0, audio: 'eu' },
        { coreano: 'ㅣ', romanizacion: 'i', pronunciacion: 'i', significado: 'Como "i" en "niño"', opciones: ['e', 'ya', 'i', 'ae'], respuesta: 2, audio: 'i' }
    ],
    
    // Vocales compuestas y sílabas básicas
    4: [
        { coreano: 'ㅐ', romanizacion: 'ae', pronunciacion: 'ae', significado: 'Como "e" en "mesa"', opciones: ['ae', 'a', 'e', 'ya'], respuesta: 0, audio: 'ae' },
        { coreano: 'ㅒ', romanizacion: 'yae', pronunciacion: 'yae', significado: 'Ya + ae combinado', opciones: ['ye', 'ya', 'ae', 'yae'], respuesta: 3, audio: 'yae' },
        { coreano: 'ㅔ', romanizacion: 'e', pronunciacion: 'e', significado: 'Como "e" en "elefante"', opciones: ['ya', 'e', 'yeo', 'ae'], respuesta: 1, audio: 'e' },
        { coreano: 'ㅖ', romanizacion: 'ye', pronunciacion: 'ye', significado: 'Ye + e combinado', opciones: ['yae', 'ye', 'eo', 'ya'], respuesta: 1, audio: 'ye' },
        { coreano: 'ㅘ', romanizacion: 'wa', pronunciacion: 'wa', significado: 'O + a combinado', opciones: ['wae', 'wa', 'we', 'wo'], respuesta: 1, audio: 'wa' },
        { coreano: 'ㅙ', romanizacion: 'wae', pronunciacion: 'wae', significado: 'O + ae combinado', opciones: ['we', 'wo', 'wa', 'wae'], respuesta: 3, audio: 'wae' },
        { coreano: 'ㅚ', romanizacion: 'oe', pronunciacion: 'oe', significado: 'O + e combinado', opciones: ['wa', 'wae', 'oe', 'we'], respuesta: 2, audio: 'oe' },
        { coreano: 'ㅝ', romanizacion: 'wo', pronunciacion: 'wo', significado: 'U + eo combinado', opciones: ['wae', 'we', 'wa', 'wo'], respuesta: 3, audio: 'wo' },
        { coreano: 'ㅞ', romanizacion: 'we', pronunciacion: 'we', significado: 'U + e combinado', opciones: ['wo', 'wa', 'wae', 'we'], respuesta: 3, audio: 'we' },
        { coreano: 'ㅟ', romanizacion: 'wi', pronunciacion: 'wi', significado: 'U + i combinado', opciones: ['ui', 'we', 'wi', 'wo'], respuesta: 2, audio: 'wi' }
    ],
    
    // Más sílabas y consonantes compuestas
    5: [
        { coreano: 'ㅢ', romanizacion: 'ui', pronunciacion: 'ui', significado: 'Eu + i combinado', opciones: ['we', 'wi', 'oe', 'ui'], respuesta: 3, audio: 'ui' },
        { coreano: 'ㄵ', romanizacion: 'nj', pronunciacion: 'nj', significado: 'N + j compuesta final', opciones: ['jn', 'j', 'n', 'nj'], respuesta: 3, audio: 'nj' },
        { coreano: 'ㄶ', romanizacion: 'nh', pronunciacion: 'nh', significado: 'N + h compuesta final', opciones: ['nh', 'n', 'h', 'hn'], respuesta: 0, audio: 'nh' },
        { coreano: 'ㄺ', romanizacion: 'lg', pronunciacion: 'lg', significado: 'L + g compuesta final', opciones: ['gl', 'l', 'g', 'lg'], respuesta: 3, audio: 'lg' },
        { coreano: 'ㄻ', romanizacion: 'lm', pronunciacion: 'lm', significado: 'L + m compuesta final', opciones: ['ml', 'lm', 'm', 'l'], respuesta: 1, audio: 'lm' },
        { coreano: 'ㄼ', romanizacion: 'lb', pronunciacion: 'lb', significado: 'L + b compuesta final', opciones: ['l', 'bl', 'lb', 'b'], respuesta: 2, audio: 'lb' },
        { coreano: 'ㄽ', romanizacion: 'ls', pronunciacion: 'ls', significado: 'L + s compuesta final', opciones: ['sl', 'ls', 's', 'l'], respuesta: 1, audio: 'ls' },
        { coreano: 'ㄾ', romanizacion: 'lt', pronunciacion: 'lt', significado: 'L + t compuesta final', opciones: ['tl', 'lt', 't', 'l'], respuesta: 1, audio: 'lt' },
        { coreano: 'ㄿ', romanizacion: 'lp', pronunciacion: 'lp', significado: 'L + p compuesta final', opciones: ['pl', 'l', 'p', 'lp'], respuesta: 3, audio: 'lp' },
        { coreano: 'ㅀ', romanizacion: 'lh', pronunciacion: 'lh', significado: 'L + h compuesta final', opciones: ['l', 'lh', 'h', 'hl'], respuesta: 1, audio: 'lh' }
    ],
    
    // Sílabas comunes y palabras básicas
    6: [
        { coreano: '가', romanizacion: 'ga', pronunciacion: 'ga', significado: 'Primera sílaba del alfabeto', opciones: ['ma', 'na', 'ga', 'da'], respuesta: 2, audio: 'ga' },
        { coreano: '나', romanizacion: 'na', pronunciacion: 'na', significado: 'Yo (informal)', opciones: ['ma', 'da', 'ra', 'na'], respuesta: 3, audio: 'na' },
        { coreano: '다', romanizacion: 'da', pronunciacion: 'da', significado: 'Todo, todos', opciones: ['na', 'ta', 'ga', 'da'], respuesta: 3, audio: 'da' },
        { coreano: '라', romanizacion: 'ra/la', pronunciacion: 'ra/la', significado: 'Venir (imperativo)', opciones: ['da', 'ra/la', 'na', 'ma'], respuesta: 1, audio: 'ra' },
        { coreano: '마', romanizacion: 'ma', pronunciacion: 'ma', significado: 'Caballo', opciones: ['pa', 'na', 'ba', 'ma'], respuesta: 3, audio: 'ma' },
        { coreano: '바', romanizacion: 'ba', pronunciacion: 'ba', significado: 'Bar, lugar', opciones: ['ma', 'da', 'ba', 'pa'], respuesta: 2, audio: 'ba' },
        { coreano: '사', romanizacion: 'sa', pronunciacion: 'sa', significado: 'Cuatro', opciones: ['ta', 'cha', 'ja', 'sa'], respuesta: 3, audio: 'sa' },
        { coreano: '아', romanizacion: 'a', pronunciacion: 'a', significado: 'Ah, oh (interjección)', opciones: ['eo', 'a', 'ya', 'o'], respuesta: 1, audio: 'a_silaba' },
        { coreano: '자', romanizacion: 'ja', pronunciacion: 'ja', significado: 'Bien, ahora', opciones: ['ta', 'ja', 'sa', 'cha'], respuesta: 1, audio: 'ja' },
        { coreano: '차', romanizacion: 'cha', pronunciacion: 'cha', significado: 'Auto, té', opciones: ['sa', 'cha', 'ja', 'ta'], respuesta: 1, audio: 'cha' }
    ],
    
    // Palabras comunes
    7: [
        { coreano: '안녕', romanizacion: 'annyeong', pronunciacion: 'an-nyeong', significado: 'Hola / Adiós', opciones: ['Sí', 'Gracias', 'No', 'Hola/Adiós'], respuesta: 3, audio: 'annyeong' },
        { coreano: '감사', romanizacion: 'gamsa', pronunciacion: 'gam-sa', significado: 'Gracias (formal)', opciones: ['Adiós', 'Por favor', 'Hola', 'Gracias'], respuesta: 3, audio: 'gamsa' },
        { coreano: '미안', romanizacion: 'mian', pronunciacion: 'mi-an', significado: 'Lo siento', opciones: ['Gracias', 'Hola', 'Lo siento', 'Adiós'], respuesta: 2, audio: 'mian' },
        { coreano: '사랑', romanizacion: 'sarang', pronunciacion: 'sa-rang', significado: 'Amor', opciones: ['Alegría', 'Tristeza', 'Odio', 'Amor'], respuesta: 3, audio: 'sarang' },
        { coreano: '친구', romanizacion: 'chinggu', pronunciacion: 'chin-gu', significado: 'Amigo', opciones: ['Enemigo', 'Extraño', 'Familia', 'Amigo'], respuesta: 3, audio: 'chinggu' },
        { coreano: '가족', romanizacion: 'gajok', pronunciacion: 'ga-jok', significado: 'Familia', opciones: ['Escuela', 'Trabajo', 'Amigo', 'Familia'], respuesta: 3, audio: 'gajok' },
        { coreano: '학교', romanizacion: 'hakgyo', pronunciacion: 'hak-gyo', significado: 'Escuela', opciones: ['Parque', 'Casa', 'Trabajo', 'Escuela'], respuesta: 3, audio: 'hakgyo' },
        { coreano: '한국', romanizacion: 'hanguk', pronunciacion: 'han-guk', significado: 'Corea', opciones: ['Japón', 'China', 'Corea', 'Estados Unidos'], respuesta: 2, audio: 'hanguk' },
        { coreano: '사람', romanizacion: 'saram', pronunciacion: 'sa-ram', significado: 'Persona', opciones: ['Cosa', 'Lugar', 'Animal', 'Persona'], respuesta: 3, audio: 'saram' },
        { coreano: '물', romanizacion: 'mul', pronunciacion: 'mul', significado: 'Agua', opciones: ['Tierra', 'Fuego', 'Aire', 'Agua'], respuesta: 3, audio: 'mul' }
    ],
    
    // Frases útiles
    8: [
        { coreano: '네', romanizacion: 'ne', pronunciacion: 'ne', significado: 'Sí (formal)', opciones: ['Nunca', 'Tal vez', 'No', 'Sí'], respuesta: 3, audio: 'ne' },
        { coreano: '아니요', romanizacion: 'aniyo', pronunciacion: 'a-ni-yo', significado: 'No (formal)', opciones: ['Siempre', 'Sí', 'Tal vez', 'No'], respuesta: 3, audio: 'aniyo' },
        { coreano: '주세요', romanizacion: 'juseyo', pronunciacion: 'ju-se-yo', significado: 'Por favor deme', opciones: ['Adiós', 'Gracias', 'Hola', 'Por favor deme'], respuesta: 3, audio: 'juseyo' },
        { coreano: '어디예요?', romanizacion: 'eodiyeyo?', pronunciacion: 'eo-di-ye-yo?', significado: '¿Dónde está?', opciones: ['¿Cómo?', '¿Qué es?', '¿Cuánto?', '¿Dónde está?'], respuesta: 3, audio: 'eodiyeyo' },
        { coreano: '뭐예요?', romanizacion: 'mwoyeyo?', pronunciacion: 'mwo-ye-yo?', significado: '¿Qué es?', opciones: ['¿Dónde?', '¿Por qué?', '¿Cuándo?', '¿Qué es?'], respuesta: 3, audio: 'mwoyeyo' },
        { coreano: '얼마예요?', romanizacion: 'eolmayeyo?', pronunciacion: 'eol-ma-ye-yo?', significado: '¿Cuánto cuesta?', opciones: ['¿Por qué?', '¿Qué es?', '¿Dónde?', '¿Cuánto cuesta?'], respuesta: 3, audio: 'eolmayeyo' },
        { coreano: '이름이 뭐예요?', romanizacion: 'ireumi mwoyeyo?', pronunciacion: 'i-reu-mi mwo-ye-yo?', significado: '¿Cómo te llamas?', opciones: ['¿Qué hora?', '¿Cuántos años?', '¿De dónde?', '¿Cómo te llamas?'], respuesta: 3, audio: 'ireumi_mwoyeyo' },
        { coreano: '한국말', romanizacion: 'hangungmal', pronunciacion: 'han-gung-mal', significado: 'Idioma coreano', opciones: ['Música coreana', 'Comida coreana', 'Cultura coreana', 'Idioma coreano'], respuesta: 3, audio: 'hangungmal' },
        { coreano: '배고파요', romanizacion: 'baegopayo', pronunciacion: 'bae-go-pa-yo', significado: 'Tengo hambre', opciones: ['Estoy feliz', 'Estoy cansado', 'Tengo sed', 'Tengo hambre'], respuesta: 3, audio: 'baegopayo' },
        { coreano: '재미있어요', romanizacion: 'jaemiisseoyo', pronunciacion: 'jae-mi-is-seo-yo', significado: 'Es divertido/interesante', opciones: ['Es fácil', 'Es difícil', 'Es aburrido', 'Es divertido'], respuesta: 3, audio: 'jaemiisseoyo' }
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
