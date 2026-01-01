
// ================================================
// CHINO MANDARÍN - TOP 100 HANZI MÁS USADOS
// 10 mazos de 10 caracteres cada uno
// ================================================

const alfabetoChino = {
    // MAZO 1: Los 10 más usados (aprox. 15% de todo el chino)
    1: [
        { hanzi: '的', pinyin: 'de', significado: 'Partícula posesiva', ejemplo: '我的书 (wǒ de shū) - mi libro', opciones: ['de', 'dé', 'dě', 'dè'], respuesta: 0, audio: 'de' },
        { hanzi: '一', pinyin: 'yī', significado: 'Uno', ejemplo: '一个人 (yī gè rén) - una persona', opciones: ['yī', 'yí', 'yǐ', 'yì'], respuesta: 0, audio: 'yi1' },
        { hanzi: '是', pinyin: 'shì', significado: 'Ser/estar', ejemplo: '我是学生 (wǒ shì xuéshēng) - soy estudiante', opciones: ['shī', 'shí', 'shǐ', 'shì'], respuesta: 3, audio: 'shi4' },
        { hanzi: '不', pinyin: 'bù', significado: 'No', ejemplo: '不是 (bù shì) - no es', opciones: ['bū', 'bú', 'bǔ', 'bù'], respuesta: 3, audio: 'bu4' },
        { hanzi: '了', pinyin: 'le', significado: 'Partícula de tiempo pasado', ejemplo: '我去了 (wǒ qù le) - fui', opciones: ['lē', 'lé', 'lě', 'le'], respuesta: 3, audio: 'le' },
        { hanzi: '在', pinyin: 'zài', significado: 'En/estar en', ejemplo: '我在家 (wǒ zài jiā) - estoy en casa', opciones: ['zāi', 'zái', 'zǎi', 'zài'], respuesta: 3, audio: 'zai4' },
        { hanzi: '人', pinyin: 'rén', significado: 'Persona', ejemplo: '中国人 (Zhōngguó rén) - persona china', opciones: ['rēn', 'rén', 'rěn', 'rèn'], respuesta: 1, audio: 'ren2' },
        { hanzi: '有', pinyin: 'yǒu', significado: 'Tener', ejemplo: '我有书 (wǒ yǒu shū) - tengo libro', opciones: ['yōu', 'yóu', 'yǒu', 'yòu'], respuesta: 2, audio: 'you3' },
        { hanzi: '我', pinyin: 'wǒ', significado: 'Yo', ejemplo: '我爱你 (wǒ ài nǐ) - te amo', opciones: ['wō', 'wó', 'wǒ', 'wò'], respuesta: 2, audio: 'wo3' },
        { hanzi: '他', pinyin: 'tā', significado: 'Él', ejemplo: '他是老师 (tā shì lǎoshī) - él es profesor', opciones: ['tā', 'tá', 'tǎ', 'tà'], respuesta: 0, audio: 'ta1' }
    ],
    
    // MAZO 2: Top 11-20
    2: [
        { hanzi: '这', pinyin: 'zhè', significado: 'Este/esto', ejemplo: '这个人 (zhè gè rén) - esta persona', opciones: ['zhē', 'zhé', 'zhě', 'zhè'], respuesta: 3, audio: 'zhe4' },
        { hanzi: '中', pinyin: 'zhōng', significado: 'Centro/medio', ejemplo: '中国 (Zhōngguó) - China', opciones: ['zhōng', 'zhóng', 'zhǒng', 'zhòng'], respuesta: 0, audio: 'zhong1' },
        { hanzi: '大', pinyin: 'dà', significado: 'Grande', ejemplo: '大学 (dàxué) - universidad', opciones: ['dā', 'dá', 'dǎ', 'dà'], respuesta: 3, audio: 'da4' },
        { hanzi: '来', pinyin: 'lái', significado: 'Venir', ejemplo: '来中国 (lái Zhōngguó) - venir a China', opciones: ['lāi', 'lái', 'lǎi', 'lài'], respuesta: 1, audio: 'lai2' },
        { hanzi: '上', pinyin: 'shàng', significado: 'Arriba/subir', ejemplo: '上海 (Shànghǎi) - Shanghai', opciones: ['shāng', 'sháng', 'shǎng', 'shàng'], respuesta: 3, audio: 'shang4' },
        { hanzi: '国', pinyin: 'guó', significado: 'País', ejemplo: '国家 (guójiā) - país', opciones: ['guō', 'guó', 'guǒ', 'guò'], respuesta: 1, audio: 'guo2' },
        { hanzi: '个', pinyin: 'gè', significado: 'Clasificador general', ejemplo: '一个人 (yī gè rén) - una persona', opciones: ['gē', 'gé', 'gě', 'gè'], respuesta: 3, audio: 'ge4' },
        { hanzi: '到', pinyin: 'dào', significado: 'Llegar a', ejemplo: '到家 (dào jiā) - llegar a casa', opciones: ['dāo', 'dáo', 'dǎo', 'dào'], respuesta: 3, audio: 'dao4' },
        { hanzi: '说', pinyin: 'shuō', significado: 'Hablar', ejemplo: '说话 (shuōhuà) - hablar', opciones: ['shuō', 'shuó', 'shuǒ', 'shuò'], respuesta: 0, audio: 'shuo1' },
        { hanzi: '们', pinyin: 'men', significado: 'Partícula plural', ejemplo: '我们 (wǒmen) - nosotros', opciones: ['mēn', 'mén', 'měn', 'men'], respuesta: 3, audio: 'men' }
    ],
    
    // MAZO 3: Top 21-30
    3: [
        { hanzi: '为', pinyin: 'wèi', significado: 'Para/por', ejemplo: '为什么 (wèishénme) - por qué', opciones: ['wēi', 'wéi', 'wěi', 'wèi'], respuesta: 3, audio: 'wei4' },
        { hanzi: '子', pinyin: 'zi', significado: 'Hijo/pequeño', ejemplo: '儿子 (érzi) - hijo', opciones: ['zī', 'zí', 'zǐ', 'zi'], respuesta: 3, audio: 'zi' },
        { hanzi: '和', pinyin: 'hé', significado: 'Y/con', ejemplo: '我和你 (wǒ hé nǐ) - tú y yo', opciones: ['hē', 'hé', 'hě', 'hè'], respuesta: 1, audio: 'he2' },
        { hanzi: '你', pinyin: 'nǐ', significado: 'Tú', ejemplo: '你好 (nǐ hǎo) - hola', opciones: ['nī', 'ní', 'nǐ', 'nì'], respuesta: 2, audio: 'ni3' },
        { hanzi: '地', pinyin: 'de', significado: 'Partícula adverbial', ejemplo: '慢慢地 (màn màn de) - lentamente', opciones: ['dī', 'dí', 'dǐ', 'de'], respuesta: 3, audio: 'de' },
        { hanzi: '出', pinyin: 'chū', significado: 'Salir', ejemplo: '出口 (chūkǒu) - salida', opciones: ['chū', 'chú', 'chǔ', 'chù'], respuesta: 0, audio: 'chu1' },
        { hanzi: '道', pinyin: 'dào', significado: 'Camino/decir', ejemplo: '道路 (dàolù) - carretera', opciones: ['dāo', 'dáo', 'dǎo', 'dào'], respuesta: 3, audio: 'dao4' },
        { hanzi: '也', pinyin: 'yě', significado: 'También', ejemplo: '我也是 (wǒ yě shì) - yo también soy', opciones: ['yē', 'yé', 'yě', 'yè'], respuesta: 2, audio: 'ye3' },
        { hanzi: '时', pinyin: 'shí', significado: 'Tiempo', ejemplo: '时间 (shíjiān) - tiempo', opciones: ['shī', 'shí', 'shǐ', 'shì'], respuesta: 1, audio: 'shi2' },
        { hanzi: '年', pinyin: 'nián', significado: 'Año', ejemplo: '今年 (jīnnián) - este año', opciones: ['niān', 'nián', 'niǎn', 'niàn'], respuesta: 1, audio: 'nian2' }
    ],
    
    // MAZO 4: Top 31-40
    4: [
        { hanzi: '得', pinyin: 'de', significado: 'Partícula complemento', ejemplo: '跑得快 (pǎo de kuài) - correr rápido', opciones: ['dē', 'dé', 'dě', 'de'], respuesta: 3, audio: 'de' },
        { hanzi: '就', pinyin: 'jiù', significado: 'Entonces/justo', ejemplo: '我就来 (wǒ jiù lái) - ya voy', opciones: ['jiū', 'jiú', 'jiǔ', 'jiù'], respuesta: 3, audio: 'jiu4' },
        { hanzi: '那', pinyin: 'nà', significado: 'Ese/aquel', ejemplo: '那个人 (nà gè rén) - esa persona', opciones: ['nā', 'ná', 'nǎ', 'nà'], respuesta: 3, audio: 'na4' },
        { hanzi: '要', pinyin: 'yào', significado: 'Querer/necesitar', ejemplo: '我要水 (wǒ yào shuǐ) - quiero agua', opciones: ['yāo', 'yáo', 'yǎo', 'yào'], respuesta: 3, audio: 'yao4' },
        { hanzi: '下', pinyin: 'xià', significado: 'Abajo/bajar', ejemplo: '下雨 (xià yǔ) - llover', opciones: ['xiā', 'xiá', 'xiǎ', 'xià'], respuesta: 3, audio: 'xia4' },
        { hanzi: '生', pinyin: 'shēng', significado: 'Nacer/vida', ejemplo: '生日 (shēngrì) - cumpleaños', opciones: ['shēng', 'shéng', 'shěng', 'shèng'], respuesta: 0, audio: 'sheng1' },
        { hanzi: '会', pinyin: 'huì', significado: 'Saber/poder', ejemplo: '我会说中文 (wǒ huì shuō Zhōngwén) - sé hablar chino', opciones: ['huī', 'huí', 'huǐ', 'huì'], respuesta: 3, audio: 'hui4' },
        { hanzi: '自', pinyin: 'zì', significado: 'Desde/sí mismo', ejemplo: '自己 (zìjǐ) - uno mismo', opciones: ['zī', 'zí', 'zǐ', 'zì'], respuesta: 3, audio: 'zi4' },
        { hanzi: '着', pinyin: 'zhe', significado: 'Partícula de acción continua', ejemplo: '看着 (kàn zhe) - mirando', opciones: ['zhē', 'zhé', 'zhě', 'zhe'], respuesta: 3, audio: 'zhe' },
        { hanzi: '去', pinyin: 'qù', significado: 'Ir', ejemplo: '我去学校 (wǒ qù xuéxiào) - voy a la escuela', opciones: ['qū', 'qú', 'qǔ', 'qù'], respuesta: 3, audio: 'qu4' }
    ],
    
    // MAZO 5: Top 41-50
    5: [
        { hanzi: '过', pinyin: 'guò', significado: 'Experiencia pasada', ejemplo: '我去过中国 (wǒ qù guò Zhōngguó) - he ido a China', opciones: ['guō', 'guó', 'guǒ', 'guò'], respuesta: 3, audio: 'guo4' },
        { hanzi: '家', pinyin: 'jiā', significado: 'Casa/familia', ejemplo: '回家 (huí jiā) - volver a casa', opciones: ['jiā', 'jiá', 'jiǎ', 'jià'], respuesta: 0, audio: 'jia1' },
        { hanzi: '学', pinyin: 'xué', significado: 'Estudiar', ejemplo: '学习 (xuéxí) - estudiar', opciones: ['xuē', 'xué', 'xuě', 'xuè'], respuesta: 1, audio: 'xue2' },
        { hanzi: '对', pinyin: 'duì', significado: 'Correcto/hacia', ejemplo: '对不起 (duìbuqǐ) - lo siento', opciones: ['duī', 'duí', 'duǐ', 'duì'], respuesta: 3, audio: 'dui4' },
        { hanzi: '可', pinyin: 'kě', significado: 'Puede/posible', ejemplo: '可以 (kěyǐ) - puede', opciones: ['kē', 'ké', 'kě', 'kè'], respuesta: 2, audio: 'ke3' },
        { hanzi: '她', pinyin: 'tā', significado: 'Ella', ejemplo: '她是我朋友 (tā shì wǒ péngyou) - ella es mi amiga', opciones: ['tā', 'tá', 'tǎ', 'tà'], respuesta: 0, audio: 'ta1' },
        { hanzi: '里', pinyin: 'lǐ', significado: 'Dentro', ejemplo: '里面 (lǐmiàn) - interior', opciones: ['lī', 'lí', 'lǐ', 'lì'], respuesta: 2, audio: 'li3' },
        { hanzi: '后', pinyin: 'hòu', significado: 'Después/detrás', ejemplo: '后面 (hòumiàn) - atrás', opciones: ['hōu', 'hóu', 'hǒu', 'hòu'], respuesta: 3, audio: 'hou4' },
        { hanzi: '小', pinyin: 'xiǎo', significado: 'Pequeño', ejemplo: '小孩 (xiǎohái) - niño', opciones: ['xiāo', 'xiáo', 'xiǎo', 'xiào'], respuesta: 2, audio: 'xiao3' },
        { hanzi: '么', pinyin: 'me', significado: 'Partícula interrogativa', ejemplo: '什么 (shénme) - qué', opciones: ['mē', 'mé', 'mě', 'me'], respuesta: 3, audio: 'me' }
    ],
    
    // MAZO 6: Top 51-60
    6: [
        { hanzi: '心', pinyin: 'xīn', significado: 'Corazón/mente', ejemplo: '心爱 (xīn ài) - querido', opciones: ['xīn', 'xín', 'xǐn', 'xìn'], respuesta: 0, audio: 'xin1' },
        { hanzi: '多', pinyin: 'duō', significado: 'Mucho', ejemplo: '多少 (duōshǎo) - cuánto', opciones: ['duō', 'duó', 'duǒ', 'duò'], respuesta: 0, audio: 'duo1' },
        { hanzi: '天', pinyin: 'tiān', significado: 'Cielo/día', ejemplo: '今天 (jīntiān) - hoy', opciones: ['tiān', 'tián', 'tiǎn', 'tiàn'], respuesta: 0, audio: 'tian1' },
        { hanzi: '而', pinyin: 'ér', significado: 'Pero/y', ejemplo: '而且 (érqiě) - además', opciones: ['ēr', 'ér', 'ěr', 'èr'], respuesta: 1, audio: 'er2' },
        { hanzi: '能', pinyin: 'néng', significado: 'Poder/habilidad', ejemplo: '能力 (nénglì) - habilidad', opciones: ['nēng', 'néng', 'něng', 'nèng'], respuesta: 1, audio: 'neng2' },
        { hanzi: '好', pinyin: 'hǎo', significado: 'Bueno', ejemplo: '你好 (nǐ hǎo) - hola', opciones: ['hāo', 'háo', 'hǎo', 'hào'], respuesta: 2, audio: 'hao3' },
        { hanzi: '都', pinyin: 'dōu', significado: 'Todo/todos', ejemplo: '我们都去 (wǒmen dōu qù) - todos vamos', opciones: ['dōu', 'dóu', 'dǒu', 'dòu'], respuesta: 0, audio: 'dou1' },
        { hanzi: '面', pinyin: 'miàn', significado: 'Cara/superficie', ejemplo: '面条 (miàntiáo) - fideos', opciones: ['miān', 'mián', 'miǎn', 'miàn'], respuesta: 3, audio: 'mian4' },
        { hanzi: '最', pinyin: 'zuì', significado: 'El más', ejemplo: '最好 (zuì hǎo) - el mejor', opciones: ['zuī', 'zuí', 'zuǐ', 'zuì'], respuesta: 3, audio: 'zui4' },
        { hanzi: '部', pinyin: 'bù', significado: 'Parte/sección', ejemplo: '部分 (bùfen) - parte', opciones: ['bū', 'bú', 'bǔ', 'bù'], respuesta: 3, audio: 'bu4' }
    ],
    
    // MAZO 7: Top 61-70
    7: [
        { hanzi: '进', pinyin: 'jìn', significado: 'Entrar', ejemplo: '进步 (jìnbù) - progreso', opciones: ['jīn', 'jín', 'jǐn', 'jìn'], respuesta: 3, audio: 'jin4' },
        { hanzi: '样', pinyin: 'yàng', significado: 'Tipo/manera', ejemplo: '一样 (yīyàng) - igual', opciones: ['yāng', 'yáng', 'yǎng', 'yàng'], respuesta: 3, audio: 'yang4' },
        { hanzi: '主', pinyin: 'zhǔ', significado: 'Dueño/principal', ejemplo: '主要 (zhǔyào) - principal', opciones: ['zhū', 'zhú', 'zhǔ', 'zhù'], respuesta: 2, audio: 'zhu3' },
        { hanzi: '想', pinyin: 'xiǎng', significado: 'Pensar/querer', ejemplo: '我想你 (wǒ xiǎng nǐ) - te extraño', opciones: ['xiāng', 'xiáng', 'xiǎng', 'xiàng'], respuesta: 2, audio: 'xiang3' },
        { hanzi: '体', pinyin: 'tǐ', significado: 'Cuerpo', ejemplo: '身体 (shēntǐ) - cuerpo', opciones: ['tī', 'tí', 'tǐ', 'tì'], respuesta: 2, audio: 'ti3' },
        { hanzi: '政', pinyin: 'zhèng', significado: 'Gobierno', ejemplo: '政治 (zhèngzhì) - política', opciones: ['zhēng', 'zhéng', 'zhěng', 'zhèng'], respuesta: 3, audio: 'zheng4' },
        { hanzi: '事', pinyin: 'shì', significado: 'Asunto/cosa', ejemplo: '事情 (shìqing) - asunto', opciones: ['shī', 'shí', 'shǐ', 'shì'], respuesta: 3, audio: 'shi4' },
        { hanzi: '用', pinyin: 'yòng', significado: 'Usar', ejemplo: '用钱 (yòng qián) - usar dinero', opciones: ['yōng', 'yóng', 'yǒng', 'yòng'], respuesta: 3, audio: 'yong4' },
        { hanzi: '所', pinyin: 'suǒ', significado: 'Lugar', ejemplo: '所以 (suǒyǐ) - por lo tanto', opciones: ['suō', 'suó', 'suǒ', 'suò'], respuesta: 2, audio: 'suo3' },
        { hanzi: '二', pinyin: 'èr', significado: 'Dos', ejemplo: '二月 (èr yuè) - febrero', opciones: ['ēr', 'ér', 'ěr', 'èr'], respuesta: 3, audio: 'er4' }
    ],
    
    // MAZO 8: Top 71-80
    8: [
        { hanzi: '三', pinyin: 'sān', significado: 'Tres', ejemplo: '三岁 (sān suì) - tres años', opciones: ['sān', 'sán', 'sǎn', 'sàn'], respuesta: 0, audio: 'san1' },
        { hanzi: '民', pinyin: 'mín', significado: 'Pueblo', ejemplo: '人民 (rénmín) - pueblo', opciones: ['mīn', 'mín', 'mǐn', 'mìn'], respuesta: 1, audio: 'min2' },
        { hanzi: '十', pinyin: 'shí', significado: 'Diez', ejemplo: '十分 (shífēn) - muy', opciones: ['shī', 'shí', 'shǐ', 'shì'], respuesta: 1, audio: 'shi2' },
        { hanzi: '方', pinyin: 'fāng', significado: 'Dirección/método', ejemplo: '方法 (fāngfǎ) - método', opciones: ['fāng', 'fáng', 'fǎng', 'fàng'], respuesta: 0, audio: 'fang1' },
        { hanzi: '知', pinyin: 'zhī', significado: 'Saber', ejemplo: '知道 (zhīdào) - saber', opciones: ['zhī', 'zhí', 'zhǐ', 'zhì'], respuesta: 0, audio: 'zhi1' },
        { hanzi: '老', pinyin: 'lǎo', significado: 'Viejo', ejemplo: '老师 (lǎoshī) - profesor', opciones: ['lāo', 'láo', 'lǎo', 'lào'], respuesta: 2, audio: 'lao3' },
        { hanzi: '性', pinyin: 'xìng', significado: 'Naturaleza/sexo', ejemplo: '性格 (xìnggé) - personalidad', opciones: ['xīng', 'xíng', 'xǐng', 'xìng'], respuesta: 3, audio: 'xing4' },
        { hanzi: '动', pinyin: 'dòng', significado: 'Mover', ejemplo: '动物 (dòngwù) - animal', opciones: ['dōng', 'dóng', 'dǒng', 'dòng'], respuesta: 3, audio: 'dong4' },
        { hanzi: '法', pinyin: 'fǎ', significado: 'Ley/método', ejemplo: '法律 (fǎlǜ) - ley', opciones: ['fā', 'fá', 'fǎ', 'fà'], respuesta: 2, audio: 'fa3' },
        { hanzi: '行', pinyin: 'xíng', significado: 'Andar/estar bien', ejemplo: '银行 (yínháng) - banco', opciones: ['xīng', 'xíng', 'xǐng', 'xìng'], respuesta: 1, audio: 'xing2' }
    ],
    
    // MAZO 9: Top 81-90
    9: [
        { hanzi: '意', pinyin: 'yì', significado: 'Idea/intención', ejemplo: '意思 (yìsi) - significado', opciones: ['yī', 'yí', 'yǐ', 'yì'], respuesta: 3, audio: 'yi4' },
        { hanzi: '经', pinyin: 'jīng', significado: 'Pasar/por', ejemplo: '经过 (jīngguò) - pasar por', opciones: ['jīng', 'jíng', 'jǐng', 'jìng'], respuesta: 0, audio: 'jing1' },
        { hanzi: '发', pinyin: 'fā', significado: 'Enviar/emitir', ejemplo: '发现 (fāxiàn) - descubrir', opciones: ['fā', 'fá', 'fǎ', 'fà'], respuesta: 0, audio: 'fa1' },
        { hanzi: '于', pinyin: 'yú', significado: 'En/sobre', ejemplo: '关于 (guānyú) - acerca de', opciones: ['yū', 'yú', 'yǔ', 'yù'], respuesta: 1, audio: 'yu2' },
        { hanzi: '本', pinyin: 'běn', significado: 'Libro/origen', ejemplo: '日本 (Rìběn) - Japón', opciones: ['bēn', 'bén', 'běn', 'bèn'], respuesta: 2, audio: 'ben3' },
        { hanzi: '定', pinyin: 'dìng', significado: 'Decidir/seguro', ejemplo: '一定 (yīdìng) - definitivamente', opciones: ['dīng', 'díng', 'dǐng', 'dìng'], respuesta: 3, audio: 'ding4' },
        { hanzi: '从', pinyin: 'cóng', significado: 'Desde/seguir', ejemplo: '从前 (cóngqián) - antes', opciones: ['cōng', 'cóng', 'cǒng', 'còng'], respuesta: 1, audio: 'cong2' },
        { hanzi: '月', pinyin: 'yuè', significado: 'Luna/mes', ejemplo: '月亮 (yuèliang) - luna', opciones: ['yuē', 'yué', 'yuě', 'yuè'], respuesta: 3, audio: 'yue4' },
        { hanzi: '两', pinyin: 'liǎng', significado: 'Dos/ambos', ejemplo: '两个 (liǎng gè) - dos', opciones: ['liāng', 'liáng', 'liǎng', 'liàng'], respuesta: 2, audio: 'liang3' },
        { hanzi: '长', pinyin: 'cháng', significado: 'Largo', ejemplo: '长江 (Cháng Jiāng) - Río Yangtsé', opciones: ['chāng', 'cháng', 'chǎng', 'chàng'], respuesta: 1, audio: 'chang2' }
    ],
    
    // MAZO 10: Top 91-100
    10: [
        { hanzi: '实', pinyin: 'shí', significado: 'Real/lleno', ejemplo: '实在 (shízài) - realmente', opciones: ['shī', 'shí', 'shǐ', 'shì'], respuesta: 1, audio: 'shi2' },
        { hanzi: '现', pinyin: 'xiàn', significado: 'Aparecer/actual', ejemplo: '现在 (xiànzài) - ahora', opciones: ['xiān', 'xián', 'xiǎn', 'xiàn'], respuesta: 3, audio: 'xian4' },
        { hanzi: '分', pinyin: 'fēn', significado: 'Dividir/minuto', ejemplo: '分钟 (fēnzhōng) - minuto', opciones: ['fēn', 'fén', 'fěn', 'fèn'], respuesta: 0, audio: 'fen1' },
        { hanzi: '成', pinyin: 'chéng', significado: 'Convertirse/éxito', ejemplo: '成功 (chénggōng) - éxito', opciones: ['chēng', 'chéng', 'chěng', 'chèng'], respuesta: 1, audio: 'cheng2' },
        { hanzi: '又', pinyin: 'yòu', significado: 'Otra vez/también', ejemplo: '又是 (yòu shì) - otra vez es', opciones: ['yōu', 'yóu', 'yǒu', 'yòu'], respuesta: 3, audio: 'you4' },
        { hanzi: '机', pinyin: 'jī', significado: 'Máquina/oportunidad', ejemplo: '机会 (jīhuì) - oportunidad', opciones: ['jī', 'jí', 'jǐ', 'jì'], respuesta: 0, audio: 'ji1' },
        { hanzi: '当', pinyin: 'dāng', significado: 'Cuando/adecuado', ejemplo: '当时 (dāngshí) - en ese tiempo', opciones: ['dāng', 'dáng', 'dǎng', 'dàng'], respuesta: 0, audio: 'dang1' },
        { hanzi: '同', pinyin: 'tóng', significado: 'Mismo/junto', ejemplo: '同学 (tóngxué) - compañero', opciones: ['tōng', 'tóng', 'tǒng', 'tòng'], respuesta: 1, audio: 'tong2' },
        { hanzi: '无', pinyin: 'wú', significado: 'No tener/nada', ejemplo: '无法 (wúfǎ) - no poder', opciones: ['wū', 'wú', 'wǔ', 'wù'], respuesta: 1, audio: 'wu2' },
        { hanzi: '工', pinyin: 'gōng', significado: 'Trabajo', ejemplo: '工作 (gōngzuò) - trabajo', opciones: ['gōng', 'góng', 'gǒng', 'gòng'], respuesta: 0, audio: 'gong1' }
    ]
};

// Funciones para Chino
function obtenerLetrasChino(mazo) {
    const preguntasOriginales = alfabetoChino[mazo] || [];
    
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
    return Object.keys(alfabetoChino).length;
}

function obtenerNombreMazoChino(mazo) {
    const nombres = {
        1: 'Top 1-10',
        2: 'Top 11-20',
        3: 'Top 21-30',
        4: 'Top 31-40',
        5: 'Top 41-50',
        6: 'Top 51-60',
        7: 'Top 61-70',
        8: 'Top 71-80',
        9: 'Top 81-90',
        10: 'Top 91-100'
    };
    return nombres[mazo] || `Mazo ${mazo}`;
}
