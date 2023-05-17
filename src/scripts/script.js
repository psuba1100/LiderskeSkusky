let hlavtem = 0
let modelovka = 0
let sModelovky
let nos1r = 0
let nos2r = 0
let rNos1
let rNos2

//Definovanie prvkov dokumentu

const dat = {
    nos: {
        nadpis: document.getElementById('nnad'),
        text: document.getElementById('ntex')
    },
    ved: {
        nadpis: document.getElementById('vnad'),
        text: document.getElementById('vtex')
    },
    mod: {
        nadpis: document.getElementById('mnad'),
        text: document.getElementById('mtex')
    },
    btn: document.getElementById('btn')
}

//Definovanie modelových situácii

let modelovky = [
    {
        nadpis: 'Modelová situácia č. 1',
        text: 'V oddiele je vzorný a príkladný člen (14 rokov), ktorý chodí na všetky akcie. Niektorým členom sa zdá premotivovaný (na každej akcii je vždy prvý, ostatným vyčíta, keď meškajú, má mnoho nášiviek na košeli, v prípade otázok ohľadom plnenia odboriek či výziev vždy reaguje hneď prvý) a robia si pre to z neho srandu. Ako by si túto situáciu vyriešil s využitím svojej líderskej osobnosti?'
    },
    {
        nadpis: 'Modelová situácia č. 2',
        text: 'Máš na starosť celoročnú oddielovú etapovú hru, do ktorej sa zapájajú družiny ako malé tímy. Úlohou radcov v tejto etapovke je členov družiny motivovať k zapájaniu sa. Radcovia sa ale po niekoľkých týždňoch trvania etapovky začnú vyhovárať, nechcú sa do nej zapájať a dokonca ju pred členmi zhadzujú. Etapovú hru ste pripravovali spoločne ako oddielová rada, ktorej členmi sú aj títo radcovia. Ako by si postupoval pri riešení tejto situácie?'
    },
    {
        nadpis: 'Modelová situácia č. 3',
        text: 'Si aktívny člen oddielovej rady. Pre ale nedostatok ľudí máš pocit, že oddielový vodca na teba začína klásť stále viac a viac úloh. Zo začiatku sa z toho tešíš, lebo máš viac zodpovednosti a učíš sa nové veci. Časom ale začínaš zanedbávať školu a aj svojich priateľov.'
    },
    {
        nadpis: 'Modelová situácia č. 4',
        text: 'V spolupráci s mestom organizujete akciu pre verejnosť, ktorá má zvýšiť celkové povedomie o ekológii. Pomáha ti pritom aj skupinka starších skautov vo veku 13-14 rokov. Keď sa pri vás pristavujú náhodní okoloidúci v staršom veku, pýtajú sa týchto skautov, prečo majú takéto smiešne košele, hovoria im, že sú pionieri, že za ich čias sa o žiadnej ekológii nehovorilo a všetko bolo aj tak super, pretože sa o nich postarali komunisti. Skupina skautov nevie, čo im na to povedať a po ich odchode sa začne hanbiť za svoju rovnošatu a chce si ju dať dole. Keďže si organizátorom tejto akcie, trápi ťa to. Ako by si to vyriešil?'
    },
    {
        nadpis: 'Modelová situácia č. 5',
        text: 'Si zástupca oddielového vodcu. Skautka (12 rokov) je v oddiele už 5 rokov, vždy vystupovala ako veľmi veselé a priateľské dievča, ktoré rado pracovalo v tíme, resp. v družine, na doterajších táboroch s ňou nebol žiaden problém. Na tohtoročnom tábore ale vyhľadáva skôr samotu, častejšie plače, bočí od ostatných. Do aktivít sa zapája, ale je pasívnejšia ako obvykle. Od jej radcu sa dozvieš, že jej rodičia sa nedávno rozviedli a dievča majú v striedavej starostlivosti. S oddielovým vodcom sa dohodneš, že túto situáciu budeš riešiť ty, keďže je on zároveň aj táborovým vodcom, čo ho “zamestnáva” 24/7. Okrem toho poznáš túto skautku dlhšie ako on. Ako budeš postupovať?'
    },
    {
        nadpis: 'Modelová situácia č. 6',
        text: 'V oddiele máš hyperaktívne dieťa (ide o diagnózu stanovenú lekárom, rodičia vás o tom informovali). Ostatným mladším členom oddielu začína liezť na nervy. V spolupráci s vodcom máš vyriešiť túto situáciu.'
    },
    {
        nadpis: 'Modelová situácia č. 7',
        text: 'Na tábore máš na starosti plnenie odboriek a výziev, keďže vodca tábora je zaneprázdnený inými vecami. Keďže si však musel riešiť ešte niečo do školy, prišiel si na tábor neskôr a zistil si, že jedno z detí si už plní neoficiálnu, resp. zakázanú výzvu bosé nohy (je v polovici výzvy). Ako by si postupoval?'
    },
    {
        nadpis: 'Modelová situácia č. 8',
        text: 'Všimneš si, že niekoľkí členovia Vašej oddielovej rady začali zdieľať na sociálnych sieťach príspevky dezinformačných stránok, ktoré svojím obsahom nielen propagujú extrémistické myšlienky, ale aj šíria dezinformácie ohrozujúce zdravie (napr. proti očkovaniu či tvrdia, že vírus covid-19 je výmysel). Vodca oddielu je aktuálne indisponovaný a nie je v jeho silách zasiahnuť.'
    },
    {
        nadpis: 'Modelová situácia č. 9',
        text: 'Rangeri v tvojom oddiele sa mimo klubovne správajú neskautsky. Vyjadrujú sa vulgárne a fajčia pred deťmi. Keďže je to tvoja veková kategória, vodca ťa požiadal, aby si sám navrhol riešenie.'
    },
    {
        nadpis: 'Modelová situácia č. 10',
        text: 'Si zástupca oddielového vodcu a zistil si na tábore, že dievča (14 rokov) z tvojho oddielu sa vysmieva chlapcovi (15 rokov) z druhého oddielu, že je vegetarián. Osočuje ho komentármi, že “čo je to za chlapa”, keď neje mäso a že by sa mal pochlapiť a začať ho jesť, lebo v mäse je sila. Okrem toho zisťuješ, že dievča pravidelne posiela posledné mesiace tomuto chlapcovi meme obrázky vysmievajúce sa z vegetariánov a označuje ho komentároch pod dezinformačnými článkami o “škodlivosti” vegetariánstva. '
    },
    {
        nadpis: 'Modelová situácia č. 11',
        text: 'Si na oddielovom výlete (15 detí vo veku 11 až 14 rokov), ktorý máš na starosti sám s vodcom a vidíš, že sa blíži veľmi zlé počasie. Vodca však hovorí, že to istotne zvládnete a počasie bude v poriadku. Ako budeš postupovať?'
    },
    {
        nadpis: 'Modelová situácia č. 12',
        text: 'Si s oddielom 25 skautov (10 – 15-roč.) na výprave. Jediným dospelým si ty a pomáhajú ti 2 radcovia a ranger (16 – 17-roč.) Je 17.40 a vraciate sa dopravnými spojmi domov. Cestovali ste vlakom a po vystúpení v stanici ti na otázku „Máte všetci všetko?“ odpovie 12-roč. chlapec, že si vo vlaku zabudol kapsičku, v ktorej má peniaze a preukazy (15 € + preukaz poistenca, skautský, mesačný na MHD...). O cca 10 minút vás čaká ešte jeden prípoj, aby ste sa dostali domov. Ak ho nestihnete, nedodržíte oznámený koniec výpravy. Vlak sa už pohol, dieťa začína plakať.'
    },
    {
        nadpis: 'Modelová situácia č. 13',
        text: 'Na cyklovýlete, za ktorý si zodpovedný, si dievča zlomilo nohu. Je s tebou ešte jeden 15-ročný radca, ostatní sú členovia v skautskom veku. Ide o otvorenú zlomeninu, dievča je v šoku. Naokolo tebe nie je nijaký okoloidúci, signál na mieste, kde sa dievča zranilo, nemáš.'
    },
    {
        nadpis: 'Modelová situácia č. 14',
        text: 'Na celodennom výlete si zmeškal posledný spoj domov. Máš so sebou 13 vĺčat. Je neskoro poobede a už sa stmieva.'
    },
    {
        nadpis: 'Modelová situácia č. 15',
        text: 'Organizuješ víkendovú chatu pre váš oddiel. Príde za tebou rodič vášho skauta s tým, že svoje dieťa nikam nepustí, pretože na poslednej takejto oddielovej akcii sa vraj skoro vôbec nespalo a iba sa behalo v zime po vonku a jeho dieťa prišlo domov s teplotami, kvôli čomu sa celý týždeň muselo liečiť doma. Túto akciu si neorganizoval ty, ale mal ju na starosti oddielový vodca. Ako by si túto situáciu riešil?'
    },
    {
        nadpis: 'Modelová situácia č. 16',
        text: 'Na oddielovej akcii (si na nej len ty) v mestskom parku ťa osloví pán, ktorý je na prechádzke so svojou 6-ročnou dcérkou. Zaujalo ho, ako členovia tvojho oddielu pobehujú po parku a plnia rôzne úlohy. Pýta sa na možnosti zapojenia svojej dcéry a je veľmi zvedavý na skauting, keďže o ňom  vie veľmi málo. Ty ale vieš, že aktuálne do oddielu neprijímate nových členov pre nedostatok radcov. Čo urobíš?'
    },
    {
        nadpis: 'Modelová situácia č. 17',
        text: 'Člen oddielu na tábore zničil novú oddielovú sekeru. Bol si vedomý toho, že ho oddielový vodca vystríhal pred nerozvážnym používaním sekery, ale on ju i napriek tomu vzal so sebou do lesa a pri sekaní ju zničil. Nestalo sa to prvýkrát, že pre svoju nerozvážnosť zničil oddielový či zborový majetok. Člen, ktorý sekeru zničil, nič nezapieral, k činu sa priznal. Aké budú tvoje ďalšie kroky?'
    },
    {
        nadpis: 'Modelová situácia č. 18',
        text: 'Na večernom zamyslení na tábore o sile sľubu v našom každodennom živote sa jedna členka oddielu (13 rokov)  rozplače, odíde. Keď za ňou pribehneš, odmieta s tebou hovoriť.'
    },
    {
        nadpis: 'Modelová situácia č. 19',
        text: 'Si jedným z členov skúšobnej komisie na (oblastných) radovských skúškach. Kandidát na budúceho radcu si ako nosnú tému vytiahol výchovný program. K programovej ponuke pre rôzne vekové kategórie sa vedel vyjadriť, ale “zasekol sa” pri šiestich oblastiach rozvoja, pretože ich nevie poriadne vymenovať. Jednému z členov komisie sa to nepáči a začína nad ním očividne krútiť hlavou a dávať mu najavo, že týmto spôsobom asi skúškami neprejde. Ako by si postupoval?'
    },
]

//Definovanie ostatných tém

const vedlajsieTemy = [
    {
        nadpis: 'Motivácia',
        text: '●\tzásady, výhody a nevýhody používania odmien a trestov\n●\tformy odmien a trestov\n●\tprirodzený dôsledok, objektívny dôsledok  vs.   odmeny a tresty\n●\tvýznam a formy oceňovania v skautingu (7 ľalií, Skaut roka, oddielové/zborové/oblastné oceňovanie...)'
    },
    {
        nadpis: 'Fungovanie tímu',
        text: '●\trozdiel medzi tímom a skupinou\n●\troly v tíme\n●\tzásady spolupráce v tíme'
    },
    {
        nadpis: 'Určovanie cieľov a ich vyhodnotenie',
        text: '●\tprostriedok verzus cieľ\n●\turčovanie SMART cieľov\n●\tzáklady projektového manažmentu (problém – cieľ - aktivity) = určenie a definovanie problému - nastavenie cieľa, ktorý bude riešiť problém, zvolenie vhodnej aktivity, ktorou daný cieľ dosiahnem\n●\tcieľová skupina (jej definovanie a význam pri určovaní cieľov)\n●\tsledovanie cieľov vo výchove\n●\tmotivácia na dosiahnutie cieľa	'
    },
    {
        nadpis: 'Budovanie oddielovej identity',
        text: '●\tvýznam oddielovej identity\n●\tzložky oddielovej identity (názov, znak, tradície a rituály, insígnie) a ich využívanie v praxi\n●\tbudovanie a udržiavanie oddielovej identity'
    },
    {
        nadpis: 'Vývinová psychológia',
        text: '●\tšpecifiká vekových kategórií (vĺčatá, skauti, rangeri)\n●\tzmena spôsobu vedenia v závislosti od situácie, pohlavia a od vekovej skupiny, ktorú vedieme (situačné vedenie)\n●\tmožnosti kladenia záťaže podľa vekových kategórií (fyzickej, psychickej, dostatok spánku, oddych)\n●\tprispôsobenie programu danej vekovej kategórii a záujmy dnešných detí\n●\tformy prístupu k deťom v rôznom veku a rozoznanie neštandardného správania a postupy ako to vyriešiť'
    },
    {
        nadpis: 'Základy dramaturgie programu',
        text: '●\tveľká a malá dramaturgia – rozdelenie (v rámci malej dramaturgie aj spôsoby rozdeľovania hráčov, ich výhody a nevýhody, prostredie a jeho význam)\n●\tzáklady tvorby programu a dramaturgie (dramaturgické zásady)\n●\tleitmotív, symbolický rámec, pulzný princíp, krivky výkonnosti\n●\tmaticový a bodový scenár trojdňového podujatia\n●\ttvorba aktivity (typológia aktivít, hodnotenie)\n●\tzdroje a námety na programovú činnosť'
    },
    {
        nadpis: 'Učenie sa činnosťou',
        text: '●\tzážitková pedagogika (cieľ, výhody, nevýhody)\n●\tučenie sa činnosťou v programe a napredovaní členov\n●\tKolbov cyklus\n●\tzóna komfortu – zóna ohrozenia, psychická a fyzická bezpečnosť\n●\taktivity s prvkami zážitkovej pedagogiky (spôsob výberu a zaradenia aktivity do programu, druhy, realizácia, vyhodnotenie aktivít)\n●\tskautská prax'
    },
    {
        nadpis: 'Symbolický rámec a etapové hry',
        text: '●\tvýznam, typy a formy symbolického rámca pre vekové kategórie, riziká náročných symbolických rámcov\n●\tetapová hra ako prostriedok na dosiahnutie cieľa, nie cieľ samotný\n●\ttvorba etapovej hry (zásady tvorby, zapracovanie symbolického rámca)\n'
    },
    {
        nadpis: 'Duchovno v skautingu',
        text: '●\tmiesto sľubu a zákona v duchovnom rozvoji\n●\tformy duchovného programu v oddielovom živote a jeho význam\n●\ttvorba duchovnej aktivity pre oddiel, psychická bezpečnosť a tolerancia pri tvorbe duchovného program\n●\tzdroje na kvalitné a overené duchovné aktivity/napredovanie  (výchovný program, knihy, weby, články...)\n'
    },
    {
        nadpis: 'Život v prírode - využitie prírody vo výchove/skautingu',
        text: '●\tskauting a príroda (vzťah, čím je príroda pre skautov...)\n●\tpríklady na aktivity v prírode\n●\tvyužitie prírody v oddielovom programe a v procese výchovy v skautingu'
    },
    {
        nadpis: 'Bezpečnosť a hygiena',
        text: '●\tmiera prípustného rizika\n●\tpravidlá bezpečnosti (v klubovni, v telocvični, v teréne, na akciách, pri kúpaní a cestovaní; práca s ohňom)\n●\tdodržiavanie hygienických zásad na akciách\n●\tzáťažové normy\n●\tpoistenie na výlet do hôr\n	●\tlekárnička na akcii	'
    },
    {
        nadpis: 'Krízové situácie',
        text: '●\todhad možného rizika\n●\trozhodovanie, zachovanie pokoja\n●\triešenie modelových krízových situácií'
    },
    {
        nadpis: 'Organizačná štruktúra a základné dokumenty SLSK',
        text: '●\tNáčelníctvo, Ústredie Slovenského skautingu a nižšie organizačné zložky (inf. znalosť)\n●\tStanovy SLSK a Organizačný poriadok (význam, rozdiel a ich dostupnosť pre členov SLSK)\n●\tnové zmeny na národnej a regionálnej úrovni'
    },
    {
        nadpis: 'Komunikácia, skautské PR a informačné zdroje',
        text: '●\tzásady vhodnej komunikácie\n●\tkomunikácia v oddielovej rade,s členmi oddielu a s rodičmi\n●\tskautské médiá: časopisy, Skautské zvesti, web a sociálne siete\n●\tzákladné zásady spravovania udalosti a fanpage na sociálnej sieti\n●\tskautské PR (tvorba plagátov, zásady komunikácie navonok, udalosť a fanpage na sociálnej sieti, propagačné materiály)\n	'
    },
    {
        nadpis: 'Vzdelávací systém',
        text: '●\tvzdelávací systém (stupne, vzdelávacie moduly a voľné vzdelávacie kurzy) – rozdiely, základná charakteristika a význam vzdelávania vo všeobecnosti\n●\thodnosti (radca, líder, vodca, inštruktor), ich insígnie a spôsob získania hodnosti\n●\trozdiel medzi vedúcim a vodcom\n●\tskúšky v systéme RpV – radcovské skúšky (náplň skúšok RK; základy skúšania)\n●\tvzdelávacia ponuka SLSK a iné možnosti vzdelávania pre lídrov a členov oddielu (podľa veku, zamerania činnosti, potreby)'
    },
]

//Definovanie nosných tém

const nosneTemy = [
    {
        nadpis: 'Piliere skautingu',
        text: '●\tpredstavenie pilierov skautingu na príkladoch a ich význam\n●\tposlanie\n●\tprincípy\n●\tvýchovná metóda'
    },
    {
        nadpis: 'Výchovný program',
        text: '●\tzáklad výchovného programu – aktívny občan a všestranne rozvinutá osobnosť\n●\t6 oblastí rozvoja – ich význam a miesto v oddielovom živote\n●\tvýchovný program = programová ponuka a samostatná činnosť družín/oddielov\n●\tprogramová ponuka vĺčat, skautov a rangerov (stupne napredovania, odborky, výzvy, voľné programové moduly, najvyššie programové ocenenia) a jej význam v napĺňaní poslania SLSK\n●\tzáklady práce s programovou ponukou – ako uviesť prvok, sledovať ho počas plnenia a vyhodnotiť ho/osláviť na záver\n●\tindividuálne osobné napredovanie a jeho plánovanie\n●\tpráca s heslami vekových kategórií v rámci výchovy\n●\tMedzinárodná cena vojvodu z Edinburghu (význam, zapojenie sa, prepojenie s Rangerským horizontom)\n●\tšpecifiká vodnoskautského programu pre vĺčatá, skautov a rangerov	'
    },
]

//Definovanie kombinácii
//Nosná téma 1

const nos1 = [0, 2, 3, 4, 5, 14, 13, 11, 10, 12]

//nosná téma 2

const nos2 = [1, 6, 7, 8, 9, 12, 11, 10, 3]

//Definovanie funkcii

function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuestions(){
    if (modelovka == 0) {
        sModelovky = shuffleArray(modelovky)
        dat.mod.nadpis.innerText = sModelovky[modelovka].nadpis
        dat.mod.text.innerText = sModelovky[modelovka].text
        ++modelovka
    } else if(modelovka > 0 && modelovka < 19) {
        dat.mod.nadpis.innerText = sModelovky[modelovka].nadpis
        dat.mod.text.innerText = sModelovky[modelovka].text
        ++modelovka
    }else {
        modelovka = 0
        sModelovky = shuffleArray(modelovky)
        dat.mod.nadpis.innerText = sModelovky[modelovka].nadpis
        dat.mod.text.innerText = sModelovky[modelovka].text
        ++modelovka
    }

    if (hlavtem == 0) {
        if(nos1r == 0){
            rNos1 = shuffleArray(nos1)
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[rNos1[nos1r]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[rNos1[nos1r]].text
            console.log(rNos1, rNos1[nos1r], vedlajsieTemy[rNos1[nos1r]], hlavtem)
            ++nos1r
        }
        else if(nos1r > 0 && nos1r < 10){
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[rNos1[nos1r]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[rNos1[nos1r]].text
            console.log(rNos1, rNos1[nos1r], vedlajsieTemy[rNos1[nos1r]], hlavtem)
            ++nos1r
        }
        else {
            nos1r = 0
            rNos1 = shuffleArray(nos1)
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[rNos1[nos1r]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[rNos1[nos1r]].text
            console.log(rNos1, rNos1[nos1r], vedlajsieTemy[rNos1[nos1r]], hlavtem)
            ++nos1r
            
        }
    hlavtem = 1
    } else {
        if(nos2r == 0){
            rNos2 = shuffleArray(nos2)
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[rNos2[nos2r]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[rNos2[nos2r]].text
            console.log(rNos2, rNos2[nos2r], vedlajsieTemy[rNos2[nos2r]], hlavtem)
            ++nos2r
        }
        else if(nos2r > 0 && nos2r < 9){
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[rNos2[nos2r]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[rNos2[nos2r]].text
            console.log(rNos2, rNos2[nos2r], vedlajsieTemy[rNos2[nos2r]], hlavtem)
            ++nos2r
        }
        else {
            nos2r = 0
            rNos2 = shuffleArray(nos2)
            dat.nos.nadpis.innerText = nosneTemy[hlavtem].nadpis
            dat.nos.text.innerText = nosneTemy[hlavtem].text
            dat.ved.nadpis.innerText = vedlajsieTemy[rNos2[nos2r]].nadpis
            dat.ved.text.innerText = vedlajsieTemy[rNos2[nos2r]].text
            console.log(rNos2, rNos2[nos2r], vedlajsieTemy[rNos2[nos2r]], hlavtem)
            ++nos2r
        }
        hlavtem = 0
    }
}

dat.btn.addEventListener('click', generateQuestions)
function idk(){
    window.document.getElementById('twoo').style.opacity = '0.35'
    generateQuestions()
}
window.onload = idk
document.addEventListener("keydown", function(event) {
    if (event.key == "Enter" || event.code === "Spacebar" || event.code === "Space") {
        event.preventDefault();
        generateQuestions()
    } else {
        return
    }
})