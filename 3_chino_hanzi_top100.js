// ================================================
// CHINO MANDARÍN - TOP 100 PALABRAS MÁS USADAS
// 10 mazos de 10 palabras cada uno
// ================================================

const palabrasChinas = {
    // MAZO 1: Palabras básicas esenciales
    1: [
        { palabra: '你好', pinyin: 'nǐ hǎo', significado: 'Hola', ejemplo: '你好，我叫玛丽 (nǐ hǎo, wǒ jiào mǎlì) - Hola, me llamo María', opciones: ['nǐ hǎo', 'zài jiàn', 'xiè xie', 'duì bu qǐ'], respuesta: 0, audio: 'ni3hao3' },
        { palabra: '谢谢', pinyin: 'xiè xie', significado: 'Gracias', ejemplo: '谢谢你的帮助 (xiè xie nǐ de bāngzhù) - Gracias por tu ayuda', opciones: ['bù yòng xiè', 'xiè xie', 'méi guānxi', 'zǎo shang hǎo'], respuesta: 1, audio: 'xie4xie' },
        { palabra: '对不起', pinyin: 'duì bu qǐ', significado: 'Lo siento/Perdón', ejemplo: '对不起，我迟到了 (duì bu qǐ, wǒ chídào le) - Lo siento, llegué tarde', opciones: ['méi shì', 'duì bu qǐ', 'bù kèqi', 'méi wèntí'], respuesta: 1, audio: 'dui4buqi3' },
        { palabra: '再见', pinyin: 'zài jiàn', significado: 'Adiós', ejemplo: '明天再见 (míngtiān zài jiàn) - Hasta mañana', opciones: ['zài jiàn', 'wǎn ān', 'huān yíng', 'qǐng wèn'], respuesta: 0, audio: 'zai4jian4' },
        { palabra: '是的', pinyin: 'shì de', significado: 'Sí', ejemplo: '是的，我明白了 (shì de, wǒ míngbái le) - Sí, entiendo', opciones: ['bù shì', 'shì de', 'yě xǔ', 'kěnéng'], respuesta: 1, audio: 'shi4de' },
        { palabra: '不是', pinyin: 'bù shì', significado: 'No', ejemplo: '他不是老师 (tā bù shì lǎoshī) - Él no es profesor', opciones: ['bù shì', 'shì de', 'duì', 'hǎo de'], respuesta: 0, audio: 'bu2shi4' },
        { palabra: '请', pinyin: 'qǐng', significado: 'Por favor', ejemplo: '请坐 (qǐng zuò) - Por favor, siéntese', opciones: ['qǐng', 'bù yào', 'kěyǐ', 'néng'], respuesta: 0, audio: 'qing3' },
        { palabra: '什么', pinyin: 'shén me', significado: 'Qué', ejemplo: '这是什么？(zhè shì shén me?) - ¿Qué es esto?', opciones: ['shén me', 'shéi', 'nǎ lǐ', 'wèi shén me'], respuesta: 0, audio: 'shen2me' },
        { palabra: '哪里', pinyin: 'nǎ lǐ', significado: 'Dónde', ejemplo: '洗手间在哪里？(xǐshǒujiān zài nǎ lǐ?) - ¿Dónde está el baño?', opciones: ['zěn me', 'nǎ lǐ', 'shén me shí hou', 'duō shǎo'], respuesta: 1, audio: 'na3li3' },
        { palabra: '多少', pinyin: 'duō shǎo', significado: 'Cuánto/Cuántos', ejemplo: '这个多少钱？(zhè gè duō shǎo qián?) - ¿Cuánto cuesta esto?', opciones: ['jǐ gè', 'duō shǎo', 'duō dà', 'duō jiǔ'], respuesta: 1, audio: 'duo1shao3' }
    ],
    
    // MAZO 2: Palabras de persona y relaciones
    2: [
        { palabra: '我', pinyin: 'wǒ', significado: 'Yo', ejemplo: '我是学生 (wǒ shì xuéshēng) - Soy estudiante', opciones: ['wǒ', 'nǐ', 'tā', 'wǒ men'], respuesta: 0, audio: 'wo3' },
        { palabra: '你', pinyin: 'nǐ', significado: 'Tú', ejemplo: '你叫什么名字？(nǐ jiào shén me míngzi?) - ¿Cómo te llamas?', opciones: ['wǒ', 'nǐ', 'tā', 'tā men'], respuesta: 1, audio: 'ni3' },
        { palabra: '他', pinyin: 'tā', significado: 'Él', ejemplo: '他是我的朋友 (tā shì wǒ de péngyou) - Él es mi amigo', opciones: ['tā', 'nǐ', 'wǒ', 'tā men'], respuesta: 0, audio: 'ta1' },
        { palabra: '她', pinyin: 'tā', significado: 'Ella', ejemplo: '她很漂亮 (tā hěn piàoliang) - Ella es muy bonita', opciones: ['tā', 'nǐ', 'wǒ', 'nín'], respuesta: 0, audio: 'ta1' },
        { palabra: '我们', pinyin: 'wǒ men', significado: 'Nosotros', ejemplo: '我们去吃饭吧 (wǒ men qù chī fàn ba) - Vamos a comer', opciones: ['nǐ men', 'wǒ men', 'tā men', 'dà jiā'], respuesta: 1, audio: 'wo3men' },
        { palabra: '你们', pinyin: 'nǐ men', significado: 'Vosotros/Ustedes', ejemplo: '你们好 (nǐ men hǎo) - Hola a todos', opciones: ['wǒ men', 'nǐ men', 'tā men', 'nín men'], respuesta: 1, audio: 'ni3men' },
        { palabra: '他们', pinyin: 'tā men', significado: 'Ellos', ejemplo: '他们是中国人 (tā men shì Zhōngguó rén) - Ellos son chinos', opciones: ['wǒ men', 'nǐ men', 'tā men', 'tā'], respuesta: 2, audio: 'ta1men' },
        { palabra: '朋友', pinyin: 'péng you', significado: 'Amigo', ejemplo: '我的好朋友 (wǒ de hǎo péngyou) - Mi buen amigo', opciones: ['péng you', 'jiā rén', 'tóng xué', 'lǎo shī'], respuesta: 0, audio: 'peng2you' },
        { palabra: '家人', pinyin: 'jiā rén', significado: 'Familia', ejemplo: '我的家人 (wǒ de jiā rén) - Mi familia', opciones: ['péng you', 'jiā rén', 'tóng shì', 'lín jū'], respuesta: 1, audio: 'jia1ren2' },
        { palabra: '老师', pinyin: 'lǎo shī', significado: 'Profesor', ejemplo: '中文老师 (Zhōngwén lǎo shī) - Profesor de chino', opciones: ['xué shēng', 'lǎo shī', 'yī shēng', 'gōng rén'], respuesta: 1, audio: 'lao3shi1' }
    ],
    
    // MAZO 3: Comida y bebida
    3: [
        { palabra: '水', pinyin: 'shuǐ', significado: 'Agua', ejemplo: '我要一杯水 (wǒ yào yī bēi shuǐ) - Quiero un vaso de agua', opciones: ['chá', 'shuǐ', 'kāfēi', 'niúnǎi'], respuesta: 1, audio: 'shui3' },
        { palabra: '茶', pinyin: 'chá', significado: 'Té', ejemplo: '绿茶很好喝 (lǜchá hěn hǎo hē) - El té verde es muy rico', opciones: ['kāfēi', 'chá', 'jiǔ', 'qìshuǐ'], respuesta: 1, audio: 'cha2' },
        { palabra: '咖啡', pinyin: 'kā fēi', significado: 'Café', ejemplo: '早上喝咖啡 (zǎoshang hē kāfēi) - Beber café por la mañana', opciones: ['chá', 'kāfēi', 'niúnǎi', 'guǒzhī'], respuesta: 1, audio: 'ka1fei1' },
        { palabra: '饭', pinyin: 'fàn', significado: 'Comida/Arroz', ejemplo: '吃饭了吗？(chī fàn le ma?) - ¿Has comido?', opciones: ['miàn', 'fàn', 'bāozi', 'jiǎozi'], respuesta: 1, audio: 'fan4' },
        { palabra: '面条', pinyin: 'miàn tiáo', significado: 'Fideos', ejemplo: '我喜欢吃面条 (wǒ xǐhuan chī miàntiáo) - Me gusta comer fideos', opciones: ['mǐfàn', 'miàntiáo', 'bīnggān', 'shuǐguǒ'], respuesta: 1, audio: 'mian4tiao2' },
        { palabra: '苹果', pinyin: 'píng guǒ', significado: 'Manzana', ejemplo: '红苹果 (hóng píngguǒ) - Manzana roja', opciones: ['xiāngjiāo', 'píngguǒ', 'chéngzi', 'pútao'], respuesta: 1, audio: 'ping2guo3' },
        { palabra: '面包', pinyin: 'miàn bāo', significado: 'Pan', ejemplo: '早餐吃面包 (zǎocān chī miànbāo) - Comer pan en el desayuno', opciones: ['miànbāo', 'niúnǎi', 'jīdàn', 'huǒtuǐ'], respuesta: 0, audio: 'mian4bao1' },
        { palabra: '肉', pinyin: 'ròu', significado: 'Carne', ejemplo: '我不吃肉 (wǒ bù chī ròu) - No como carne', opciones: ['shūcài', 'ròu', 'yú', 'dàn'], respuesta: 1, audio: 'rou4' },
        { palabra: '蔬菜', pinyin: 'shū cài', significado: 'Verduras', ejemplo: '多吃蔬菜 (duō chī shūcài) - Come más verduras', opciones: ['shuǐguǒ', 'shūcài', 'ròu', 'miàntiáo'], respuesta: 1, audio: 'shu1cai4' },
        { palabra: '水果', pinyin: 'shuǐ guǒ', significado: 'Fruta', ejemplo: '新鲜水果 (xīnxiān shuǐguǒ) - Fruta fresca', opciones: ['shūcài', 'shuǐguǒ', 'tiándiǎn', 'yǐnliào'], respuesta: 1, audio: 'shui3guo3' }
    ],
    
    // MAZO 4: Tiempo y clima
    4: [
        { palabra: '今天', pinyin: 'jīn tiān', significado: 'Hoy', ejemplo: '今天天气很好 (jīntiān tiānqì hěn hǎo) - Hoy hace buen tiempo', opciones: ['zuótiān', 'jīntiān', 'míngtiān', 'xiànzài'], respuesta: 1, audio: 'jin1tian1' },
        { palabra: '明天', pinyin: 'míng tiān', significado: 'Mañana', ejemplo: '明天见 (míngtiān jiàn) - Hasta mañana', opciones: ['jīntiān', 'míngtiān', 'hòutiān', 'zuótiān'], respuesta: 1, audio: 'ming2tian1' },
        { palabra: '昨天', pinyin: 'zuó tiān', significado: 'Ayer', ejemplo: '昨天我去了公园 (zuótiān wǒ qù le gōngyuán) - Ayer fui al parque', opciones: ['míngtiān', 'zuótiān', 'jīntiān', 'shàngwǔ'], respuesta: 1, audio: 'zuo2tian1' },
        { palabra: '现在', pinyin: 'xiàn zài', significado: 'Ahora', ejemplo: '现在几点？(xiànzài jǐ diǎn?) - ¿Qué hora es ahora?', opciones: ['yǐqián', 'xiànzài', 'yǐhòu', 'děngyīxià'], respuesta: 1, audio: 'xian4zai4' },
        { palabra: '天气', pinyin: 'tiān qì', significado: 'Tiempo/Clima', ejemplo: '天气预报 (tiānqì yùbào) - Pronóstico del tiempo', opciones: ['jìjié', 'tiānqì', 'wēndù', 'fēng'], respuesta: 1, audio: 'tian1qi4' },
        { palabra: '太阳', pinyin: 'tài yáng', significado: 'Sol', ejemplo: '太阳出来了 (tàiyáng chūlái le) - El sol ha salido', opciones: ['yuèliang', 'tàiyáng', 'xīngxing', 'yǔ'], respuesta: 1, audio: 'tai4yang2' },
        { palabra: '下雨', pinyin: 'xià yǔ', significado: 'Llover', ejemplo: '今天下雨 (jīntiān xià yǔ) - Hoy llueve', opciones: ['xià xuě', 'xià yǔ', 'guā fēng', 'qíng tiān'], respuesta: 1, audio: 'xia4yu3' },
        { palabra: '冷', pinyin: 'lěng', significado: 'Frío', ejemplo: '今天很冷 (jīntiān hěn lěng) - Hoy hace mucho frío', opciones: ['rè', 'lěng', 'nuǎnhuo', 'liángkuai'], respuesta: 1, audio: 'leng3' },
        { palabra: '热', pinyin: 'rè', significado: 'Calor/Caliente', ejemplo: '夏天很热 (xiàtiān hěn rè) - En verano hace mucho calor', opciones: ['lěng', 'rè', 'shī', 'gān'], respuesta: 1, audio: 're4' },
        { palabra: '季节', pinyin: 'jì jié', significado: 'Estación del año', ejemplo: '四个季节 (sì gè jìjié) - Las cuatro estaciones', opciones: ['yuèfèn', 'jìjié', 'xīngqī', 'niándù'], respuesta: 1, audio: 'ji4jie2' }
    ],
    
    // MAZO 5: Lugares y direcciones
    5: [
        { palabra: '家', pinyin: 'jiā', significado: 'Casa/Hogar', ejemplo: '我回家了 (wǒ huí jiā le) - Volví a casa', opciones: ['gōngsī', 'jiā', 'xuéxiào', 'shāngdiàn'], respuesta: 1, audio: 'jia1' },
        { palabra: '学校', pinyin: 'xué xiào', significado: 'Escuela', ejemplo: '我去学校 (wǒ qù xuéxiào) - Voy a la escuela', opciones: ['yīyuàn', 'xuéxiào', 'gōngyuán', 'yínháng'], respuesta: 1, audio: 'xue2xiao4' },
        { palabra: '医院', pinyin: 'yī yuàn', significado: 'Hospital', ejemplo: '他去医院了 (tā qù yīyuàn le) - Él fue al hospital', opciones: ['yínháng', 'yīyuàn', 'chāoshì', 'yóujú'], respuesta: 1, audio: 'yi1yuan4' },
        { palabra: '商店', pinyin: 'shāng diàn', significado: 'Tienda', ejemplo: '这个商店很大 (zhège shāngdiàn hěn dà) - Esta tienda es muy grande', opciones: ['fàndiàn', 'shāngdiàn', 'jiǔbā', 'kāfēiguǎn'], respuesta: 1, audio: 'shang1dian4' },
        { palabra: '公园', pinyin: 'gōng yuán', significado: 'Parque', ejemplo: '在公园散步 (zài gōngyuán sànbù) - Pasear en el parque', opciones: ['gōngyuán', 'túshūguǎn', 'bówùguǎn', 'yùndòngchǎng'], respuesta: 0, audio: 'gong1yuan2' },
        { palabra: '左边', pinyin: 'zuǒ bian', significado: 'Izquierda', ejemplo: '在左边 (zài zuǒbian) - A la izquierda', opciones: ['zuǒbian', 'yòubian', 'qiánbian', 'hòubian'], respuesta: 0, audio: 'zuo3bian' },
        { palabra: '右边', pinyin: 'yòu bian', significado: 'Derecha', ejemplo: '向右转 (xiàng yòu zhuǎn) - Gira a la derecha', opciones: ['zuǒbian', 'yòubian', 'shàngbian', 'xiàbian'], respuesta: 1, audio: 'you4bian' },
        { palabra: '前面', pinyin: 'qián miàn', significado: 'Delante/Adelante', ejemplo: '在前面等我 (zài qiánmiàn děng wǒ) - Espérame delante', opciones: ['hòumiàn', 'qiánmiàn', 'lǐmiàn', 'wàimiàn'], respuesta: 1, audio: 'qian2mian4' },
        { palabra: '后面', pinyin: 'hòu miàn', significado: 'Detrás/Atrás', ejemplo: '我在你后面 (wǒ zài nǐ hòumiàn) - Estoy detrás de ti', opciones: ['qiánmiàn', 'hòumiàn', 'pángbiān', 'duìmiàn'], respuesta: 1, audio: 'hou4mian4' },
        { palabra: '这里', pinyin: 'zhè lǐ', significado: 'Aquí', ejemplo: '请来这里 (qǐng lái zhèlǐ) - Por favor, ven aquí', opciones: ['zhèlǐ', 'nàlǐ', 'dàochù', 'fùjìn'], respuesta: 0, audio: 'zhe4li3' }
    ],
    
    // MAZO 6: Números y cantidades
    6: [
        { palabra: '一', pinyin: 'yī', significado: 'Uno', ejemplo: '一个人 (yī gè rén) - Una persona', opciones: ['yī', 'èr', 'sān', 'shí'], respuesta: 0, audio: 'yi1' },
        { palabra: '二', pinyin: 'èr', significado: 'Dos', ejemplo: '两个苹果 (liǎng gè píngguǒ) - Dos manzanas', opciones: ['sān', 'èr', 'yī', 'sì'], respuesta: 1, audio: 'er4' },
        { palabra: '三', pinyin: 'sān', significado: 'Tres', ejemplo: '三本书 (sān běn shū) - Tres libros', opciones: ['sì', 'sān', 'wǔ', 'liù'], respuesta: 1, audio: 'san1' },
        { palabra: '十', pinyin: 'shí', significado: 'Diez', ejemplo: '十块钱 (shí kuài qián) - Diez yuanes', opciones: ['jiǔ', 'shí', 'bā', 'qī'], respuesta: 1, audio: 'shi2' },
        { palabra: '百', pinyin: 'bǎi', significado: 'Cien', ejemplo: '一百元 (yī bǎi yuán) - Cien yuanes', opciones: ['qiān', 'bǎi', 'wàn', 'shí'], respuesta: 1, audio: 'bai3' },
        { palabra: '千', pinyin: 'qiān', significado: 'Mil', ejemplo: '一千公里 (yī qiān gōnglǐ) - Mil kilómetros', opciones: ['bǎi', 'qiān', 'wàn', 'shí wàn'], respuesta: 1, audio: 'qian1' },
        { palabra: '很多', pinyin: 'hěn duō', significado: 'Muchos/Mucho', ejemplo: '很多人 (hěn duō rén) - Mucha gente', opciones: ['hěn shǎo', 'hěn duō', 'yīdiǎn', 'jǐ gè'], respuesta: 1, audio: 'hen3duo1' },
        { palabra: '一点', pinyin: 'yī diǎn', significado: 'Un poco', ejemplo: '我有一点累 (wǒ yǒu yīdiǎn lèi) - Estoy un poco cansado', opciones: ['hěn duō', 'yīdiǎn', 'tài duō', 'méiyǒu'], respuesta: 1, audio: 'yi1dian3' },
        { palabra: '全部', pinyin: 'quán bù', significado: 'Todo/Todos', ejemplo: '全部学生 (quánbù xuéshēng) - Todos los estudiantes', opciones: ['yībàn', 'quánbù', 'dàbùfen', 'shǎoshù'], respuesta: 1, audio: 'quan2bu4' },
        { palabra: '几个', pinyin: 'jǐ gè', significado: 'Algunos/Varios', ejemplo: '有几个人？(yǒu jǐ gè rén?) - ¿Cuántas personas hay?', opciones: ['hěn duō', 'jǐ gè', 'quánbù', 'méiyǒu'], respuesta: 1, audio: 'ji3ge' }
    ],
    
    // MAZO 7: Verbos de acción comunes
    7: [
        { palabra: '去', pinyin: 'qù', significado: 'Ir', ejemplo: '我去学校 (wǒ qù xuéxiào) - Voy a la escuela', opciones: ['lái', 'qù', 'zǒu', 'pǎo'], respuesta: 1, audio: 'qu4' },
        { palabra: '来', pinyin: 'lái', significado: 'Venir', ejemplo: '来我家吧 (lái wǒ jiā ba) - Ven a mi casa', opciones: ['qù', 'lái', 'huí', 'dào'], respuesta: 1, audio: 'lai2' },
        { palabra: '吃', pinyin: 'chī', significado: 'Comer', ejemplo: '吃饭 (chī fàn) - Comer', opciones: ['hē', 'chī', 'zuò', 'mǎi'], respuesta: 1, audio: 'chi1' },
        { palabra: '喝', pinyin: 'hē', significado: 'Beber', ejemplo: '喝水 (hē shuǐ) - Beber agua', opciones: ['chī', 'hē', 'kàn', 'tīng'], respuesta: 1, audio: 'he1' },
        { palabra: '看', pinyin: 'kàn', significado: 'Mirar/Ver', ejemplo: '看电影 (kàn diànyǐng) - Ver una película', opciones: ['tīng', 'kàn', 'shuō', 'xiě'], respuesta: 1, audio: 'kan4' },
        { palabra: '听', pinyin: 'tīng', significado: 'Escuchar', ejemplo: '听音乐 (tīng yīnyuè) - Escuchar música', opciones: ['kàn', 'tīng', 'chàng', 'tiào'], respuesta: 1, audio: 'ting1' },
        { palabra: '说', pinyin: 'shuō', significado: 'Hablar', ejemplo: '说中文 (shuō Zhōngwén) - Hablar chino', opciones: ['xiě', 'shuō', 'dú', 'niàn'], respuesta: 1, audio: 'shuo1' },
        { palabra: '学习', pinyin: 'xué xí', significado: 'Estudiar', ejemplo: '学习汉语 (xuéxí Hànyǔ) - Estudiar chino', opciones: ['gōngzuò', 'xuéxí', 'yóuxì', 'xiūxi'], respuesta: 1, audio: 'xue2xi2' },
        { palabra: '工作', pinyin: 'gōng zuò', significado: 'Trabajar', ejemplo: '我在工作 (wǒ zài gōngzuò) - Estoy trabajando', opciones: ['xuéxí', 'gōngzuò', 'shuìjiào', 'chīfàn'], respuesta: 1, audio: 'gong1zuo4' },
        { palabra: '睡觉', pinyin: 'shuì jiào', significado: 'Dormir', ejemplo: '我要睡觉了 (wǒ yào shuìjiào le) - Voy a dormir', opciones: ['qǐchuáng', 'shuìjiào', 'xiūxi', 'tǎngxià'], respuesta: 1, audio: 'shui4jiao4' }
    ],
    
    // MAZO 8: Adjetivos y descripciones
    8: [
        { palabra: '大', pinyin: 'dà', significado: 'Grande', ejemplo: '大城市 (dà chéngshì) - Ciudad grande', opciones: ['dà', 'xiǎo', 'cháng', 'duǎn'], respuesta: 0, audio: 'da4' },
        { palabra: '小', pinyin: 'xiǎo', significado: 'Pequeño', ejemplo: '小猫 (xiǎo māo) - Gatito', opciones: ['dà', 'xiǎo', 'gāo', 'ǎi'], respuesta: 1, audio: 'xiao3' },
        { palabra: '好', pinyin: 'hǎo', significado: 'Bueno', ejemplo: '好主意 (hǎo zhǔyì) - Buena idea', opciones: ['huài', 'hǎo', 'duì', 'cuò'], respuesta: 1, audio: 'hao3' },
        { palabra: '坏', pinyin: 'huài', significado: 'Malo', ejemplo: '坏天气 (huài tiānqì) - Mal tiempo', opciones: ['hǎo', 'huài', 'kuài', 'màn'], respuesta: 1, audio: 'huai4' },
        { palabra: '快', pinyin: 'kuài', significado: 'Rápido', ejemplo: '快一点 (kuài yīdiǎn) - Más rápido', opciones: ['màn', 'kuài', 'zǎo', 'wǎn'], respuesta: 1, audio: 'kuai4' },
        { palabra: '慢', pinyin: 'màn', significado: 'Lento', ejemplo: '慢慢走 (màn màn zǒu) - Camina despacio', opciones: ['kuài', 'màn', 'jǐn', 'sōng'], respuesta: 1, audio: 'man4' },
        { palabra: '高兴', pinyin: 'gāo xìng', significado: 'Contento/Feliz', ejemplo: '我很高兴 (wǒ hěn gāoxìng) - Estoy muy contento', opciones: ['shāngxīn', 'gāoxìng', 'shēngqì', 'jǐnzhāng'], respuesta: 1, audio: 'gao1xing4' },
        { palabra: '漂亮', pinyin: 'piào liang', significado: 'Bonito/Guapo', ejemplo: '漂亮的花 (piàoliang de huā) - Flores bonitas', opciones: ['nánkàn', 'piàoliang', 'pǔtōng', 'tèbié'], respuesta: 1, audio: 'piao4liang' },
        { palabra: '贵', pinyin: 'guì', significado: 'Caro', ejemplo: '太贵了 (tài guì le) - Demasiado caro', opciones: ['piányi', 'guì', 'zhí', 'jià'], respuesta: 1, audio: 'gui4' },
        { palabra: '便宜', pinyin: 'pián yi', significado: 'Barato', ejemplo: '便宜的衣服 (piányi de yīfu) - Ropa barata', opciones: ['guì', 'piányi', 'hǎo', 'huài'], respuesta: 1, audio: 'pian2yi' }
    ],
    
    // MAZO 9: Transporte y movimiento
    9: [
        { palabra: '汽车', pinyin: 'qì chē', significado: 'Coche/Automóvil', ejemplo: '开汽车 (kāi qìchē) - Conducir un coche', opciones: ['zìxíngchē', 'qìchē', 'huǒchē', 'fēijī'], respuesta: 1, audio: 'qi4che1' },
        { palabra: '自行车', pinyin: 'zì xíng chē', significado: 'Bicicleta', ejemplo: '骑自行车 (qí zìxíngchē) - Montar en bicicleta', opciones: ['qìchē', 'zìxíngchē', 'mótuōchē', 'gōnggòngqìchē'], respuesta: 1, audio: 'zi4xing2che1' },
        { palabra: '飞机', pinyin: 'fēi jī', significado: 'Avión', ejemplo: '坐飞机 (zuò fēijī) - Ir en avión', opciones: ['huǒchē', 'fēijī', 'lúnchuán', 'qìchē'], respuesta: 1, audio: 'fei1ji1' },
        { palabra: '火车', pinyin: 'huǒ chē', significado: 'Tren', ejemplo: '火车站 (huǒchē zhàn) - Estación de tren', opciones: ['qìchēzhàn', 'huǒchē', 'dìtiě', 'gōngjiāochē'], respuesta: 1, audio: 'huo3che1' },
        { palabra: '地铁', pinyin: 'dì tiě', significado: 'Metro', ejemplo: '地铁站 (dìtiě zhàn) - Estación de metro', opciones: ['huǒchēzhàn', 'dìtiě', 'gōngjiāochē', 'chūzūchē'], respuesta: 1, audio: 'di4tie3' },
        { palabra: '走路', pinyin: 'zǒu lù', significado: 'Caminar/Andar', ejemplo: '走路去学校 (zǒulù qù xuéxiào) - Ir a la escuela caminando', opciones: ['pǎobù', 'zǒulù', 'tiàowǔ', 'zhànlì'], respuesta: 1, audio: 'zou3lu4' },
        { palabra: '跑', pinyin: 'pǎo', significado: 'Correr', ejemplo: '跑步锻炼 (pǎobù duànliàn) - Correr para hacer ejercicio', opciones: ['zǒu', 'pǎo', 'tiào', 'tǎng'], respuesta: 1, audio: 'pao3' },
        { palabra: '停', pinyin: 'tíng', significado: 'Parar/Detenerse', ejemplo: '停车 (tíng chē) - Aparcar el coche', opciones: ['zǒu', 'tíng', 'kāi', 'zhuǎn'], respuesta: 1, audio: 'ting2' },
        { palabra: '站', pinyin: 'zhàn', significado: 'Estar de pie/Pararse', ejemplo: '请站起来 (qǐng zhàn qǐlái) - Por favor, levántate', opciones: ['zuò', 'zhàn', 'tǎng', 'zǒu'], respuesta: 1, audio: 'zhan4' },
        { palabra: '坐', pinyin: 'zuò', significado: 'Sentarse', ejemplo: '请坐 (qǐng zuò) - Por favor, siéntate', opciones: ['zhàn', 'zuò', 'tǎng', 'guì'], respuesta: 1, audio: 'zuo4' }
    ],
    
    // MAZO 10: Objetos y cosas comunes
    10: [
        { palabra: '书', pinyin: 'shū', significado: 'Libro', ejemplo: '一本书 (yī běn shū) - Un libro', opciones: ['bǐ', 'shū', 'zhǐ', 'bāo'], respuesta: 1, audio: 'shu1' },
        { palabra: '笔', pinyin: 'bǐ', significado: 'Bolígrafo/Lápiz', ejemplo: '一支笔 (yī zhī bǐ) - Un bolígrafo', opciones: ['shū', 'bǐ', 'xiàngpí', 'chǐzi'], respuesta: 1, audio: 'bi3' },
        { palabra: '手机', pinyin: 'shǒu jī', significado: 'Teléfono móvil', ejemplo: '我的手机 (wǒ de shǒujī) - Mi teléfono móvil', opciones: ['diànnǎo', 'shǒujī', 'diànshì', 'yīnyuè'], respuesta: 1, audio: 'shou3ji1' },
        { palabra: '电脑', pinyin: 'diàn nǎo', significado: 'Ordenador/Computadora', ejemplo: '用电脑工作 (yòng diànnǎo gōngzuò) - Trabajar con el ordenador', opciones: ['shǒujī', 'diànnǎo', 'píngbǎn', 'dǎyìnjī'], respuesta: 1, audio: 'dian4nao3' },
        { palabra: '钱', pinyin: 'qián', significado: 'Dinero', ejemplo: '多少钱？(duō shǎo qián?) - ¿Cuánto dinero?', opciones: ['qián', 'zhǐ', 'bāo', 'piào'], respuesta: 
