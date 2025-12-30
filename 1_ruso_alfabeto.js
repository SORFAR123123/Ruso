// ================================================
// ALFABETO CIRÍLICO RUSO - QUIZ DE APRENDIZAJE
// Incluye 14 mazos: 4 de alfabeto + 10 de palabras básicas
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
    ],
    
    // MAZO 5: Saludos y Despedidas
    5: [
        { ruso: 'Привет', nombre: 'Hola', pronunciacion: 'privét', ejemplo: 'Привет! Как дела? (¡Hola! ¿Cómo estás?)', opciones: ['Hola', 'Adiós', 'Gracias', 'Por favor'], audio: 'privet' },
        { ruso: 'Здравствуйте', nombre: 'Hola (formal)', pronunciacion: 'zdrávstvuyte', ejemplo: 'Здравствуйте, меня зовут... (Hola, me llamo...)', opciones: ['Hola (formal)', 'Hola (informal)', 'Buenas noches', 'Buenos días'], audio: 'zdravstvuyte' },
        { ruso: 'До свидания', nombre: 'Adiós', pronunciacion: 'do svidániya', ejemplo: 'До свидания! Увидимся завтра. (¡Adiós! Nos vemos mañana.)', opciones: ['Adiós', 'Hola', 'Gracias', 'De nada'], audio: 'do_svidaniya' },
        { ruso: 'Пока', nombre: 'Chao', pronunciacion: 'poká', ejemplo: 'Пока, до завтра! (¡Chao, hasta mañana!)', opciones: ['Chao', 'Adiós', 'Hola', 'Buenas noches'], audio: 'poka' },
        { ruso: 'Доброе утро', nombre: 'Buenos días', pronunciacion: 'dóbroye útro', ejemplo: 'Доброе утро! Хорошего дня. (¡Buenos días! Que tengas un buen día.)', opciones: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola'], audio: 'dobroe_utro' },
        { ruso: 'Добрый день', nombre: 'Buenas tardes', pronunciacion: 'dóbryy den', ejemplo: 'Добрый день! Как прошёл день? (¡Buenas tardes! ¿Cómo ha ido el día?)', opciones: ['Buenas tardes', 'Buenos días', 'Buenas noches', 'Hola'], audio: 'dobry_den' },
        { ruso: 'Добрый вечер', nombre: 'Buenas noches', pronunciacion: 'dóbryy vécher', ejemplo: 'Добрый вечер! Как ваши дела? (¡Buenas noches! ¿Cómo están tus cosas?)', opciones: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Adiós'], audio: 'dobry_vecher' },
        { ruso: 'Спокойной ночи', nombre: 'Buenas noches (al dormir)', pronunciacion: 'spokóynoy nóchi', ejemplo: 'Спокойной ночи, сладких снов. (Buenas noches, dulces sueños.)', opciones: ['Buenas noches (dormir)', 'Buenos días', 'Buenas tardes', 'Hola'], audio: 'spokoynoy_nochi' },
        { ruso: 'До встречи', nombre: 'Hasta luego', pronunciacion: 'do vstréchi', ejemplo: 'До встречи на следующей неделе. (Hasta luego la próxima semana.)', opciones: ['Hasta luego', 'Adiós', 'Hola', 'Nos vemos'], audio: 'do_vstrechi' },
        { ruso: 'Как дела?', nombre: '¿Cómo estás?', pronunciacion: 'kak delá?', ejemplo: 'Привет! Как дела? (¡Hola! ¿Cómo estás?)', opciones: ['¿Cómo estás?', '¿Qué hora es?', '¿Cómo te llamas?', '¿De dónde eres?'], audio: 'kak_dela' }
    ],
    
    // MAZO 6: Expresiones de Cortesía
    6: [
        { ruso: 'Спасибо', nombre: 'Gracias', pronunciacion: 'spasíbo', ejemplo: 'Спасибо за помощь. (Gracias por la ayuda.)', opciones: ['Gracias', 'De nada', 'Por favor', 'Lo siento'], audio: 'spasibo' },
        { ruso: 'Пожалуйста', nombre: 'Por favor/De nada', pronunciacion: 'pozhálusta', ejemplo: 'Пожалуйста, присаживайтесь. (Por favor, siéntese.)', opciones: ['Por favor/De nada', 'Gracias', 'Lo siento', 'Hola'], audio: 'pozhaluysta' },
        { ruso: 'Извините', nombre: 'Disculpe/Perdón', pronunciacion: 'izviníte', ejemplo: 'Извините за опоздание. (Disculpe por llegar tarde.)', opciones: ['Disculpe/Perdón', 'Gracias', 'Por favor', 'De nada'], audio: 'izvinite' },
        { ruso: 'Простите', nombre: 'Perdóname', pronunciacion: 'prostíte', ejemplo: 'Простите, я не понял. (Perdóname, no entendí.)', opciones: ['Perdóname', 'Disculpe', 'Gracias', 'Por favor'], audio: 'prostite' },
        { ruso: 'Будьте здоровы', nombre: 'Salud (al estornudar)', pronunciacion: 'búdʹte zdoróvy', ejemplo: '— Апчхи! — Будьте здоровы! (—¡Achís! —¡Salud!)', opciones: ['Salud', 'Gracias', 'De nada', 'Buen provecho'], audio: 'budte_zdorovy' },
        { ruso: 'Удачи', nombre: 'Buena suerte', pronunciacion: 'udáchi', ejemplo: 'Удачи на экзамене! (¡Buena suerte en el examen!)', opciones: ['Buena suerte', 'Felicitaciones', 'Gracias', 'Bienvenido'], audio: 'udachi' },
        { ruso: 'Поздравляю', nombre: 'Felicitaciones', pronunciacion: 'pozdravlyáyu', ejemplo: 'Поздравляю с днём рождения! (¡Feliz cumpleaños!)', opciones: ['Felicitaciones', 'Buena suerte', 'Gracias', 'Salud'], audio: 'pozdravlyayu' },
        { ruso: 'Желаю удачи', nombre: 'Te deseo suerte', pronunciacion: 'zheláyu udáchi', ejemplo: 'Желаю удачи в новом проекте. (Te deseo suerte en el nuevo proyecto.)', opciones: ['Te deseo suerte', 'Felicitaciones', 'Gracias', 'Bienvenido'], audio: 'zhelayu_udachi' },
        { ruso: 'Береги себя', nombre: 'Cuídate', pronunciacion: 'beregí sebyá', ejemplo: 'Береги себя, увидимся скоро. (Cuídate, nos vemos pronto.)', opciones: ['Cuídate', 'Adiós', 'Hola', 'Gracias'], audio: 'beregi_sebya' },
        { ruso: 'Всего хорошего', nombre: 'Todo lo mejor', pronunciacion: 'vsevó khoróshevo', ejemplo: 'Всего хорошего! До свидания. (¡Todo lo mejor! Adiós.)', opciones: ['Todo lo mejor', 'Buena suerte', 'Cuídate', 'Gracias'], audio: 'vsego_horoshego' }
    ],
    
    // MAZO 7: Personas y Familia
    7: [
        { ruso: 'Человек', nombre: 'Persona', pronunciacion: 'chelovek', ejemplo: 'Он хороший человек. (Él es una buena persona.)', opciones: ['Persona', 'Hombre', 'Mujer', 'Niño'], audio: 'chelovek' },
        { ruso: 'Мужчина', nombre: 'Hombre', pronunciacion: 'muzhchína', ejemplo: 'Этот мужчина мой отец. (Este hombre es mi padre.)', opciones: ['Hombre', 'Mujer', 'Persona', 'Niño'], audio: 'muzhchina' },
        { ruso: 'Женщина', nombre: 'Mujer', pronunciacion: 'zhénshchina', ejemplo: 'Эта женщина моя мама. (Esta mujer es mi mamá.)', opciones: ['Mujer', 'Hombre', 'Niña', 'Persona'], audio: 'zhenshchina' },
        { ruso: 'Мальчик', nombre: 'Niño', pronunciacion: 'málʹchik', ejemplo: 'Мальчик играет в парке. (El niño juega en el parque.)', opciones: ['Niño', 'Niña', 'Hombre', 'Mujer'], audio: 'malchik' },
        { ruso: 'Девочка', nombre: 'Niña', pronunciacion: 'dévochka', ejemplo: 'Девочка читает книгу. (La niña lee un libro.)', opciones: ['Niña', 'Niño', 'Mujer', 'Hombre'], audio: 'devochka' },
        { ruso: 'Друг', nombre: 'Amigo (m)', pronunciacion: 'drug', ejemplo: 'Он мой лучший друг. (Él es mi mejor amigo.)', opciones: ['Amigo (m)', 'Amiga (f)', 'Hermano', 'Padre'], audio: 'drug' },
        { ruso: 'Подруга', nombre: 'Amiga (f)', pronunciacion: 'podrúga', ejemplo: 'Она моя школьная подруга. (Ella es mi amiga de la escuela.)', opciones: ['Amiga (f)', 'Amigo (m)', 'Hermana', 'Madre'], audio: 'podruga' },
        { ruso: 'Семья', nombre: 'Familia', pronunciacion: 'semʹyá', ejemplo: 'Моя семья очень большая. (Mi familia es muy grande.)', opciones: ['Familia', 'Amigos', 'Casa', 'Trabajo'], audio: 'semya' },
        { ruso: 'Мама', nombre: 'Mamá', pronunciacion: 'máma', ejemplo: 'Мама готовит ужин. (Mamá prepara la cena.)', opciones: ['Mamá', 'Papá', 'Hermana', 'Abuela'], audio: 'mama' },
        { ruso: 'Папа', nombre: 'Papá', pronunciacion: 'pápa', ejemplo: 'Папа работает в офисе. (Papá trabaja en una oficina.)', opciones: ['Papá', 'Mamá', 'Hermano', 'Abuelo'], audio: 'papa' }
    ],
    
    // MAZO 8: Comida y Bebida
    8: [
        { ruso: 'Еда', nombre: 'Comida', pronunciacion: 'yedá', ejemplo: 'Русская еда очень вкусная. (La comida rusa es muy sabrosa.)', opciones: ['Comida', 'Agua', 'Bebida', 'Pan'], audio: 'eda' },
        { ruso: 'Вода', nombre: 'Agua', pronunciacion: 'vodá', ejemplo: 'Мне нужно пить воду. (Necesito beber agua.)', opciones: ['Agua', 'Comida', 'Pan', 'Leche'], audio: 'voda' },
        { ruso: 'Хлеб', nombre: 'Pan', pronunciacion: 'khleb', ejemplo: 'Свежий хлеб пахнет чудесно. (El pan fresco huele maravilloso.)', opciones: ['Pan', 'Agua', 'Leche', 'Carne'], audio: 'khleb' },
        { ruso: 'Молоко', nombre: 'Leche', pronunciacion: 'molokó', ejemplo: 'Дети пьют молоко на завтрак. (Los niños beben leche en el desayuno.)', opciones: ['Leche', 'Agua', 'Pan', 'Café'], audio: 'moloko' },
        { ruso: 'Кофе', nombre: 'Café', pronunciacion: 'kófe', ejemplo: 'Я пью кофе каждое утро. (Bebo café cada mañana.)', opciones: ['Café', 'Té', 'Agua', 'Leche'], audio: 'kofe' },
        { ruso: 'Чай', nombre: 'Té', pronunciacion: 'chay', ejemplo: 'Русские любят пить чай. (A los rusos les gusta beber té.)', opciones: ['Té', 'Café', 'Agua', 'Leche'], audio: 'chay' },
        { ruso: 'Суп', nombre: 'Sopa', pronunciacion: 'sup', ejemplo: 'Борщ - это русский суп. (El borscht es una sopa rusa.)', opciones: ['Sopa', 'Pan', 'Carne', 'Pescado'], audio: 'sup' },
        { ruso: 'Мясо', nombre: 'Carne', pronunciacion: 'myáso', ejemplo: 'На ужин у нас будет мясо. (Tendremos carne para la cena.)', opciones: ['Carne', 'Pescado', 'Pan', 'Vegetales'], audio: 'myaso' },
        { ruso: 'Рыба', nombre: 'Pescado', pronunciacion: 'rýba', ejemplo: 'Рыба полезна для здоровья. (El pescado es bueno para la salud.)', opciones: ['Pescado', 'Carne', 'Pan', 'Fruta'], audio: 'ryba' },
        { ruso: 'Фрукты', nombre: 'Frutas', pronunciacion: 'fruktý', ejemplo: 'Я покупаю фрукты на рынке. (Compro frutas en el mercado.)', opciones: ['Frutas', 'Vegetales', 'Carne', 'Pan'], audio: 'frukty' }
    ],
    
    // MAZO 9: Lugares y Direcciones
    9: [
        { ruso: 'Город', nombre: 'Ciudad', pronunciacion: 'górod', ejemplo: 'Москва - большой город. (Moscú es una gran ciudad.)', opciones: ['Ciudad', 'Calle', 'Casa', 'País'], audio: 'gorod' },
        { ruso: 'Дом', nombre: 'Casa', pronunciacion: 'dom', ejemplo: 'Мой дом находится в центре. (Mi casa está en el centro.)', opciones: ['Casa', 'Ciudad', 'Calle', 'Tienda'], audio: 'dom' },
        { ruso: 'Улица', nombre: 'Calle', pronunciacion: 'úlitsa', ejemplo: 'Эта улица очень оживлённая. (Esta calle es muy concurrida.)', opciones: ['Calle', 'Ciudad', 'Casa', 'Parque'], audio: 'ulitsa' },
        { ruso: 'Магазин', nombre: 'Tienda', pronunciacion: 'magazín', ejemplo: 'Я иду в магазин за продуктами. (Voy a la tienda por alimentos.)', opciones: ['Tienda', 'Casa', 'Restaurante', 'Parque'], audio: 'magazin' },
        { ruso: 'Ресторан', nombre: 'Restaurante', pronunciacion: 'restorán', ejemplo: 'Мы ужинаем в ресторане. (Cenamos en un restaurante.)', opciones: ['Restaurante', 'Tienda', 'Casa', 'Parque'], audio: 'restoran' },
        { ruso: 'Парк', nombre: 'Parque', pronunciacion: 'park', ejemplo: 'Дети играют в парке. (Los niños juegan en el parque.)', opciones: ['Parке', 'Calle', 'Ciudad', 'Restaurante'], audio: 'park' },
        { ruso: 'Больница', nombre: 'Hospital', pronunciacion: 'bolʹnítsa', ejemplo: 'Она работает в больнице. (Ella trabaja en un hospital.)', opciones: ['Hospital', 'Escuela', 'Tienda', 'Restaurante'], audio: 'bolnitsa' },
        { ruso: 'Школа', nombre: 'Escuela', pronunciacion: 'shkóla', ejemplo: 'Дети учатся в школе. (Los niños estudian en la escuela.)', opciones: ['Escuela', 'Hospital', 'Universidad', 'Parque'], audio: 'shkola' },
        { ruso: 'Работа', nombre: 'Trabajo', pronunciacion: 'rabóta', ejemplo: 'Он идёт на работу. (Él va al trabajo.)', opciones: ['Trabajo', 'Casa', 'Escuela', 'Tienda'], audio: 'rabota' },
        { ruso: 'Страна', nombre: 'País', pronunciacion: 'straná', ejemplo: 'Россия - большая страна. (Rusia es un país grande.)', opciones: ['País', 'Ciudad', 'Calle', 'Casa'], audio: 'strana' }
    ],
    
    // MAZO 10: Números (1-10)
    10: [
        { ruso: 'Один', nombre: 'Uno', pronunciacion: 'odín', ejemplo: 'У меня есть одна книга. (Tengo un libro.)', opciones: ['Uno', 'Dos', 'Tres', 'Cuatro'], audio: 'odin' },
        { ruso: 'Два', nombre: 'Dos', pronunciacion: 'dva', ejemplo: 'У меня два брата. (Tengo dos hermanos.)', opciones: ['Dos', 'Uno', 'Tres', 'Cuatro'], audio: 'dva' },
        { ruso: 'Три', nombre: 'Tres', pronunciacion: 'tri', ejemplo: 'Через три дня. (En tres días.)', opciones: ['Tres', 'Uno', 'Dos', 'Cuatro'], audio: 'tri' },
        { ruso: 'Четыре', nombre: 'Cuatro', pronunciacion: 'chetýre', ejemplo: 'У стола четыре ноги. (La mesa tiene cuatro patas.)', opciones: ['Cuatro', 'Uno', 'Dos', 'Tres'], audio: 'chetyre' },
        { ruso: 'Пять', nombre: 'Cinco', pronunciacion: 'pyatʹ', ejemplo: 'Пять пальцев на руке. (Cinco dedos en la mano.)', opciones: ['Cinco', 'Cuatro', 'Seis', 'Siete'], audio: 'pyat' },
        { ruso: 'Шесть', nombre: 'Seis', pronunciacion: 'shestʹ', ejemplo: 'Шесть дней в неделе. (Seis días en la semana.)', opciones: ['Seis', 'Cinco', 'Siete', 'Ocho'], audio: 'shest' },
        { ruso: 'Семь', nombre: 'Siete', pronunciacion: 'semʹ', ejemplo: 'Семь цветов радуги. (Siete colores del arcoíris.)', opciones: ['Siete', 'Seis', 'Ocho', 'Nueve'], audio: 'sem' },
        { ruso: 'Восемь', nombre: 'Ocho', pronunciacion: 'vósemʹ', ejemplo: 'Восемь ног у паука. (Ocho patas tiene una araña.)', opciones: ['Ocho', 'Siete', 'Nueve', 'Diez'], audio: 'vosem' },
        { ruso: 'Девять', nombre: 'Nueve', pronunciacion: 'dévytʹ', ejemplo: 'Кошка имеет девять жизней. (El gato tiene nueve vidas.)', opciones: ['Nueve', 'Ocho', 'Diez', 'Siete'], audio: 'devyat' },
        { ruso: 'Десять', nombre: 'Diez', pronunciacion: 'désyatʹ', ejemplo: 'Десять пальцев на руках. (Diez dedos en las manos.)', opciones: ['Diez', 'Nueve', 'Ocho', 'Siete'], audio: 'desyat' }
    ],
    
    // MAZO 11: Tiempo y Clima
    11: [
        { ruso: 'Время', nombre: 'Tiempo/Hora', pronunciacion: 'vrémya', ejemplo: 'Сколько сейчас времени? (¿Qué hora es ahora?)', opciones: ['Tiempo/Hora', 'Día', 'Año', 'Mes'], audio: 'vremya' },
        { ruso: 'День', nombre: 'Día', pronunciacion: 'denʹ', ejemplo: 'Сегодня прекрасный день. (Hoy es un día hermoso.)', opciones: ['Día', 'Noche', 'Tiempo', 'Semana'], audio: 'den' },
        { ruso: 'Ночь', nombre: 'Noche', pronunciacion: 'nochʹ', ejemplo: 'Ночью звёзды светят ярко. (Por la noche las estrellas brillan intensamente.)', opciones: ['Noche', 'Día', 'Tarde', 'Mañana'], audio: 'noch' },
        { ruso: 'Сегодня', nombre: 'Hoy', pronunciacion: 'sevódnya', ejemplo: 'Сегодня я иду в кино. (Hoy voy al cine.)', opciones: ['Hoy', 'Mañana', 'Ayer', 'Ahora'], audio: 'segodnya' },
        { ruso: 'Завтра', nombre: 'Mañana', pronunciacion: 'závtra', ejemplo: 'Завтра будет дождь. (Mañana lloverá.)', opciones: ['Mañana', 'Hoy', 'Ayer', 'Ahora'], audio: 'zavtra' },
        { ruso: 'Вчера', nombre: 'Ayer', pronunciacion: 'vcherá', ejemplo: 'Вчера я был в театре. (Ayer estuve en el teatro.)', opciones: ['Ayer', 'Hoy', 'Mañana', 'Ahora'], audio: 'vchera' },
        { ruso: 'Погода', nombre: 'Clima', pronunciacion: 'pogóda', ejemplo: 'Погода сегодня хорошая. (El clima hoy es bueno.)', opciones: ['Clima', 'Tiempo', 'Día', 'Noche'], audio: 'pogoda' },
        { ruso: 'Солнце', nombre: 'Sol', pronunciacion: 'sóntse', ejemplo: 'Солнце светит ярко. (El sol brilla intensamente.)', opciones: ['Sol', 'Luna', 'Lluvia', 'Nieve'], audio: 'solntse' },
        { ruso: 'Дождь', nombre: 'Lluvia', pronunciacion: 'dozhdʹ', ejemplo: 'Сегодня сильный дождь. (Hoy hay una fuerte lluvia.)', opciones: ['Lluvia', 'Nieve', 'Sol', 'Viento'], audio: 'dozhd' },
        { ruso: 'Снег', nombre: 'Nieve', pronunciacion: 'sneg', ejemplo: 'Зимой идет снег. (En invierno cae nieve.)', opciones: ['Nieve', 'Lluvia', 'Sol', 'Viento'], audio: 'sneg' }
    ],
    
    // MAZO 12: Verbos Básicos
    12: [
        { ruso: 'Говорить', nombre: 'Hablar', pronunciacion: 'govorítʹ', ejemplo: 'Я говорю по-русски. (Hablo ruso.)', opciones: ['Hablar', 'Escuchar', 'Leer', 'Escribir'], audio: 'govorit' },
        { ruso: 'Слушать', nombre: 'Escuchar', pronunciacion: 'slúshatʹ', ejemplo: 'Я слушаю музыку. (Escucho música.)', opciones: ['Escuchar', 'Hablar', 'Leer', 'Ver'], audio: 'slushat' },
        { ruso: 'Видеть', nombre: 'Ver', pronunciacion: 'vídetʹ', ejemplo: 'Я вижу красивый пейзаж. (Veo un hermoso paisaje.)', opciones: ['Ver', 'Escuchar', 'Hablar', 'Leer'], audio: 'videt' },
        { ruso: 'Читать', nombre: 'Leer', pronunciacion: 'chitátʹ', ejemplo: 'Он любит читать книги. (A él le gusta leer libros.)', opciones: ['Leer', 'Escribir', 'Hablar', 'Escuchar'], audio: 'chitat' },
        { ruso: 'Писать', nombre: 'Escribir', pronunciacion: 'pisátʹ', ejemplo: 'Я пишу письмо. (Escribo una carta.)', opciones: ['Escribir', 'Leer', 'Hablar', 'Escuchar'], audio: 'pisat' },
        { ruso: 'Знать', nombre: 'Saber/Conocer', pronunciacion: 'znatʹ', ejemplo: 'Я знаю этот город. (Conozco esta ciudad.)', opciones: ['Saber/Conocer', 'Pensar', 'Entender', 'Aprender'], audio: 'znat' },
        { ruso: 'Понимать', nombre: 'Entender', pronunciacion: 'ponimátʹ', ejemplo: 'Я понимаю по-русски. (Entiendo ruso.)', opciones: ['Entender', 'Saber', 'Aprender', 'Enseñar'], audio: 'ponimat' },
        { ruso: 'Учить', nombre: 'Aprender/Enseñar', pronunciacion: 'uchítʹ', ejemplo: 'Я учу русский язык. (Aprendo ruso.)', opciones: ['Aprender/Enseñar', 'Entender', 'Saber', 'Hablar'], audio: 'uchit' },
        { ruso: 'Работать', nombre: 'Trabajar', pronunciacion: 'rabótatʹ', ejemplo: 'Она работает врачом. (Ella trabaja como doctora.)', opciones: ['Trabajar', 'Estudiar', 'Descansar', 'Jugar'], audio: 'rabotat' },
        { ruso: 'Жить', nombre: 'Vivir', pronunciacion: 'zhitʹ', ejemplo: 'Я живу в Москве. (Vivo en Moscú.)', opciones: ['Vivir', 'Trabajar', 'Estudiar', 'Viajar'], audio: 'zhit' }
    ],
    
    // MAZO 13: Adjetivos Básicos
    13: [
        { ruso: 'Хороший', nombre: 'Bueno (m)', pronunciacion: 'khoróshiy', ejemplo: 'Он хороший человек. (Él es una buena persona.)', opciones: ['Bueno (m)', 'Malo (m)', 'Grande (m)', 'Pequeño (m)'], audio: 'horoshiy' },
        { ruso: 'Плохой', nombre: 'Malo (m)', pronunciacion: 'plokhóy', ejemplo: 'Это плохая идея. (Esta es una mala idea.)', opciones: ['Malo (m)', 'Bueno (m)', 'Grande (m)', 'Pequeño (m)'], audio: 'plohoy' },
        { ruso: 'Большой', nombre: 'Grande (m)', pronunciacion: 'bolʹshóy', ejemplo: 'Это большой дом. (Esta es una casa grande.)', opciones: ['Grande (m)', 'Pequeño (m)', 'Bueno (m)', 'Malo (m)'], audio: 'bolshoy' },
        { ruso: 'Маленький', nombre: 'Pequeño (m)', pronunciacion: 'málenʹkiy', ejemplo: 'У меня маленькая комната. (Tengo una habitación pequeña.)', opciones: ['Pequeño (m)', 'Grande (m)', 'Bueno (m)', 'Malo (m)'], audio: 'malenkiy' },
        { ruso: 'Красивый', nombre: 'Hermoso (m)', pronunciacion: 'krasívyy', ejemplo: 'Красивый пейзаж. (Hermoso paisaje.)', opciones: ['Hermoso (m)', 'Feo (m)', 'Grande (m)', 'Pequeño (m)'], audio: 'krasivyy' },
        { ruso: 'Новый', nombre: 'Nuevo (m)', pronunciacion: 'nóvyy', ejemplo: 'У меня новый компьютер. (Tengo una computadora nueva.)', opciones: ['Nuevo (m)', 'Viejo (m)', 'Bueno (m)', 'Malo (m)'], audio: 'novyy' },
        { ruso: 'Старый', nombre: 'Viejo (m)', pronunciacion: 'stáryy', ejemplo: 'Старый друг. (Un viejo amigo.)', opciones: ['Viejo (m)', 'Nuevo (m)', 'Grande (m)', 'Pequeño (m)'], audio: 'staryy' },
        { ruso: 'Дорогой', nombre: 'Caro (m)', pronunciacion: 'dorogóy', ejemplo: 'Это дорогой ресторан. (Este es un restaurante caro.)', opciones: ['Caro (m)', 'Barato (m)', 'Nuevo (m)', 'Viejo (m)'], audio: 'dorogoy' },
        { ruso: 'Дешёвый', nombre: 'Barato (m)', pronunciacion: 'deshyóvyy', ejemplo: 'Дешёвые билеты. (Boletos baratos.)', opciones: ['Barato (m)', 'Caro (m)', 'Nuevo (m)', 'Viejo (m)'], audio: 'deshevyy' },
        { ruso: 'Интересный', nombre: 'Interesante (m)', pronunciacion: 'interésnyy', ejemplo: 'Интересный фильм. (Película interesante.)', opciones: ['Interesante (m)', 'Aburrido (m)', 'Bueno (m)', 'Malo (m)'], audio: 'interesnyy' }
    ],
    
    // MAZO 14: Objetos Comunes
    14: [
        { ruso: 'Книга', nombre: 'Libro', pronunciacion: 'kníga', ejemplo: 'Я читаю интересную книгу. (Leo un libro interesante.)', opciones: ['Libro', 'Periódico', 'Revista', 'Cuaderno'], audio: 'kniga' },
        { ruso: 'Ручка', nombre: 'Bolígrafo', pronunciacion: 'rúchka', ejemplo: 'Мне нужна ручка, чтобы писать. (Necesito un bolígrafo para escribir.)', opciones: ['Bolígrafo', 'Lápiz', 'Tijeras', 'Regla'], audio: 'ruchka' },
        { ruso: 'Стол', nombre: 'Mesa', pronunciacion: 'stol', ejemplo: 'На столе лежат книги. (Los libros están sobre la mesa.)', opciones: ['Mesa', 'Silla', 'Cama', 'Armario'], audio: 'stol' },
        { ruso: 'Стул', nombre: 'Silla', pronunciacion: 'stul', ejemplo: 'Сядьте на стул, пожалуйста. (Siéntese en la silla, por favor.)', opciones: ['Silla', 'Mesa', 'Sofá', 'Cama'], audio: 'stul' },
        { ruso: 'Окно', nombre: 'Ventana', pronunciacion: 'oknó', ejemplo: 'Окно открыто. (La ventana está abierta.)', opciones: ['Ventana', 'Puerta', 'Pared', 'Techo'], audio: 'okno' },
        { ruso: 'Дверь', nombre: 'Puerta', pronunciacion: 'dverʹ', ejemplo: 'Дверь закрыта. (La puerta está cerrada.)', opciones: ['Puerta', 'Ventana', 'Pared', 'Suelo'], audio: 'dver' },
        { ruso: 'Телефон', nombre: 'Teléfono', pronunciacion: 'telefón', ejemplo: 'Мой телефон звонит. (Mi teléfono está sonando.)', opciones: ['Teléfono', 'Computadora', 'Televisión', 'Radio'], audio: 'telefon' },
        { ruso: 'Компьютер', nombre: 'Computadora', pronunciacion: 'kompʹyúter', ejemplo: 'Я работаю на компьютере. (Trabajo en la computadora.)', opciones: ['Computadora', 'Teléfono', 'Televisión', 'Tableta'], audio: 'kompyuter' },
        { ruso: 'Деньги', nombre: 'Dinero', pronunciacion: 'dénʹgi', ejemplo: 'У меня нет денег. (No tengo dinero.)', opciones: ['Dinero', 'Tarjeta', 'Moneda', 'Billete'], audio: 'dengi' },
        { ruso: 'Часы', nombre: 'Reloj', pronunciacion: 'chasý', ejemplo: 'Мои часы остановились. (Mi reloj se detuvo.)', opciones: ['Reloj', 'Teléfono', 'Computadora', 'Radio'], audio: 'chasy' }
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
        4: 'Signos y Palabras Básicas',
        5: 'Saludos y Despedidas',
        6: 'Expresiones de Cortesía',
        7: 'Personas y Familia',
        8: 'Comida y Bebida',
        9: 'Lugares y Direcciones',
        10: 'Números (1-10)',
        11: 'Tiempo y Clima',
        12: 'Verbos Básicos',
        13: 'Adjetivos Básicos',
        14: 'Objetos Comunes'
    };
    return nombres[mazo] || `Mazo ${mazo}`;
}
