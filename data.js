// data.js
const KANAS = [
    {q:'あ', a:'a'}, {q:'い', a:'i'}, {q:'う', a:'u'}, {q:'え', a:'e'}, {q:'お', a:'o'},
    {q:'か', a:'ka'}, {q:'き', a:'ki'}, {q:'く', a:'ku'}, {q:'け', a:'ke'}, {q:'こ', a:'ko'},
    {q:'さ', a:'sa'}, {q:'し', a:'shi'}, {q:'す', a:'su'}, {q:'せ', a:'se'}, {q:'そ', a:'so'},
    {q:'た', a:'ta'}, {q:'ち', a:'chi'}, {q:'つ', a:'tsu'}, {q:'て', a:'te'}, {q:'と', a:'to'},
    {q:'な', a:'na'}, {q:'に', a:'ni'}, {q:'ぬ', a:'nu'}, {q:'ね', a:'ne'}, {q:'の', a:'no'},
    {q:'は', a:'ha'}, {q:'ひ', a:'hi'}, {q:'ふ', a:'fu'}, {q:'へ', a:'he'}, {q:'ほ', a:'ho'},
    {q:'ま', a:'ma'}, {q:'み', a:'mi'}, {q:'む', a:'mu'}, {q:'め', a:'me'}, {q:'も', a:'mo'},
    {q:'や', a:'ya'}, {q:'ゆ', a:'yu'}, {q:'よ', a:'yo'},
    {q:'ら', a:'ra'}, {q:'り', a:'ri'}, {q:'る', a:'ru'}, {q:'れ', a:'re'}, {q:'ろ', a:'ro'},
    {q:'わ', a:'wa'}, {q:'を', a:'wo'}, {q:'ん', a:'n'}
];

const generateNumbers = () => {
    const units = ['', 'いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう'];
    return Array.from({length: 100}, (_, i) => {
        const n = i + 1;
        let h = (n === 100) ? 'ひゃく' : (n < 10) ? units[n] : (Math.floor(n/10) > 1 ? units[Math.floor(n/10)] : '') + 'じゅう' + units[n%10];
        return {q: h, pt: n.toString(), jp: n.toString(), cat: 'Números'};
    });
};

const WORDS_DB = [
    ...generateNumbers(),
    // FAMÍLIA (Própria e Terceiros)
    {q:'おじいさん', pt:'avo', jp:'ojiisan', cat:'Família'}, {q:'おばあさん', pt:'avo', jp:'obaasan', cat:'Família'},
    {q:'ちち', pt:'pai', jp:'chichi', cat:'Família'}, {q:'はは', pt:'mae', jp:'haha', cat:'Família'},
    {q:'おとうさん', pt:'pai', jp:'otousan', cat:'Família'}, {q:'おかあさん', pt:'mae', jp:'okaasan', cat:'Família'},
    {q:'おじ', pt:'tio', jp:'oji', cat:'Família'}, {q:'おば', pt:'tia', jp:'oba', cat:'Família'},
    {q:'あに', pt:'irmao mais velho', jp:'ani', cat:'Família'}, {q:'あね', pt:'irma mais velha', jp:'ane', cat:'Família'},
    {q:'おとうto', pt:'irmao mais novo', jp:'otouto', cat:'Família'}, {q:'いもうと', pt:'irma mais nova', jp:'imouto', cat:'Família'},
    {q:'いとこ', pt:'primo', jp:'itoko', cat:'Família'},
    // CUMPRIMENTOS
    {q:'おはよう', pt:'bom dia', jp:'ohayou', cat:'Social'}, {q:'こんにちは', pt:'boa tarde', jp:'konnichiwa', cat:'Social'},
    {q:'こんばんは', pt:'boa noite', jp:'konbanwa', cat:'Social'}, {q:'おやすみ', pt:'boa noite', jp:'oyasumi', cat:'Social'},
    {q:'ありがとう', pt:'obrigado', jp:'arigatou', cat:'Social'}, {q:'さようなra', pt:'adeus', jp:'sayounara', cat:'Social'},
    // CORES (10 solicitadas)
    {q:'あか', pt:'vermelho', jp:'aka', cat:'Cores'}, {q:'みどり', pt:'verde', jp:'midori', cat:'Cores'},
    {q:'あお', pt:'azul', jp:'ao', cat:'Cores'}, {q:'きいろ', pt:'amarelo', jp:'kiiro', cat:'Cores'},
    {q:'はいいろ', pt:'cinza', jp:'haiiro', cat:'Cores'}, {q:'くろ', pt:'preto', jp:'kuro', cat:'Cores'},
    {q:'しろ', pt:'branco', jp:'shiro', cat:'Cores'}, {q:'ぴんく', pt:'rosa', jp:'pinku', cat:'Cores'},
    {q:'むらさき', pt:'roxo', jp:'murasaki', cat:'Cores'}, {q:'みずいろ', pt:'ciano', jp:'mizuiro', cat:'Cores'},
    // ALIMENTOS (50 tipos)
    {q:'にんじん', pt:'cenoura', jp:'ninjin', cat:'Alimentos'}, {q:'たまねぎ', pt:'cebola', jp:'tamanegi', cat:'Alimentos'},
    {q:'じゃがいも', pt:'batata', jp:'jagaimo', cat:'Alimentos'}, {q:'なす', pt:'berinjela', jp:'nasu', cat:'Alimentos'},
    {q:'きゅうり', pt:'pepino', jp:'kyuuri', cat:'Alimentos'}, {q:'とまと', pt:'tomate', jp:'tomato', cat:'Alimentos'},
    {q:'にく', pt:'carne', jp:'niku', cat:'Alimentos'}, {q:'さかな', pt:'peixe', jp:'sakana', cat:'Alimentos'},
    {q:'ごはん', pt:'arroz', jp:'gohan', cat:'Alimentos'}, {q:'ぱん', pt:'pao', jp:'pan', cat:'Alimentos'},
    {q:'たまご', pt:'ovo', jp:'tamago', cat:'Alimentos'}, {q:'りんご', pt:'maca', jp:'ringo', cat:'Alimentos'},
    {q:'いちご', pt:'morango', jp:'ichigo', cat:'Alimentos'}, {q:'みかん', pt:'laranja', jp:'mikan', cat:'Alimentos'},
    {q:'すいか', pt:'melancia', jp:'suika', cat:'Alimentos'}, {q:'なし', pt:'pera', jp:'nashi', cat:'Alimentos'},
    {q:'ぶどう', pt:'uva', jp:'budou', cat:'Alimentos'}, {q:'もも', pt:'pessego', jp:'momo', cat:'Alimentos'},
    {q:'くり', pt:'castanha', jp:'kuri', cat:'Alimentos'}, {q:'きのこ', pt:'cogumelo', jp:'kinoko', cat:'Alimentos'},
    {q:'えび', pt:'camarao', jp:'ebi', cat:'Alimentos'}, {q:'いか', pt:'lula', jp:'ika', cat:'Alimentos'},
    {q:'たこ', pt:'polvo', jp:'tako', cat:'Alimentos'}, {q:'かに', pt:'caranguejo', jp:'kani', cat:'Alimentos'},
    {q:'とり', pt:'frango', jp:'tori', cat:'Alimentos'}, {q:'ぶた', pt:'porco', jp:'buta', cat:'Alimentos'},
    {q:'うし', pt:'boi', jp:'ushi', cat:'Alimentos'}, {q:'みず', pt:'agua', jp:'mizu', cat:'Alimentos'},
    {q:'おちゃ', pt:'cha', jp:'ocha', cat:'Alimentos'}, {q:'さけ', pt:'sake', jp:'sake', cat:'Alimentos'},
    {q:'しお', pt:'sal', jp:'shio', cat:'Alimentos'}, {q:'さとう', pt:'acucar', jp:'satou', cat:'Alimentos'},
    {q:'みそ', pt:'miso', jp:'miso', cat:'Alimentos'}, {q:'しょうゆ', pt:'shoyu', jp:'shouyu', cat:'Alimentos'},
    {q:'すし', pt:'sushi', jp:'sushi', cat:'Alimentos'}, {q:'らーめん', pt:'ramen', jp:'raamen', cat:'Alimentos'},
    {q:'うどん', pt:'udon', jp:'udon', cat:'Alimentos'}, {q:'そば', pt:'soba', jp:'soba', cat:'Alimentos'},
    {q:'てんぷら', pt:'tempura', jp:'tenpura', cat:'Alimentos'}, {q:'かれー', pt:'curry', jp:'karee', cat:'Alimentos'},
    {q:'さらだ', pt:'salada', jp:'sarada', cat:'Alimentos'}, {q:'すーぷ', pt:'sopa', jp:'suupu', cat:'Alimentos'},
    {q:'けーき', pt:'bolo', jp:'keeki', cat:'Alimentos'}, {q:'あめ', pt:'doce', jp:'ame', cat:'Alimentos'},
    {q:'ちょこ', pt:'chocolate', jp:'choko', cat:'Alimentos'}, {q:'びーる', pt:'cerveja', jp:'biiru', cat:'Alimentos'},
    {q:'わいん', pt:'vinho', jp:'wain', cat:'Alimentos'}, {q:'じゅーす', pt:'suco', jp:'juusu', cat:'Alimentos'},
    {q:'こーひー', pt:'cafe', jp:'koohii', cat:'Alimentos'}, {q:'みるく', pt:'leite', jp:'miruku', cat:'Alimentos'},
    // DRAGON BALL (20)
    {q:'ごくう', pt:'goku', jp:'goku', cat:'Dragon Ball'}, {q:'べじーた', pt:'vegeta', jp:'vegeta', cat:'Dragon Ball'},
    {q:'ごはん', pt:'gohan', jp:'gohan', cat:'Dragon Ball'}, {q:'ぴっころ', pt:'piccolo', jp:'pikkoro', cat:'Dragon Ball'},
    {q:'くりりん', pt:'kuririn', jp:'kuririn', cat:'Dragon Ball'}, {q:'とらんくす', pt:'trunks', jp:'torankusu', cat:'Dragon Ball'},
    {q:'ぶるま', pt:'bulma', jp:'buruma', cat:'Dragon Ball'}, {q:'かめせんにん', pt:'mestre kame', jp:'kamesennin', cat:'Dragon Ball'},
    {q:'ふりーざ', pt:'freeza', jp:'furiiza', cat:'Dragon Ball'}, {q:'せる', pt:'cell', jp:'seru', cat:'Dragon Ball'},
    {q:'ぶう', pt:'buu', jp:'buu', cat:'Dragon Ball'}, {q:'やむちゃ', pt:'yamcha', jp:'yamucha', cat:'Dragon Ball'},
    {q:'てんしんはん', pt:'tenshinhan', jp:'tenshinhan', cat:'Dragon Ball'}, {q:'ぎにゅう', pt:'ginyu', jp:'ginyuu', cat:'Dragon Ball'},
    {q:'びるす', pt:'beerus', jp:'birusu', cat:'Dragon Ball'}, {q:'ういす', pt:'whis', jp:'uisu', cat:'Dragon Ball'},
    {q:'ちち', pt:'chichi', jp:'chichi', cat:'Dragon Ball'}, {q:'びでる', pt:'videl', jp:'bideru', cat:'Dragon Ball'},
    {q:'ぱん', pt:'pan', jp:'pan', cat:'Dragon Ball'}, {q:'ひるでがーん', pt:'hirudegarn', jp:'hirudegaan', cat:'Dragon Ball'},
    // NARUTO (20)
    {q:'なると', pt:'naruto', jp:'naruto', cat:'Naruto'}, {q:'さすけ', pt:'sasuke', jp:'sasuke', cat:'Naruto'},
    {q:'さくら', pt:'sakura', jp:'sakura', cat:'Naruto'}, {q:'かかし', pt:'kakashi', jp:'kakashi', cat:'Naruto'},
    {q:'いたち', pt:'itachi', jp:'itachi', cat:'Naruto'}, {q:'があら', pt:'gaara', jp:'gaara', cat:'Naruto'},
    {q:'じらいや', pt:'jiraiya', jp:'jiraiya', cat:'Naruto'}, {q:'つなで', pt:'tsunade', jp:'tsunade', cat:'Naruto'},
    {q:'おろちまる', pt:'orochimaru', jp:'orochimaru', cat:'Naruto'}, {q:'ひなた', pt:'hinata', jp:'hinata', cat:'Naruto'},
    {q:'しかまる', pt:'shikamaru', jp:'shikamaru', cat:'Naruto'}, {q:'ねじ', pt:'neji', jp:'neji', cat:'Naruto'},
    {q:'さい', pt:'sai', jp:'sai', cat:'Naruto'}, {q:'いの', pt:'ino', jp:'ino', cat:'Naruto'},
    {q:'きば', pt:'kiba', jp:'kiba', cat:'Naruto'}, {q:'しー', pt:'shi', jp:'shii', cat:'Naruto'},
    {q:'まだら', pt:'madara', jp:'madara', cat:'Naruto'}, {q:'おびと', pt:'obito', jp:'obito', cat:'Naruto'},
    {q:'ぺいん', pt:'pain', jp:'pein', cat:'Naruto'},
    {q:'さすけ', pt:'sasuke', jp:'sasuke', cat:'Naruto'},
    {q:'おびと', pt:'obito', jp:'obito', cat:'Naruto'},
    {q:'かぐや', pt:'kaguya', jp:'kaguya', cat:'Naruto'},
    {q:'くれない', pt:'kurenai', jp:'kurenai', cat:'Naruto'},
    // JUJUTSU KAISEN (20)
    {q:'いたどり', pt:'itadori', jp:'itadori', cat:'Jujutsu'}, {q:'ふしぐろ', pt:'fushiguro', jp:'fushiguro', cat:'Jujutsu'},
    {q:'くぎさき', pt:'kugisaki', jp:'kugisaki', cat:'Jujutsu'}, {q:'ごじょう', pt:'gojo', jp:'gojou', cat:'Jujutsu'},
    {q:'すくな', pt:'sukuna', jp:'sukuna', cat:'Jujutsu'}, {q:'ななみ', pt:'nanami', jp:'nanami', cat:'Jujutsu'},
    {q:'げとう', pt:'geto', jp:'getou', cat:'Jujutsu'}, {q:'まひと', pt:'mahito', jp:'mahito', cat:'Jujutsu'},
    {q:'まき', pt:'maki', jp:'maki', cat:'Jujutsu'}, {q:'いぬまき', pt:'inumaki', jp:'inumaki', cat:'Jujutsu'},
    {q:'ぱんだ', pt:'panda', jp:'panda', cat:'Jujutsu'}, {q:'おっこつ', pt:'okkotsu', jp:'okkotsu', cat:'Jujutsu'},
    {q:'とうじ', pt:'toji', jp:'touji', cat:'Jujutsu'}, {q:'じょうご', pt:'jogo', jp:'jougo', cat:'Jujutsu'},
    {q:'はなみ', pt:'hanami', jp:'hanami', cat:'Jujutsu'}, {q:'みわ', pt:'miwa', jp:'miwa', cat:'Jujutsu'},
    {q:'めいめい', pt:'mei mei', jp:'meimei', cat:'Jujutsu'}, {q:'ちょうそう', pt:'choso', jp:'chousou', cat:'Jujutsu'},
    {q:'うたひめ', pt:'utahime', jp:'utahime', cat:'Jujutsu'}, {q:'がくがんじ', pt:'gakuganji', jp:'gakuganji', cat:'Jujutsu'},
    {q:'ごじょうさとる', pt:'satoru gojo', jp:'gojou satoru', cat:'Jujutsu'},
    // DEMON SLAYER (20)
    {q:'たんじろう', pt:'tanjiro', jp:'tanjiro', cat:'Demon Slayer'}, {q:'ねずこ', pt:'nezuko', jp:'nezuko', cat:'Demon Slayer'},
    {q:'ぜんいつ', pt:'zenitsu', jp:'zenitsu', cat:'Demon Slayer'}, {q:'いのすけ', pt:'inosuke', jp:'inosuke', cat:'Demon Slayer'},
    {q:'ぎゆう', pt:'giyu', jp:'giyuu', cat:'Demon Slayer'}, {q:'しのぶ', pt:'shinobu', jp:'shinobu', cat:'Demon Slayer'},
    {q:'れんごく', pt:'rengoku', jp:'rengoku', cat:'Demon Slayer'}, {q:'むざん', pt:'muzan', jp:'muzan', cat:'Demon Slayer'},
    {q:'かなを', pt:'kanao', jp:'kanao', cat:'Demon Slayer'}, {q:'げんや', pt:'genya', jp:'genya', cat:'Demon Slayer'},
    {q:'さねみ', pt:'sanemi', jp:'sanemi', cat:'Demon Slayer'}, {q:'てんげん', pt:'tengen', jp:'tengen', cat:'Demon Slayer'},
    {q:'みつり', pt:'mitsuri', jp:'mitsuri', cat:'Demon Slayer'}, {q:'むいちろう', pt:'muichiro', jp:'muichiro', cat:'Demon Slayer'},
    {q:'ぎょうめい', pt:'gyomei', jp:'gyoumei', cat:'Demon Slayer'}, {q:'おばない', pt:'obanai', jp:'obanai', cat:'Demon Slayer'},
    {q:'あかざ', pt:'akaza', jp:'akaza', cat:'Demon Slayer'}, {q:'どうま', pt:'douma', jp:'douma', cat:'Demon Slayer'},
    {q:'こくしぼう', pt:'kokushibo', jp:'kokushibou', cat:'Demon Slayer'}, {q:'るい', pt:'rui', jp:'rui', cat:'Demon Slayer'},
    // ESTABELECIMENTOS (10)
    {q:'ぎんこう', pt:'banco', jp:'ginkou', cat:'Locais'}, {q:'くうこう', pt:'aeroporto', jp:'kuukou', cat:'Locais'},
    {q:'えき', pt:'estacao', jp:'eki', cat:'Locais'}, {q:'びょういん', pt:'hospital', jp:'byouin', cat:'Locais'},
    {q:'れすとらん', pt:'restaurante', jp:'resutoran', cat:'Locais'}, {q:'ほてる', pt:'hotel', jp:'hoteru', cat:'Locais'},
    {q:'がっこう', pt:'escola', jp:'gakkou', cat:'Locais'}, {q:'こうえん', pt:'parque', jp:'kouen', cat:'Locais'},
    {q:'としょかん', pt:'biblioteca', jp:'toshokan', cat:'Locais'}, {q:'みせ', pt:'loja', jp:'mise', cat:'Locais'}
];