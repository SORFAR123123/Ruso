// ================================================
// ALFABETO HANGUL COREANO - QUIZ DE APRENDIZAJE
// ================================================

const alfabetoCoreano = {
    // Vocales básicas
    1: [
        { coreano: 'ㅏ', romanizacion: 'a', pronunciacion: 'a', significado: 'Vocal "a" como en "padre"', opciones: ['a', 'eo', 'o', 'u'], respuesta: 0 },
        { coreano: 'ㅓ', romanizacion: 'eo', pronunciacion: 'eo', significado: 'Vocal "eo" como en "juego"', opciones: ['eo', 'a', 'o', 'eu'], respuesta: 0 },
        { coreano: 'ㅗ', romanizacion: 'o', pronunciacion: 'o', significado: 'Vocal "o" como en "oso"', opciones: ['o', 'u', 'a', 'i'], respuesta: 0 },
        { coreano: 'ㅜ', romanizacion: 'u', pronunciacion: 'u', significado: 'Vocal "u" como en "luna"', opciones: ['u', 'o', 'eu', 'i'], respuesta: 0 },
        { coreano: 'ㅣ', romanizacion: 'i', pronunciacion: 'i', significado: 'Vocal "i" como en "niño"', opciones: ['i', 'e', 'ae', 'ya'], respuesta: 0 },
        { coreano: 'ㅑ', romanizacion: 'ya', pronunciacion: 'ya', significado: 'Vocal "ya" como en "yarda"', opciones: ['ya', 'yeo', 'yo', 'yu'], respuesta: 0 },
        { coreano: 'ㅕ', romanizacion: 'yeo', pronunciacion: 'yeo', significado: 'Vocal "yeo" como en "yeoman"', opciones: ['yeo', 'ya', 'yo', 'yae'], respuesta: 0 },
        { coreano: 'ㅛ', romanizacion: 'yo', pronunciacion: 'yo', significado: 'Vocal "yo" como en "yogur"', opciones: ['yo', 'yu', 'ya', 'yeo'], respuesta: 0 },
        { coreano: 'ㅠ', romanizacion: 'yu', pronunciacion: 'yu', significado: 'Vocal "yu" como en "yudo"', opciones: ['yu', 'yo', 'ya', 'yeo'], respuesta: 0 },
        { coreano: 'ㅡ', romanizacion: 'eu', pronunciacion: 'eu', significado: 'Vocal "eu" única del coreano', opciones: ['eu', 'u', 'i', 'e'], respuesta: 0 }
    ],
    
    // Consonantes básicas
    2: [
        { coreano: 'ㄱ', romanizacion: 'g/k', pronunciacion: 'g/k', significado: 'Entre g y k, como en "gato"', opciones: ['g/k', 'n', 'd/t', 'r/l'], respuesta: 0 },
        { coreano: 'ㄴ', romanizacion: 'n', pronunciacion: 'n', significado: 'Consonante "n" como en "nido"', opciones: ['n', 'm', 'g/k', 's'], respuesta: 0 },
        { coreano: 'ㄷ', romanizacion: 'd/t', pronunciacion: 'd/t', significado: 'Entre d y t, como en "dedo"', opciones: ['d/t', 'b/p', 'ch/j', 'h'], respuesta: 0 },
        { coreano: 'ㄹ', romanizacion: 'r/l', pronunciacion: 'r/l', significado: 'Entre r y l, como en "aro"', opciones: ['r/l', 'n', 'm', 's'], respuesta: 0 },
        { coreano: 'ㅁ', romanizacion: 'm', pronunciacion: 'm', significado: 'Consonante "m" como en "mesa"', opciones: ['m', 'n', 'b/p', 'g/k'], respuesta: 0 },
        { coreano: 'ㅂ', romanizacion: 'b/p', pronunciacion: 'b/p', significado: 'Entre b y p, como en "boca"', opciones: ['b/p', 'd/t', 'ch/j', 'h'], respuesta: 0 },
        { coreano: 'ㅅ', romanizacion: 's', pronunciacion: 's', significado: 'Consonante "s" como en "sopa"', opciones: ['s', 'sh', 'ch', 'ts'], respuesta: 0 },
        { coreano: 'ㅇ', romanizacion: 'ng/silente', pronunciacion: 'ng/silente', significado: 'En inicio es silente, en final es "ng"', opciones: ['ng/silente', 'g/k', 'n', 'm'], respuesta: 0 },
        { coreano: 'ㅈ', romanizacion: 'j/ch', pronunciacion: 'j/ch', significado: 'Entre j y ch, como en "jefe"', opciones: ['j/ch', 's', 'h', 'k'], respuesta: 0 },
        { coreano: 'ㅎ', romanizacion: 'h', pronunciacion: 'h', significado: 'Consonante "h" como en "hola"', opciones: ['h', 'k', 'g', 'f'], respuesta: 0 }
    ],
    
    // Consonantes dobles y compuestas
    3: [
        { coreano: 'ㄲ', romanizacion: 'kk', pronunciacion: 'kk', significado: 'Consonante tensa "kk"', opciones: ['kk', 'k', 'g', 'ng'], respuesta: 0 },
        { coreano: 'ㄸ', romanizacion: 'tt', pronunciacion: 'tt', significado: 'Consonante tensa "tt"', opciones: ['tt', 't', 'd', 'r'], respuesta: 0 },
        { coreano: 'ㅃ', romanizacion: 'pp', pronunciacion: 'pp', significado: 'Consonante tensa "pp"', opciones: ['pp', 'p', 'b', 'ph'], respuesta: 0 },
        { coreano: 'ㅆ', romanizacion: 'ss', pronunciacion: 'ss', significado: 'Consonante tensa "ss"', opciones: ['ss', 's', 'sh', 'ts'], respuesta: 0 },
        { coreano: 'ㅉ', romanizacion: 'jj', pronunciacion: 'jj', significado: 'Consonante tensa "jj"', opciones: ['jj', 'j', 'ch', 'zh'], respuesta: 0 },
        { coreano: 'ㄳ', romanizacion: 'gs', pronunciacion: 'gs', significado: 'Consonante compuesta "gs"', opciones: ['gs', 'g', 's', 'k'], respuesta: 0 },
        { coreano: 'ㄵ', romanizacion: 'nj', pronunciacion: 'nj', significado: 'Consonante compuesta "nj"', opciones: ['nj', 'n', 'j', 'jn'], respuesta: 0 },
        { coreano: 'ㄶ', romanizacion: 'nh', pronunciacion: 'nh', significado: 'Consonante compuesta "nh"', opciones: ['nh', 'n', 'h', 'hn'], respuesta: 0 },
        { coreano: 'ㄺ', romanizacion: 'lg', pronunciacion: 'lg', significado: 'Consonante compuesta "lg"', opciones: ['lg', 'l', 'g', 'gl'], respuesta: 0 },
        { coreano: 'ㅄ', romanizacion: 'bs', pronunciacion: 'bs', significado: 'Consonante compuesta "bs"', opciones: ['bs', 'b', 's', 'sb'], respuesta: 0 }
    ],
    
    // Sílabas básicas y palabras
    4: [
        { coreano: '가', romanizacion: 'ga', pronunciacion: 'ga', significado: 'Primera sílaba del alfabeto', opciones: ['ga', 'na', 'da', 'ma'], respuesta: 0 },
        { coreano: '나', romanizacion: 'na', pronunciacion: 'na', significado: 'Sílaba "na" como en "nación"', opciones: ['na', 'da', 'ra', 'ma'], respuesta: 0 },
        { coreano: '다', romanizacion: 'da', pronunciacion: 'da', significado: 'Sílaba "da" como en "dado"', opciones: ['da', 'ta', 'na', 'ga'], respuesta: 0 },
        { coreano: '라', romanizacion: 'ra', pronunciacion: 'ra/la', significado: 'Sílaba "ra" como en "radio"', opciones: ['ra/la', 'na', 'da', 'ma'], respuesta: 0 },
        { coreano: '마', romanizacion: 'ma', pronunciacion: 'ma', significado: 'Sílaba "ma" como en "madre"', opciones: ['ma', 'ba', 'pa', 'na'], respuesta: 0 },
        { coreano: '바', romanizacion: 'ba', pronunciacion: 'ba', significado: 'Sílaba "ba" como en "barco"', opciones: ['ba', 'pa', 'ma', 'da'], respuesta: 0 },
        { coreano: '사', romanizacion: 'sa', pronunciacion: 'sa', significado: 'Sílaba "sa" como en "saco"', opciones: ['sa', 'ja', 'cha', 'ta'], respuesta: 0 },
        { coreano: '아', romanizacion: 'a', pronunciacion: 'a', significado: 'Sílaba "a" vocal sola', opciones: ['a', 'ya', 'eo', 'o'], respuesta: 0 },
        { coreano: '자', romanizacion: 'ja', pronunciacion: 'ja', significado: 'Sílaba "ja" como en "jabón"', opciones: ['ja', 'cha', 'sa', 'ta'], respuesta: 0 },
        { coreano: '하', romanizacion: 'ha', pronunciacion: 'ha', significado: 'Sílaba "ha" como en "hacha"', opciones: ['ha', 'ka', 'ga', 'ta'], respuesta: 0 }
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
        1: 'Vocales Básicas',
        2: 'Consonantes Básicas',
        3: 'Consonantes Especiales',
        4: 'Sílabas Básicas'
    };
    return nombres[mazo] || `Mazo ${mazo}`;
}
