// ================================================
// CHINO MANDARÍN - TOP 100 PALABRAS MÁS USADAS (PALABRAS COMPLETAS)
// 10 mazos de 10 palabras cada uno
// ================================================

const vocabularioChino = {
    // MAZO 1: Las 10 palabras más usadas (Básicas)
    1: [
        { hanzi: '你好', pinyin: 'nǐ hǎo', significado: 'Hola', ejemplo: '你好吗？ (nǐ hǎo ma?) - ¿Cómo estás?', opciones: ['nǐ hǎo', 'nǐ hào', 'ní hǎo', 'ní hào'], respuesta: 0, audio: 'nihao' },
        { hanzi: '谢谢', pinyin: 'xièxie', significado: 'Gracias', ejemplo: '谢谢你 (xièxie nǐ) - gracias a ti', opciones: ['xiēxiē', 'xiéxié', 'xiěxiě', 'xièxie'], respuesta: 3, audio: 'xiexie' },
        { hanzi: '对不起', pinyin: 'duìbuqǐ', significado: 'Lo siento/Disculpa', ejemplo: '对不起，我来晚了 (duìbuqǐ, wǒ lái wǎn le) - Lo siento, llegué tarde', opciones: ['duībuqǐ', 'duíbuqǐ', 'duǐbuqǐ', 'duìbuqǐ'], respuesta: 3, audio: 'duibuqi' },
        { hanzi: '是', pinyin: 'shì', significado: 'Sí/Ser', ejemplo: '是的 (shì de) - sí', opciones: ['shī', 'shí', 'shǐ', 'shì'], respuesta: 3, audio: 'shi4' },
        { hanzi: '不是', pinyin: 'bù shì', significado: 'No', ejemplo: '他不是老师 (tā bù shì lǎoshī) - él no es profesor', opciones: ['bū shì', 'bú shì', 'bǔ shì', 'bù shì'], respuesta: 3, audio: 'bushi' },
        { hanzi: '我', pinyin: 'wǒ', significado: 'Yo', ejemplo: '我爱你 (wǒ ài nǐ) - te amo', opciones: ['wō', 'wó', 'wǒ', 'wò'], respuesta: 2, audio: 'wo3' },
        { hanzi: '你', pinyin: 'nǐ', significado: 'Tú', ejemplo: '你叫什么名字？ (nǐ jiào shénme míngzi?) - ¿Cómo te llamas?', opciones: ['nī', 'ní', 'nǐ', 'nì'], respuesta: 2, audio: 'ni3' },
        { hanzi: '他', pinyin: 'tā', significado: 'Él', ejemplo: '他是我的朋友 (tā shì wǒ de péngyou) - él es mi amigo', opciones: ['tā', 'tá', 'tǎ', 'tà'], respuesta: 0, audio: 'ta1' },
        { hanzi: '她', pinyin: 'tā', significado: 'Ella', ejemplo: '她很漂亮 (tā hěn piàoliang) - ella es muy bonita', opciones: ['tā', 'tá', 'tǎ', 'tà'], respuesta: 0, audio: 'ta1' },
        { hanzi: '我们', pinyin: 'wǒmen', significado: 'Nosotros', ejemplo: '我们去吃饭 (wǒmen qù chīfàn) - vamos a comer', opciones: ['wōmen', 'wómen', 'wǒmen', 'wòmen'], respuesta: 2, audio: 'women' }
    ],
    
    // MAZO 2: Top 11-20 (Saludos y preguntas)
    2: [
        { hanzi: '再见', pinyin: 'zàijiàn', significado: 'Adiós', ejemplo: '明天见 (míngtiān jiàn) - hasta mañana', opciones: ['zāijiàn', 'záijiàn', 'zǎijiàn', 'zàijiàn'], respuesta: 3, audio: 'zaijian' },
        { hanzi: '请', pinyin: 'qǐng', significado: 'Por favor', ejemplo: '请坐 (qǐng zuò) - por favor, siéntate', opciones: ['qīng', 'qíng', 'qǐng', 'qìng'], respuesta: 2, audio: 'qing3' },
        { hanzi: '没关系', pinyin: 'méi guānxi', significado: 'No importa/De nada', ejemplo: '没关系，不用谢 (méi guānxi, bú yòng xiè) - de nada, no hay problema', opciones: ['méi guānxī', 'méi guánxi', 'méi guǎnxi', 'méi guānxi'], respuesta: 3, audio: 'meiguanxi' },
        { hanzi: '什么', pinyin: 'shénme', significado: 'Qué', ejemplo: '这是什么？ (zhè shì shénme?) - ¿qué es esto?', opciones: ['shēnmē', 'shénmé', 'shěnmè', 'shénme'], respuesta: 3, audio: 'shenme' },
        { hanzi: '谁', pinyin: 'shéi', significado: 'Quién', ejemplo: '他是谁？ (tā shì shéi?) - ¿quién es él?', opciones: ['shēi', 'shéi', 'shěi', 'shèi'], respuesta: 1, audio: 'shei2' },
        { hanzi: '哪里', pinyin: 'nǎlǐ', significado: 'Dónde', ejemplo: '厕所在哪里？ (cèsuǒ zài nǎlǐ?) - ¿dónde está el baño?', opciones: ['nālǐ', 'nálǐ', 'nǎlǐ', 'nàlǐ'], respuesta: 2, audio: 'nali' },
        { hanzi: '为什么', pinyin: 'wèishénme', significado: 'Por qué', ejemplo: '你为什么迟到？ (nǐ wèishénme chídào?) - ¿por qué llegaste tarde?', opciones: ['wēishénme', 'wéishénme', 'wěishénme', 'wèishénme'], respuesta: 3, audio: 'weishenme' },
        { hanzi: '怎么样', pinyin: 'zěnmeyàng', significado: 'Cómo', ejemplo: '你觉得怎么样？ (nǐ juéde zěnmeyàng?) - ¿qué te parece?', opciones: ['zēnmeyàng', 'zénmeyàng', 'zěnmeyàng', 'zènmeyàng'], respuesta: 2, audio: 'zenmeyang' },
        { hanzi: '多少', pinyin: 'duōshǎo', significado: 'Cuánto/Cuántos', ejemplo: '多少钱？ (duōshǎo qián?) - ¿cuánto cuesta?', opciones: ['duōshāo', 'duóshǎo', 'duǒshǎo', 'duōshǎo'], respuesta: 3, audio: 'duoshao' },
        { hanzi: '多少岁', pinyin: 'duōshǎo suì', significado: 'Cuántos años', ejemplo: '你多少岁？ (nǐ duōshǎo suì?) - ¿cuántos años tienes?', opciones: ['duōshāo suì', 'duóshǎo suì', 'duǒshǎo suì', 'duōshǎo suì'], respuesta: 3, audio: 'duoshao' }
    ],
    
    // MAZO 3: Top 21-30 (Tiempo y lugar)
    3: [
        { hanzi: '今天', pinyin: 'jīntiān', significado: 'Hoy', ejemplo: '今天天气很好 (jīntiān tiānqì hěn hǎo) - hoy hace buen tiempo', opciones: ['jīntiān', 'jíntiān', 'jǐntiān', 'jìntiān'], respuesta: 0, audio: 'jintian' },
        { hanzi: '明天', pinyin: 'míngtiān', significado: 'Mañana', ejemplo: '明天见 (míngtiān jiàn) - hasta mañana', opciones: ['mīngtiān', 'míngtiān', 'mǐngtiān', 'mìngtiān'], respuesta: 1, audio: 'mingtian' },
        { hanzi: '昨天', pinyin: 'zuótiān', significado: 'Ayer', ejemplo: '昨天我去了学校 (zuótiān wǒ qù le xuéxiào) - ayer fui a la escuela', opciones: ['zuōtiān', 'zuótiān', 'zuǒtiān', 'zuòtiān'], respuesta: 1, audio: 'zuotian' },
        { hanzi: '现在', pinyin: 'xiànzài', significado: 'Ahora', ejemplo: '现在几点？ (xiànzài jǐ diǎn?) - ¿qué hora es ahora?', opciones: ['xiānzài', 'xiánzài', 'xiǎnzài', 'xiànzài'], respuesta: 3, audio: 'xianzai' },
        { hanzi: '以后', pinyin: 'yǐhòu', significado: 'Después/Más tarde', ejemplo: '以后再说 (yǐhòu zàishuō) - hablamos después', opciones: ['yīhòu', 'yíhòu', 'yǐhòu', 'yìhòu'], respuesta: 2, audio: 'yihou' },
        { hanzi: '这里', pinyin: 'zhèlǐ', significado: 'Aquí', ejemplo: '请来这里 (qǐng lái zhèlǐ) - por favor, ven aquí', opciones: ['zhēlǐ', 'zhélǐ', 'zhělǐ', 'zhèlǐ'], respuesta: 3, audio: 'zheli' },
        { hanzi: '那里', pinyin: 'nàlǐ', significado: 'Allí', ejemplo: '车在那里 (chē zài nàlǐ) - el coche está allí', opciones: ['nālǐ', 'nálǐ', 'nǎlǐ', 'nàlǐ'], respuesta: 3, audio: 'nali' },
        { hanzi: '里面', pinyin: 'lǐmiàn', significado: 'Adentro/Dentro', ejemplo: '在里面 (zài lǐmiàn) - está dentro', opciones: ['līmiàn', 'límiàn', 'lǐmiàn', 'lìmiàn'], respuesta: 2, audio: 'limian' },
        { hanzi: '外面', pinyin: 'wàimiàn', significado: 'Afuera/Fuera', ejemplo: '在外面玩 (zài wàimiàn wán) - jugar afuera', opciones: ['wāimiàn', 'wáimiàn', 'wǎimiàn', 'wàimiàn'], respuesta: 3, audio: 'waimian' },
        { hanzi: '上面', pinyin: 'shàngmiàn', significado: 'Arriba/Encima', ejemplo: '在桌子上面 (zài zhuōzi shàngmiàn) - encima de la mesa', opciones: ['shāngmiàn', 'shángmiàn', 'shǎngmiàn', 'shàngmiàn'], respuesta: 3, audio: 'shangmian' }
    ],
    
    // MAZO 4: Top 31-40 (Comida y bebida)
    4: [
        { hanzi: '水', pinyin: 'shuǐ', significado: 'Agua', ejemplo: '我要水 (wǒ yào shuǐ) - quiero agua', opciones: ['shuī', 'shuí', 'shuǐ', 'shuì'], respuesta: 2, audio: 'shui3' },
        { hanzi: '茶', pinyin: 'chá', significado: 'Té', ejemplo: '绿茶 (lǜ chá) - té verde', opciones: ['chā', 'chá', 'chǎ', 'chà'], respuesta: 1, audio: 'cha2' },
        { hanzi: '咖啡', pinyin: 'kāfēi', significado: 'Café', ejemplo: '一杯咖啡 (yī bēi kāfēi) - una taza de café', opciones: ['kāfēi', 'káfēi', 'kǎfēi', 'kàfēi'], respuesta: 0, audio: 'kafei' },
        { hanzi: '饭', pinyin: 'fàn', significado: 'Arroz/Comida', ejemplo: '吃饭 (chī fàn) - comer', opciones: ['fān', 'fán', 'fǎn', 'fàn'], respuesta: 3, audio: 'fan4' },
        { hanzi: '面条', pinyin: 'miàntiáo', significado: 'Fideos', ejemplo: '吃面条 (chī miàntiáo) - comer fideos', opciones: ['miāntiáo', 'miántiáo', 'miǎntiáo', 'miàntiáo'], respuesta: 3, audio: 'miantiao' },
        { hanzi: '肉', pinyin: 'ròu', significado: 'Carne', ejemplo: '牛肉 (niú ròu) - carne de res', opciones: ['rōu', 'róu', 'rǒu', 'ròu'], respuesta: 3, audio: 'rou4' },
        { hanzi: '鱼', pinyin: 'yú', significado: 'Pez/Pescado', ejemplo: '吃鱼 (chī yú) - comer pescado', opciones: ['yū', 'yú', 'yǔ', 'yù'], respuesta: 1, audio: 'yu2' },
        { hanzi: '蔬菜', pinyin: 'shūcài', significado: 'Verduras', ejemplo: '多吃蔬菜 (duō chī shūcài) - comer más verduras', opciones: ['shūcāi', 'shúcài', 'shǔcài', 'shùcài'], respuesta: 0, audio: 'shucai' },
        { hanzi: '水果', pinyin: 'shuǐguǒ', significado: 'Fruta', ejemplo: '新鲜水果 (xīnxiān shuǐguǒ) - fruta fresca', opciones: ['shuīguǒ', 'shuíguǒ', 'shuǐguǒ', 'shuìguǒ'], respuesta: 2, audio: 'shuiguo' },
        { hanzi: '面包', pinyin: 'miànbāo', significado: 'Pan', ejemplo: '买面包 (mǎi miànbāo) - comprar pan', opciones: ['miānbāo', 'miánbāo', 'miǎnbāo', 'miànbāo'], respuesta: 3, audio: 'mianbao' }
    ],
    
    // MAZO 5: Top 41-50 (Familia y personas)
    5: [
        { hanzi: '爸爸', pinyin: 'bàba', significado: 'Papá', ejemplo: '我爸爸 (wǒ bàba) - mi papá', opciones: ['bāba', 'bába', 'bǎba', 'bàba'], respuesta: 3, audio: 'baba' },
        { hanzi: '妈妈', pinyin: 'māma', significado: 'Mamá', ejemplo: '我妈妈 (wǒ māma) - mi mamá', opciones: ['māma', 'máma', 'mǎma', 'màma'], respuesta: 0, audio: 'mama' },
        { hanzi: '哥哥', pinyin: 'gēge', significado: 'Hermano mayor', ejemplo: '我哥哥 (wǒ gēge) - mi hermano mayor', opciones: ['gēge', 'gége', 'gěge', 'gège'], respuesta: 0, audio: 'gege' },
        { hanzi: '姐姐', pinyin: 'jiějie', significado: 'Hermana mayor', ejemplo: '我姐姐 (wǒ jiějie) - mi hermana mayor', opciones: ['jiējie', 'jiéjie', 'jiějie', 'jièjie'], respuesta: 2, audio: 'jiejie' },
        { hanzi: '弟弟', pinyin: 'dìdi', significado: 'Hermano menor', ejemplo: '我弟弟 (wǒ dìdi) - mi hermano menor', opciones: ['dīdi', 'dídi', 'dǐdi', 'dìdi'], respuesta: 3, audio: 'didi' },
        { hanzi: '妹妹', pinyin: 'mèimei', significado: 'Hermana menor', ejemplo: '我妹妹 (wǒ mèimei) - mi hermana menor', opciones: ['mēimei', 'méimei', 'měimei', 'mèimei'], respuesta: 3, audio: 'meimei' },
        { hanzi: '朋友', pinyin: 'péngyou', significado: 'Amigo/Amiga', ejemplo: '好朋友 (hǎo péngyou) - buen amigo', opciones: ['pēngyou', 'péngyou', 'pěngyou', 'pèngyou'], respuesta: 1, audio: 'pengyou' },
        { hanzi: '老师', pinyin: 'lǎoshī', significado: 'Profesor/Profesora', ejemplo: '中文老师 (Zhōngwén lǎoshī) - profesor de chino', opciones: ['lāoshī', 'láoshī', 'lǎoshī', 'làoshī'], respuesta: 2, audio: 'laoshi' },
        { hanzi: '学生', pinyin: 'xuéshēng', significado: 'Estudiante', ejemplo: '我是学生 (wǒ shì xuéshēng) - soy estudiante', opciones: ['xuēshēng', 'xuéshēng', 'xuěshēng', 'xuèshēng'], respuesta: 1, audio: 'xuesheng' },
        { hanzi: '医生', pinyin: 'yīshēng', significado: 'Doctor/Médico', ejemplo: '看医生 (kàn yīshēng) - ver al doctor', opciones: ['yīshēng', 'yíshēng', 'yǐshēng', 'yìshēng'], respuesta: 0, audio: 'yisheng' }
    ],
    
    // MAZO 6: Top 51-60 (Números)
    6: [
        { hanzi: '一', pinyin: 'yī', significado: 'Uno', ejemplo: '一个人 (yī gè rén) - una persona', opciones: ['yī', 'yí', 'yǐ', 'yì'], respuesta: 0, audio: 'yi1' },
        { hanzi: '二', pinyin: 'èr', significado: 'Dos', ejemplo: '二个月 (èr gè yuè) - dos meses', opciones: ['ēr', 'ér', 'ěr', 'èr'], respuesta: 3, audio: 'er4' },
        { hanzi: '三', pinyin: 'sān', significado: 'Tres', ejemplo: '三本书 (sān běn shū) - tres libros', opciones: ['sān', 'sán', 'sǎn', 'sàn'], respuesta: 0, audio: 'san1' },
        { hanzi: '四', pinyin: 'sì', significado: 'Cuatro', ejemplo: '四天 (sì tiān) - cuatro días', opciones: ['sī', 'sí', 'sǐ', 'sì'], respuesta: 3, audio: 'si4' },
        { hanzi: '五', pinyin: 'wǔ', significado: 'Cinco', ejemplo: '五个人 (wǔ gè rén) - cinco personas', opciones: ['wū', 'wú', 'wǔ', 'wù'], respuesta: 2, audio: 'wu3' },
        { hanzi: '六', pinyin: 'liù', significado: 'Seis', ejemplo: '六点 (liù diǎn) - las seis', opciones: ['liū', 'liú', 'liǔ', 'liù'], respuesta: 3, audio: 'liu4' },
        { hanzi: '七', pinyin: 'qī', significado: 'Siete', ejemplo: '七天 (qī tiān) - siete días', opciones: ['qī', 'qí', 'qǐ', 'qì'], respuesta: 0, audio: 'qi1' },
        { hanzi: '八', pinyin: 'bā', significado: 'Ocho', ejemplo: '八块钱 (bā kuài qián) - ocho yuanes', opciones: ['bā', 'bá', 'bǎ', 'bà'], respuesta: 0, audio: 'ba1' },
        { hanzi: '九', pinyin: 'jiǔ', significado: 'Nueve', ejemplo: '九月 (jiǔ yuè) - septiembre', opciones: ['jiū', 'jiú', 'jiǔ', 'jiù'], respuesta: 2, audio: 'jiu3' },
        { hanzi: '十', pinyin: 'shí', significado: 'Diez', ejemplo: '十个人 (shí gè rén) - diez personas', opciones: ['shī', 'shí', 'shǐ', 'shì'], respuesta: 1, audio: 'shi2' }
    ],
    
    // MAZO 7: Top 61-70 (Verbos comunes)
    7: [
        { hanzi: '吃', pinyin: 'chī', significado: 'Comer', ejemplo: '吃饭 (chī fàn) - comer', opciones: ['chī', 'chí', 'chǐ', 'chì'], respuesta: 0, audio: 'chi1' },
        { hanzi: '喝', pinyin: 'hē', significado: 'Beber', ejemplo: '喝水 (hē shuǐ) - beber agua', opciones: ['hē', 'hé', 'hě', 'hè'], respuesta: 0, audio: 'he1' },
        { hanzi: '去', pinyin: 'qù', significado: 'Ir', ejemplo: '去学校 (qù xuéxiào) - ir a la escuela', opciones: ['qū', 'qú', 'qǔ', 'qù'], respuesta: 3, audio: 'qu4' },
        { hanzi: '来', pinyin: 'lái', significado: 'Venir', ejemplo: '来中国 (lái Zhōngguó) - venir a China', opciones: ['lāi', 'lái', 'lǎi', 'lài'], respuesta: 1, audio: 'lai2' },
        { hanzi: '看', pinyin: 'kàn', significado: 'Ver/Mirar', ejemplo: '看电视 (kàn diànshì) - ver televisión', opciones: ['kān', 'kán', 'kǎn', 'kàn'], respuesta: 3, audio: 'kan4' },
        { hanzi: '听', pinyin: 'tīng', significado: 'Escuchar/Oír', ejemplo: '听音乐 (tīng yīnyuè) - escuchar música', opciones: ['tīng', 'tíng', 'tǐng', 'tìng'], respuesta: 0, audio: 'ting1' },
        { hanzi: '说', pinyin: 'shuō', significado: 'Hablar/Decir', ejemplo: '说中文 (shuō Zhōngwén) - hablar chino', opciones: ['shuō', 'shuó', 'shuǒ', 'shuò'], respuesta: 0, audio: 'shuo1' },
        { hanzi: '读', pinyin: 'dú', significado: 'Leer', ejemplo: '读书 (dú shū) - leer libros', opciones: ['dū', 'dú', 'dǔ', 'dù'], respuesta: 1, audio: 'du2' },
        { hanzi: '写', pinyin: 'xiě', significado: 'Escribir', ejemplo: '写字 (xiě zì) - escribir caracteres', opciones: ['xiē', 'xié', 'xiě', 'xiè'], respuesta: 2, audio: 'xie3' },
        { hanzi: '买', pinyin: 'mǎi', significado: 'Comprar', ejemplo: '买东西 (mǎi dōngxi) - comprar cosas', opciones: ['māi', 'mái', 'mǎi', 'mài'], respuesta: 2, audio: 'mai3' }
    ],
    
    // MAZO 8: Top 71-80 (Más verbos)
    8: [
        { hanzi: '卖', pinyin: 'mài', significado: 'Vender', ejemplo: '卖水果 (mài shuǐguǒ) - vender fruta', opciones: ['māi', 'mái', 'mǎi', 'mài'], respuesta: 3, audio: 'mai4' },
        { hanzi: '坐', pinyin: 'zuò', significado: 'Sentarse', ejemplo: '请坐 (qǐng zuò) - por favor, siéntate', opciones: ['zuō', 'zuó', 'zuǒ', 'zuò'], respuesta: 3, audio: 'zuo4' },
        { hanzi: '站', pinyin: 'zhàn', significado: 'Pararse/Estar de pie', ejemplo: '站起来 (zhàn qǐlái) - levantarse/pararse', opciones: ['zhān', 'zhán', 'zhǎn', 'zhàn'], respuesta: 3, audio: 'zhan4' },
        { hanzi: '走', pinyin: 'zǒu', significado: 'Caminar/Andar', ejemplo: '走路 (zǒu lù) - caminar', opciones: ['zōu', 'zóu', 'zǒu', 'zòu'], respuesta: 2, audio: 'zou3' },
        { hanzi: '跑', pinyin: 'pǎo', significado: 'Correr', ejemplo: '跑步 (pǎo bù) - correr (ejercicio)', opciones: ['pāo', 'páo', 'pǎo', 'pào'], respuesta: 2, audio: 'pao3' },
        { hanzi: '睡', pinyin: 'shuì', significado: 'Dormir', ejemplo: '睡觉 (shuì jiào) - dormir', opciones: ['shuī', 'shuí', 'shuǐ', 'shuì'], respuesta: 3, audio: 'shui4' },
        { hanzi: '工作', pinyin: 'gōngzuò', significado: 'Trabajar', ejemplo: '我在工作 (wǒ zài gōngzuò) - estoy trabajando', opciones: ['gōngzuō', 'góngzuò', 'gǒngzuò', 'gōngzuò'], respuesta: 3, audio: 'gongzuo' },
        { hanzi: '学习', pinyin: 'xuéxí', significado: 'Estudiar', ejemplo: '学习中文 (xuéxí Zhōngwén) - estudiar chino', opciones: ['xuēxí', 'xuéxí', 'xuěxí', 'xuèxí'], respuesta: 1, audio: 'xuexi' },
        { hanzi: '玩', pinyin: 'wán', significado: 'Jugar/Divertirse', ejemplo: '玩游戏 (wán yóuxì) - jugar videojuegos', opciones: ['wān', 'wán', 'wǎn', 'wàn'], respuesta: 1, audio: 'wan2' },
        { hanzi: '爱', pinyin: 'ài', significado: 'Amar/Querer', ejemplo: '我爱你 (wǒ ài nǐ) - te amo', opciones: ['āi', 'ái', 'ǎi', 'ài'], respuesta: 3, audio: 'ai4' }
    ],
    
    // MAZO 9: Top 81-90 (Lugares y transporte)
    9: [
        { hanzi: '家', pinyin: 'jiā', significado: 'Casa/Hogar', ejemplo: '回家 (huí jiā) - volver a casa', opciones: ['jiā', 'jiá', 'jiǎ', 'jià'], respuesta: 0, audio: 'jia1' },
        { hanzi: '学校', pinyin: 'xuéxiào', significado: 'Escuela/Colegio', ejemplo: '去学校 (qù xuéxiào) - ir a la escuela', opciones: ['xuēxiào', 'xuéxiào', 'xuěxiào', 'xuèxiào'], respuesta: 1, audio: 'xuexiao' },
        { hanzi: '医院', pinyin: 'yīyuàn', significado: 'Hospital', ejemplo: '去医院 (qù yīyuàn) - ir al hospital', opciones: ['yīyuān', 'yíyuàn', 'yǐyuàn', 'yìyuàn'], respuesta: 0, audio: 'yiyuan' },
        { hanzi: '商店', pinyin: 'shāngdiàn', significado: 'Tienda', ejemplo: '去商店 (qù shāngdiàn) - ir a la tienda', opciones: ['shāngdiān', 'shángdiàn', 'shǎngdiàn', 'shàngdiàn'], respuesta: 3, audio: 'shangdian' },
        { hanzi: '饭店', pinyin: 'fàndiàn', significado: 'Restaurante', ejemplo: '在饭店吃饭 (zài fàndiàn chīfàn) - comer en un restaurante', opciones: ['fāndiàn', 'fándiàn', 'fǎndiàn', 'fàndiàn'], respuesta: 3, audio: 'fandian' },
        { hanzi: '公园', pinyin: 'gōngyuán', significado: 'Parque', ejemplo: '去公园玩 (qù gōngyuán wán) - ir al parque a jugar', opciones: ['gōngyuān', 'góngyuán', 'gǒngyuán', 'gōngyuán'], respuesta: 3, audio: 'gongyuan' },
        { hanzi: '车', pinyin: 'chē', significado: 'Vehículo/Coche', ejemplo: '开车 (kāi chē) - conducir', opciones: ['chē', 'ché', 'chě', 'chè'], respuesta: 0, audio: 'che1' },
        { hanzi: '公交车', pinyin: 'gōngjiāo chē', significado: 'Autobús', ejemplo: '坐公交车 (zuò gōngjiāo chē) - tomar el autobús', opciones: ['gōngjiāo chē', 'góngjiāo chē', 'gǒngjiāo chē', 'gòngjiāo chē'], respuesta: 0, audio: 'gongjiaoche' },
        { hanzi: '地铁', pinyin: 'dìtiě', significado: 'Metro/Subterráneo', ejemplo: '坐地铁 (zuò dìtiě) - tomar el metro', opciones: ['dītiě', 'dítiě', 'dǐtiě', 'dìtiě'], respuesta: 3, audio: 'ditie' },
        { hanzi: '飞机', pinyin: 'fēijī', significado: 'Avión', ejemplo: '坐飞机 (zuò fēijī) - tomar el avión', opciones: ['fēijī', 'féijī', 'fěijī', 'fèijī'], respuesta: 0, audio: 'feiji' }
    ],
    
    // MAZO 10: Top 91-100 (Adjetivos y más)
    10: [
        { hanzi: '好', pinyin: 'hǎo', significado: 'Bueno/Bien', ejemplo: '很好 (hěn hǎo) - muy bien', opciones: ['hāo', 'háo', 'hǎo', 'hào'], respuesta: 2, audio: 'hao3' },
        { hanzi: '坏', pinyin: 'huài', significado: 'Malo', ejemplo: '坏人 (huài rén) - mala persona', opciones: ['huāi', 'huái', 'huǎi', 'huài'], respuesta: 3, audio: 'huai4' },
        { hanzi: '大', pinyin: 'dà', significado: 'Grande', ejemplo: '大城市 (dà chéngshì) - gran ciudad', opciones: ['dā', 'dá', 'dǎ', 'dà'], respuesta: 3, audio: 'da4' },
        { hanzi: '小', pinyin: 'xiǎo', significado: 'Pequeño', ejemplo: '小狗 (xiǎo gǒu) - perrito', opciones: ['xiāo', 'xiáo', 'xiǎo', 'xiào'], respuesta: 2, audio: 'xiao3' },
        { hanzi: '多', pinyin: 'duō', significado: 'Mucho/Muchos', ejemplo: '很多人 (hěn duō rén) - mucha gente', opciones: ['duō', 'duó', 'duǒ', 'duò'], respuesta: 0, audio: 'duo1' },
        { hanzi: '少', pinyin: 'shǎo', significado: 'Poco/Pocos', ejemplo: '很少 (hěn shǎo) - muy poco', opciones: ['shāo', 'sháo', 'shǎo', 'shào'], respuesta: 2, audio: 'shao3' },
        { hanzi: '新', pinyin: 'xīn', significado: 'Nuevo', ejemplo: '新衣服 (xīn yīfu) - ropa nueva', opciones: ['xīn', 'xín', 'xǐn', 'xìn'], respuesta: 0, audio: 'xin1' },
        { hanzi: '旧', pinyin: 'jiù', significado: 'Viejo/Usado', ejemplo: '旧书 (jiù shū) - libro viejo', opciones: ['jiū', 'jiú', 'jiǔ', 'jiù'], respuesta: 3, audio: 'jiu4' },
        { hanzi: '热', pinyin: 'rè', significado: 'Caliente/Calor', ejemplo: '热水 (rè shuǐ) - agua caliente', opciones: ['rē', 'ré', 'rě', 'rè'], respuesta: 3, audio: 're4' },
        { hanzi: '冷', pinyin: 'lěng', significado: 'Frío', ejemplo: '冷水 (lěng shuǐ) - agua fría', opciones: ['lēng', 'léng', 'lěng', 'lèng'], respuesta: 2, audio: 'leng3' }
    ]
};

// Funciones para Chino
function obtenerPalabrasChino(mazo) {
    const preguntasOriginales = vocabularioChino[mazo] || [];
    
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

function contarMazosChinoDisponibles() {
    return Object.keys(vocabularioChino).length;
}

function obtenerNombreMazoChino(mazo) {
    const nombres = {
        1: 'Saludos básicos',
        2: 'Preguntas comunes',
        3: 'Tiempo y lugar',
        4: 'Comida y bebida',
        5: 'Familia y personas',
        6: 'Números 1-10',
        7: 'Verbos comunes',
        8: 'Más verbos',
        9: 'Lugares y transporte',
        10: 'Adjetivos básicos'
    };
    return nombres[mazo] || `Mazo ${mazo}`;
}
