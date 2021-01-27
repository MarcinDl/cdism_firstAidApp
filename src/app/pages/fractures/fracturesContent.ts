//GENERAL
export const generalFracturesTitle = "Złamania i zwichnięcia";

const symptoms = [
    'ból, obrzęk',
    'zaczerwienienie, zblednięcie lub zasinienie',
    'deformacja - zmiana kształtu kończyny',
    'ograniczenie ruchomości kończyny, nienaturalna ruchomość',
    'drętwienie, zaburzenia czucia za miejscem złamania',
    'rana, krwawienie, widoczne odłamy kostne w przypadku złamania otwartego'
];
const symptomsTitle = 'Objawy:';
const forbiddenActs = [
    'nie przenoś i nie obracaj poszkodowanego do momentu unieruchomienia kończyny',
    'nie poruszaj złamaną kończyną i nie próbuj jej nastawiać',
    'nie podawaj choremu jedzenia i picia',
    'nie pozostawiaj poszkodowanej osoby samej'
]
const forbiddenActsTitle = 'Nie należy:';

export const generalFracturesContent = {
    symptoms: symptoms,
    symptomsTitle: symptomsTitle,
    forbiddenActs: forbiddenActs,
    forbiddenActsTitle: forbiddenActsTitle
}


//UPPER
export const upperFracturesTitle = "Złamania, zwichnięcia i skręcenia kończyny górnej";

const whatToDo = [
    'W sytuacji kiedy urazowi uległ obojczyk lub ramię posadź poszkodowanego na stołku.Ułóż zranioną rękę na jego brzuchu zginając ją delikatnie w łokciu pod kątem ok 90 stopni.Chory przytrzymuje drugą ręką chorą kończynę.',
    'Przy pomocy chusty trójkątnej wykonaj temblak.Podsuń chustę pod chorą rękę poszkodowanego tak by wierzchołek trójkąta znajdował się przy łokciu.Dwa pozostałe rogi zawiąż na karku chorego.Jeśli nie masz do dyspozycji chusty trójkątnej możesz wykorzystać np.szalik, bandaż.Zawiąż go na szyi i podwieś chorą rękę za nadgarstek.',
    'W sytuacji kiedy urazowi uległo przedramię lub nadgarstek w pierwszej kolejności unieruchom kończynę od łokcia do dłoni przy pomocy czegoś sztywnego(listewka, kilkukrotnie złożona gazeta).Stabilizator przymocuj bandażem, a dopiero potem podwieś kończynę na temblaku.',
    'W przypadku urazu łokcia ustabilizuj kończynę w pozycji jakiej się ona znajduje - nie zginaj jej i nie prostuj.',
    'Skontaktuj się z dyspozytorem medycznym: 999, 112.',
    'Gdy złamaniu ulega palec dłoni przymocuj go np.plastrem do palca sąsiedniego, a następnie  połóż na czymś sztywnym całą dłoń(książka, deseczka) i owiń całość bandażem.Poszkodowany powinien zgłosić się do szpitala, lub poradni gdzie pomocy udzieli mu chirurg ortopeda'
];
const whatToDoTitle = 'Objawy';

export const upperFracturesContent = {
    symptoms: symptoms,
    whatToDoTitle: whatToDoTitle,
    whatToDo: whatToDo
}

//LOWER
export const lowerFracturesTitle = "Złamania, zwichnięcia i skręcenia kończyny dolnej";

const whatToDoLower = [
    'W przypadku złamania w obrębie uda  wezwij Zespół Ratownictwa Medycznego: 999, 112 i do czasu przyjazdu ratowników nie poruszaj złamanej kończyny i nie unieruchamiaj jej.',
    'Jeśli przyjazd pogotowia jest niemożliwy - unieruchom uszkodzoną kończynę, przymocowując ją do zdrowej nogi przy pomocy bandaża lub np.taśmy klejącej.Możesz też ustabilizować nogę szyną, używając np.kija lub deski.Prawidłowo dobrana szyna powinna sięgać od stopy do pachy chorego.W przypadku złamania kości podudzia wystarczy krótsza szyna obejmująca staw kolanowy i staw skokowy.',
    'W przypadku urazu kolana wezwij pogotowie i poczekaj na przyjazd zespołu.',
    'Jeżeli przyjazd służb medycznych nie jest możliwy i decydujesz się unieruchomić staw kolanowy to pamiętaj, żeby jak najbardziej ograniczyć ruchy kolana.',
    'Gdy staw kolanowy jest zgięty wykorzystaj do unieruchomienia kończyny dwie poduszki - jedną wsuń między uda, drugą między podudzia, a następnie przymocuj nogi do siebie nawzajem.',
    'W przypadku urazu kolana gdy uszkodzona noga jest wyprostowana, unieruchom kończyną za pomocą szyny na całej długości.Jeśli jest taka możliwość, przymocuj dwie deski z dwóch stron chorej nogi - krótszą od wewnątrz, a dłuższą na zewnątrz kończyny.',

];
const whatToDoLowerTitle = 'Objawy:';

export const lowerFracturesContent = {
    whatToDoLower: whatToDoLower,
    whatToDoLowerTitle: whatToDoLowerTitle
}


//BACKBONE
export const backboneFracturesTitle = "Urazy kręgosłupa";

const backboneFracturesSymptoms = [
    'ból szyi, pleców',
    'zaburzenia czucia poniżej miejsca uszkodzenia kręgosłupa, porażenie kończyn',
    'mimowolne oddanie moczu i stolca',
    'zatrzymanie oddechu',
    'wstrząs',
]
const backboneFracturesSymptomsTitle = 'Objawy'

const backboneFracturesDoNot = [
    'Nie przenoś i nie poruszaj poszkodowanego jeśli nie ma takiej konieczności',
    'Nie pozostawiaj poszkodowanego samego',
    'Nie podawaj choremu nic do picia i jedzenia.'
]
const backboneFracturesDoNotTitle = 'Nie należy:';

const backboneFracturesWhatToDoTitle = 'Co robić?'
const backboneFracturesWhatToDo = [
    'Sprawdź bezpieczeństwo i zastosuj środki ochronne(rękawiczki)',
    'Gdy podejrzewasz uraz kręgosłupa ogranicz do niezbędnego minimum poruszanie poszkodowanego.Przenoś go tylko wtedy, gdy zagraża mu niebezpieczeństwo.',
    'Jeżeli przeniesienie chorego jest konieczne rób to bardzo ostrożnie i delikatnie.Najlepiej ciągnij poszkodowanego za ubranie leżącego na plecach lub brzuchu.Nie wykonuj gwałtownych ruchów, nie szarp.Poproś kogoś o pomoc.',
    'Jeśli musisz obrócić poszkodowanego na bok np.z powodu wymiotów, rób to ostrożnie.Stabilizuj szyję i głowę tak, żeby kręgosłup znajdował się w jednej osi.',
    'Jak najszybciej wezwij pomoc medyczną: 999, 112.',
    'Pozostań przy poszkodowanym.Regularnie oceniaj jego parametry życiowe.Jeśli nie oddycha - rozpocznij resuscytację.'

]

export const backboneracturesContent = {
    backboneFracturesSymptoms: backboneFracturesSymptoms,
    backboneFracturesSymptomsTitle: backboneFracturesSymptomsTitle,
    backboneFracturesDoNot: backboneFracturesDoNot,
    backboneFracturesDoNotTitle: backboneFracturesDoNotTitle,
    backboneFracturesWhatToDo: backboneFracturesWhatToDo,
    backboneFracturesWhatToDoTitle: backboneFracturesWhatToDoTitle
}