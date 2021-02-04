import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralService } from "./../../services/general.service";
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  bigFontTemp = false;
  darkModeTemp = false;
zmienna;
  constructor(
    private modalCtr:ModalController,
    private generalService:GeneralService,
    private translate: TranslateService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languages = this.languageService.getLanguages();
    console.log(this.languages)
    this.selected = this.languageService.selected;
    console.log(this.selected)

  }

  languages = [];
  selected ='';
  select(lng){
    console.log(lng)
    this.languageService.setLanguage(lng);
    // this.popoverCtrl.dismiss()
  }

  dismissModal(){
    this.modalCtr.dismiss();
  }

  bigFont() {
    this.generalService.bigFont = !this.generalService.bigFont;
    this.bigFontTemp = !this.bigFontTemp;
  }

  darkMode() {
    this.generalService.darkMode = !this.generalService.darkMode;
    this.darkModeTemp = !this.darkModeTemp;
  }


}
