import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {


  constructor() {
    
   }

   faq = [
    { question: "Badanie ABC", 
      answer: `<b>Badanie ABC</b> – akronim najważniejszych czynności przy udzielaniu pierwszej pomocy u poszkodowanego nieprzytomnego. <br> <br> A (ang. <i>Airway</i>) – udrożnienie dróg oddechowych np. za pomocą tzw. rękoczynu czoło-żuchwa. <br> <br> B (ang. <i>Breathing</i>) – sprawdzenie oddechu metodą widzę, słyszę, czuję (przez 10 sekund powinno się wyczuć min. 2 oddechy). <br> <br>
      C (ang. <i>Circulation</i>) – sprawdzenie oznak krążenia na tętnicy szyjnej i promieniowej. Osoby nie związane z medycyną są zwolnione z tego badania, mogą natomiast sprawdzić zabarwienie skóry i świadomość poszkodowanego. 
      `, 
      showed: false
    },
    { question: "RKO", 
      answer: "<b>RKO – Resuscytacja krążeniowo – oddechowa </b> to szereg czynności wykonywanych u osoby z podejrzeniem nagłego zatrzymania krążenia. Celem resuscytacji jest utrzymanie przepływu krwi przez mózg i mięsień sercowy oraz przywrócenie krążenia. Do RKO wliczają się uciski klatki piersiowej i wentylacja.", 
      showed: false },
    { question: "Łańcuch przeżycia ", 
      answer: "<b>Łańcuch przeżycia </b> –  działania mające na celu zwiększenie przeżywalności u osób z nagłym zatrzymaniem krążenia. Wliczają się w niego: <li><i>wczesne rozpoznanie zatrzymania krążenia </i>– obejmuje rozpoznanie zatrzymania krążenia: bezdech, utrata przytomności oraz szybkie wezwanie pomocy, dzwoniąc pod numer telefonu 112 lub 999.</li><li> <i>wczesne podjęcie RKO przez świadków zdarzenia </i>– jeżeli świadkowie zdarzenia natychmiast podejmą resuscytację, prawdopodobieństwo przeżycia wzrasta trzykrotnie. </li><li><i>wczesna defibrylacja</i> – może skutkować przeżywalnością nawet do 75%. Każda minuta opóźnienia defibrylacji zmniejsza prawdopodobieństwo przeżycia o 10-12%.</li><li><i>wczesne podjęcie zaawansowanych zabiegów resuscytacyjnych i właściwa opieka poresuscytacyjna.</i>  </li>", 
      showed: false },
    { question: "Defibrylacja ", 
      answer: "<b>Defibrylacja</b> - zabieg medyczny stosowany podczas reanimacji. Polega na zastosowaniu impulsu elektrycznego prądu stałego o określonej energii poprzez powierzchnię klatki piersiowej lub bezpośrednio na mięsień serca, w celu wygaszenia najpoważniejszych zaburzeń rytmu serca – migotania komór (VF) oraz częstoskurczu komorowego (VT) bez tętna.", 
      showed: false 
    },
    { question: "Złota godzina", 
      answer: "<b>Złota godzina</b> – czas, w jakim poszkodowany w stanie zagrożenia życia powinien znaleźć się w miejscu, gdzie możliwe jest udzielenie mu specjalistycznej pomocy.", 
      showed: false 
    },
    { question: "AED", 
      answer: "<b> AED </b> – (ang. <i>Automated External Defibrillator</i>) Automatyczny Defibrylator Zewnętrzny – specjalistyczne, skomputeryzowane urządzenie, które za pomocą poleceń głosowych/wizualnych prowadzi zarówno osoby z wykształceniem medycznym, jak i bez niego przez procedurę bezpiecznej defibrylacji u osoby nieprzytomnej z nagłym zatrzymaniem krążenia.", 
      showed: false 
    }
  ];

  poprzedni: any;
  wart = false;
  prawodol = false;

  ngOnInit() {}

  select(i) {
    let aktualny = i;
    // console.log(aktualny);
    // console.log(this.poprzedni);

    if (this.poprzedni === aktualny) {
      // let wart = 0;
      if (this.wart === false) {
        // alert("kliknięto już kliknięty ale schowany, więc powinien się rozwinąć");
        this.faq[i].showed = true;
        this.wart = true;
      } else {
        // alert("kliknięto już kliknięty ale rozwinięty, więc powinien się zwinąć");
        this.faq[i].showed = false;
        this.wart = false;
      }
    } else if (this.poprzedni === undefined) {
      // alert("kliknięto pierwszy raz");
      this.faq[aktualny].showed = true;
      this.wart = true;
      // this.faq[this.poprzedni].showed = true;
    } else {
      // alert("klknięto coś i to wcześniejsze powinno zniknąć, a nowe się pojawić");
      this.faq[i].showed = true;
      this.faq[this.poprzedni].showed = false;
      this.wart = true;
    }
    this.poprzedni = aktualny;
  }
}