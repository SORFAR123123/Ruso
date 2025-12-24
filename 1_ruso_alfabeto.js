// ================================================
// ALFABETO CIRÍLICO RUSO - QUIZ DE APRENDIZAJE
// ================================================

const alfabetoRuso = {
    // Vocales
    1: [
        { ruso: 'А а', nombre: 'A', pronunciacion: 'a', ejemplo: 'Ананас (ananás) - piña', opciones: ['a', 'be', 've', 'ge'], audio: 'a' },
        { ruso: 'Е е', nombre: 'Ye', pronunciacion: 'ye/e', ejemplo: 'Ель (yel) - abeto', opciones: ['ye', 'a', 'en', 'ka'], audio: 'ye' },
        { ruso: 'Ё ё', nombre: 'Yo', pronunciacion: 'yo', ejemplo: 'Ёлка (yolka) - árbol de Navidad', opciones: ['yo', 'ye', 'a', 'i'], audio: 'yo' },
        { ruso: 'И и', nombre: 'I', pronunciacion: 'i', ejemplo: 'Икра (ikra) - caviar', opciones: ['i', 'u', 'o', 'a'], audio: 'i' },
        { ruso: 'О о', nombre: 'O', pronunciacion: 'o', ejemplo: 'Окно (okno) - ventana', opciones: ['o', 'a', 'ye', 'u'], audio: 'o' },
        { ruso: 'У у', nombre: 'U', pronunciacion: 'u', ejemplo: 'Ухо (ukho) - oído', opciones: ['u', 'o', 'i', 'ye'], audio: 'u' },
        { ruso: 'Ы ы', nombre: 'Y', pronunciacion: 'i corta', ejemplo: 'Мышь (mysh) - ratón', opciones: ['i corta', 'u', 'ye', 'yo'], audio: 'ы' },
        { ruso: 'Э э', nombre: 'E', pronunciacion: 'e', ejemplo: 'Это (eto) - esto', opciones: ['e', 'ye', 'yo', 'i'], audio: 'э' },
        { ruso: 'Ю ю', nombre: 'Yu', pronunciacion: 'yu', ejemplo: 'Юг (yug) - sur', opciones: ['yu', 'ya', 'ye', 'i'], audio: 'yu' },
        { ruso: 'Я я', nombre: 'Ya', pronunciacion: 'ya', ejemplo: 'Яблоко (yabloko) - manzana', opciones: ['ya', 'yu', 'ye', 'yo'], audio: 'ya' }
    ],
    
    // Consonantes (parte 1)
    2: [
        { ruso: 'Б б', nombre: 'Be', pronunciacion: 'b', ejemplo: 'Банк (bank) - banco', opciones: ['b', 'v', 'g', 'd'], audio: 'b' },
        { ruso: 'В в', nombre: 'Ve', pronunciacion: 'v', ejemplo: 'Вода (voda) - agua', opciones: ['v', 'b', 'f', 'p'], audio: 'v' },
        { ruso: 'Г г', nombre: 'Ge', pronunciacion: 'g', ejemplo: 'Город (gorod) - ciudad', opciones: ['g', 'k', 'j', 'h'], audio: 'g' },
        { ruso: 'Д д', nombre: 'De', pronunciacion: 'd', ejemplo: 'Дом (dom) - casa', opciones: ['d', 't', 'n', 'l'], audio: 'd' },
        { ruso: 'Ж ж', nombre: 'Zhe', pronunciacion: 'zh', ejemplo: 'Жизнь (zhizn) - vida', opciones: ['zh (como jota)', 'sh', 'ch', 'ts'], audio: 'zh' },
        { ruso: 'З з', nombre: 'Ze', pronunciacion: 'z', ejemplo: 'Зима (zima) - invierno', opciones: ['z', 's', 'ts', 'dz'], audio: 'z' },
        { ruso: 'К к', nombre: 'Ka', pronunciacion: 'k', ejemplo: 'Книга (kniga) - libro', opciones: ['k', 'g', 'kh', 'h'], audio: 'k' },
        { ruso: 'Л л', nombre: 'El', pronunciacion: 'l', ejemplo: 'Любовь (lyubov) - amor', opciones: ['l', 'r', 'n', 'm'], audio: 'l' },
        { ruso: 'М м', nombre: 'Em', pronunciacion: 'm', ejemplo: 'Море (more) - mar', opciones: ['m', 'n', 'p', 'b'], audio: 'm' },
        { ruso: 'Н н', nombre: 'En', pronunciacion: 'n', ejemplo: 'Ночь (noch) - noche', opciones: ['n', 'm', 'l', 'r'], audio: 'n' }
    ],
    
    // Consonantes (parte 2)
    3: [
        { ruso: 'П п', nombre: 'Pe', pronunciacion: 'p', ejemplo: 'Поле (pole) - campo', opciones: ['p', 'b', 'f', 'v'], audio: 'p' },
        { ruso: 'Р р', nombre: 'Er', pronunciacion: 'r', ejemplo: 'Рука (ruka) - mano', opciones: ['r (vibrante)', 'l', 'n', 'd'], audio: 'r' },
        { ruso: 'С с', nombre: 'Es', pronunciacion: 's', ejemplo: 'Солнце (sontse) - sol', opciones: ['s', 'z', 'sh', 'ts'], audio: 's' },
        { ruso: 'Т т', nombre: 'Te', pronunciacion: 't', ejemplo: 'Тетрадь (tetrad) - cuaderno', opciones: ['t', 'd', 'n', 'l'], audio: 't' },
        { ruso: 'Ф ф', nombre: 'Ef', pronunciacion: 'f', ejemplo: 'Фото (foto) - foto', opciones: ['f', 'v', 'p', 'b'], audio: 'f' },
        { ruso: 'Х х', nombre: 'Kha', pronunciacion: 'kh/j', ejemplo: 'Хлеб (khleb) - pan', opciones: ['kh (como jota suave)', 'k', 'g', 'h'], audio: 'kh' },
        { ruso: 'Ц ц', nombre: 'Tse', pronunciacion: 'ts', ejemplo: 'Цветок (tsvetok) - flor', opciones: ['ts', 's', 'z', 'ch'], audio: 'ts' },
        { ruso: 'Ч ч', nombre: 'Che', pronunciacion: 'ch', ejemplo: 'Чай (chai) - té', opciones: ['ch', 'sh', 'zh', 'ts'], audio: 'ch' },
        { ruso: 'Ш ш', nombre: 'Sha', pronunciacion: 'sh', ejemplo: 'Школа (shkola) - escuela', opciones: ['sh', 'ch', 'zh', 's'], audio: 'sh' },
        { ruso: 'Щ щ', nombre: 'Shcha', pronunciacion: 'shch', ejemplo: 'Щука (shchuka) - lucio', opciones: ['shch (sh suave)', 'sh', 'ch', 's'], audio: 'shch' }
    ],
    
    // Letras especiales y signos
    4: [
        { ruso: 'Ъ ъ', nombre: 'Signo duro', pronunciacion: 'silenciosa', ejemplo: 'Объявление (obyavlenie) - anuncio', opciones: ['signo duro (no suena)', 'signo suave', 'vocal', 'consonante'], audio: 'signo_duro' },
        { ruso: 'Ь ь', nombre: 'Signo suave', pronunciacion: 'suaviza', ejemplo: 'День (den) - día', opciones: ['signo suave', 'signo duro', 'vocal', 'consonante'], audio: 'signo_suave' },
        { ruso: 'Й й', nombre: 'I kratkoye', pronunciacion: 'y/i corta', ejemplo: 'Май (mai) - mayo', opciones: ['y/i corta', 'i', 'ye', 'ya'], audio: 'i_kratkoye' },
        
        // Palabras completas para practicar
        { ruso: 'Привет', nombre: 'Saludo', pronunciacion: 'privét', ejemplo: '¡Hola!', opciones: ['Hola', 'Adiós', 'Gracias', 'Por favor'], audio: 'privet' },
        { ruso: 'Спасибо', nombre: 'Agradecimiento', pronunciacion: 'spasíbo', ejemplo: 'Gracias', opciones: ['Gracias', 'Hola', 'Adiós', 'Sí'], audio: 'spasibo' },
        { ruso: 'Да', nombre: 'Afirmación', pronunciacion: 'da', ejemplo: 'Sí', opciones: ['Sí', 'No', 'Tal vez', 'Nunca'], audio: 'da' },
        { ruso: 'Нет', nombre: 'Negación', pronunciacion: 'nyet', ejemplo: 'No', opciones: ['No', 'Sí', 'Tal vez', 'Siempre'], audio: 'nyet' },
        { ruso: 'До свидания', nombre: 'Despedida', pronunciacion: 'do svidániya', ejemplo: 'Hasta luego', opciones: ['Hasta luego', 'Hola', 'Gracias', 'Bienvenido'], audio: 'do_svidaniya' },
        { ruso: 'Как дела?', nombre: 'Pregunta', pronunciacion: 'kak delá?', ejemplo: '¿Cómo estás?', opciones: ['¿Cómo estás?', '¿Qué hora es?', '¿Cómo te llamas?', '¿Dónde vives?'], audio: 'kak_dela' }
    ]
};

// Función para obtener letras del alfabeto CON OPCIONES MEZCLADAS
function obtenerLetrasRuso(mazo) {
    const preguntasOriginales = alfabetoRuso[mazo] || [];
    
    // Crear una copia profunda y mezclar las opciones
    return preguntasOriginales.map(pregunta => {
        // Crear una copia de las opciones
        const opciones = [...pregunta.opciones];
        
        // La respuesta correcta es siempre la primera opción en el array original
        const respuestaCorrecta = opciones[0];
        
        // Mezclar las opciones
        for (let i = opciones.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
        }
        
        // Encontrar la nueva posición de la respuesta correcta
        const nuevaRespuesta = opciones.indexOf(respuestaCorrecta);
        
        return {
            ...pregunta,
            opciones: opciones,
            respuesta: nuevaRespuesta
        };
    });
}

// Función para contar mazos disponibles
function contarMazosRusoDisponibles() {
    return Object.keys(alfabetoRuso).length;
}

// Función para obtener el nombre del mazo
function obtenerNombreMazoRuso(mazo) {
    const nombres = {
        1: 'Vocales',
        2: 'Consonantes (A-J)',
        3: 'Consonantes (P-Shch)',
        4: 'Signos y Palabras Básicas'
    };
    return nombres[mazo] || `Mazo ${mazo}`;
}
