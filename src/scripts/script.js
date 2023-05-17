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
        text: '●\tAkými rôznymi spôsobmi môžeme motivovať členov oddielu vzhľadom na situáciu, resp. ich potreby? Na čo všetko treba prihliadať pri vyberaní vhodného spôsobu motivácie? \n●\tČo by si odporúčal radcom vo svojom oddiele, ak vidíš, že nevedia pracovať s prirodzenými dôsledkami konania členov bez potreby trestov?\n●\tAké kroky by si podnikol, keby si bol presvedčený o tom, že radca (radcovia) využívajú trestanie, ktoré hraničí so zneužívaním moci?'
    },
    {
        nadpis: 'Fungovanie tímu',
        text: '●\tVysvetli základy tímovej spolupráce (skupina vs. tím, tímové roly, zásady spolupráce), jej význam.\n●\tNa základe vlastnej skúsenosti z práce v tíme (počas líderskej činnosti, LRŠ alebo i.) povedz výhody/nevýhody práce v tíme.'
    },
    {
        nadpis: 'Určovanie cieľov a ich vyhodnotenie',
        text: '●\tČo je to cieľ a aký je rozdiel medzi ním a prostriedkom?\n●\tAký je vzťah medzi problémom, cieľom a aktivitou?\n●\tAkú formuláciu by mal mať vhodný krátkodobý cieľ? Na čo si dať pri určovaní cieľov pozor?\n●\tČo je cieľová skupina a ako ju definovať?\n●\tAko sledovať napĺňanie cieľov vo výchove? Uveď praktické príklady. '
    },
    {
        nadpis: 'Budovanie oddielovej identity',
        text: '●\tČo je to oddielová identita, aký je jej význam v oddielovej činnosti a v živote oddielu?\n●\tAko budovať oddielovú identitu a čo robiť pre to, aby sme si ju udržali?\n●\tKtoré sú jej zložky a ako ich môžeme využiť v praxi?\n'
    },
    {
        nadpis: 'Vývinová psychológia',
        text: '●\tCharakterizuj jednotlivé vekové kategórie (vĺčatá/včielky, skauti/skautky, rangeri/rangerky) a ich vývinové špecifiká. Ako by si tieto poznatky využil v praxi? Uveď príklady.\n●\tAké majú deti žijúce v dnešnej spoločnosti potreby a záujmy? Ako by si to využil/-a v oddielovej činnosti? Uveď konkrétne príklady.\n'
    },
    {
        nadpis: 'Základy dramaturgie programu',
        text: '●\tAké aktivity by si vytvoril (z hľadiska dĺžky, zložitosti, fyzickej náročnosti, atď.) s ohľadom na cieľovú skupinu a jej veľkosť? Povedz pár príkladov.\n●\tAko ti pri tvorbe programu môže pomôcť libreto, leitmotív a symbolický rámec?\n●\tPrečo treba dbať na pulzný princíp a krivky výkonnosti a riadiť sa dramaturgickými zásadami?'
    },
    {
        nadpis: 'Učenie sa činnosťou',
        text: '●\tVysvetli vlastnými slovami, čo je to učenie sa činnosťou a zážitková pedagogika a aký je ich význam v skautskej činnosti.\n●\tPopíš, v čom spočíva zážitková pedagogika (Kolbov cyklus, zóny komfortu a ohrozenia) a ako by si ju využil v príprave programu.\n●\tUveď konkrétne príklady učenia sa činnosťou v programe pre jednotlivé vekové kategórie.'
    },
    {
        nadpis: 'Symbolický rámec a etapové hry',
        text: '●\tČo je to symbolický rámec, čo všetko ho tvorí a aký je jeho význam v skautskej činnosti?\n●\tAký má význam pracovať so symbolickým rámcom u jednotlivých vekových kategórii? Sú nejaké odlišnosti napríklad medzi vĺčaťom a roverom?\n●\tUveď po 2-3 príkladoch na vhodné symbolické rámce etapových hier pre vĺčatá/včielky, skautov/skautky, rangerov/rangerky.\n'
    },
    {
        nadpis: 'Duchovno v skautingu',
        text: '●\tČo je to duchovný rozmer a aký je jeho význam v skautingu?\n●\tSkautský zákon a sľub ako duchovný rozvoj: vysvetli, ako je rozvíjaná duchovná oblasť prostredníctvom práce so skautským zákonom a sľubom.\n'
    },
    {
        nadpis: 'Život v prírode - využitie prírody vo výchove/skautingu',
        text: '●\tAký je vzťah medzi skautingom a prírodou? Aké je jej miesto v pilieroch skautingu?\n●\tAký je z tvojho pohľadu význam života v prírode (jednak pre oddiel a jednak pre jednotlivca)?\n'
    },
    {
        nadpis: 'Bezpečnosť a hygiena',
        text: '●\tVysvetli, ako by si vhodným spôsobom komunikoval členom oddielu pravidlá bezpečnosti a hygieny na rôznych typoch akcií. Zameraj sa na rôzne typy oddielov z hľadiska veku a pohlavia.\n●\tAká je úloha teba ako lídra v dodržiavaní týchto pravidiel?'
    },
    {
        nadpis: 'Krízové situácie',
        text: '●\tČo považovať za krízovú situáciu?\n●\tAko by si postupoval v prípade vzniku krízovej situácie? Čo odporúča Slovenský skauting?\n●\tAko by si predchádzal vzniku týchto situácií?'
    },
    {
        nadpis: 'Organizačná štruktúra a základné dokumenty SLSK',
        text: '●\tAko vyzerá organizačná štruktúra SLSK od miestnej cez regionálnu až po národnú úroveň? Ktorá zložka čo zastrešuje a poskytuje?\n●\tVysvetli rozdiel medzi Stanovami SLSK a Organizačným poriadkom SLSK. Čím sa zaoberajú a kde sú sprístupnené v aktuálnom znení?'
    },
    {
        nadpis: 'Komunikácia, skautské PR a informačné zdroje',
        text: '●\tAké sú prostriedky vhodné na komunikáciu s rôznymi druhmi prijímateľov (členovia oddielu, oddielová rada, oddielový/zborový vodca, rodičia, verejnosť…)?\n●\tAké sú faktory, ktoré ovplyvňujú spôsob komunikácie v danej situácii?\n●\tAké komunikačné kanály používa SLSK? Ktorý komunikačný kanál používa na aký druh informácií?'
    },
    {
        nadpis: 'Vzdelávací systém',
        text: '●\tVysvetli, čo je to vzdelávací systém SLSK a z ktorých zložiek sa skladá.\n●\tPovedz základnú charakteristiku jednotlivých zložiek vzdelávacieho systému, rozdiely medzi nimi.\n●\tPomenuj hodnosti v SLSK a spôsob, ako ich možno získať. Uveď insígnie pre jednotlivé hodnosti.\n●\tVysvetli rozdiel medzi vedúcim a vodcom.'
    },
]

//Definovanie nosných tém

const nosneTemy = [
    {
        nadpis: 'Piliere skautingu',
        text: '●\tČo sú to piliere skautingu a aký je ich význam v našej činnosti?\n●\tVlastnými slovami vysvetli poslanie SLSK a ako ho aplikujeme v praxi.\n●\tKtoré princípy máme v SLSK a sa ich podstata odráža v skautskej činnosti?\n●\tNa praktickom príklade vysvetli, čo je to výchovná metóda a z ktorých častí sa skladá.'
    },
    {
        nadpis: 'Výchovný systém',
        text: '●\tČo je to výchovný program a aký je jeho význam pre skautskú činnosť a pre jednotlivca?\n●\tAko je výchovný program prepojený so 6 oblasťami rozvoja?\n●\tNa praktickom príklade opíš, ako uvedieš programový prvok (napr. Rangerský horizont; odborka Babysitter; výzva Modrý život; VPM Pamäť národa) do oddielového života, ako budeš sledovať jeho plnenie u členov a ako jeho splnenie ukončíš.\n●\tAko môžeš pomôcť radcom s implementáciou programových prvkov do činnosti družín?'
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