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

  bigFontTemp:any;
  darkModeTemp:any;
  horizontalDistanceTemp: any;
  verticalDistanceTemp: any;
  bigFontisChecked: any;
  darkModeisChecked: any;
  verticalDistanceisChecked: any;
  horizontalDistanceisChecked: any;

  constructor(
    private modalCtr:ModalController,
    private generalService:GeneralService,
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
    this.generalService.bigFontisChecked = !this.generalService.bigFontisChecked;
    this.bigFontisChecked = !this.bigFontisChecked;
  }

  darkMode() {
    this.generalService.darkMode = !this.generalService.darkMode;
    this.darkModeTemp = !this.darkModeTemp;
    this.generalService.darkModeisChecked = !this.generalService.darkModeisChecked;
    this.darkModeisChecked = !this.darkModeisChecked;
  }
  verticalDistance() {
    this.generalService.verticalDistance = !this.generalService.verticalDistance;
    this.verticalDistanceTemp = !this.verticalDistanceTemp;
    this.generalService.verticalDistanceisChecked = !this.generalService.verticalDistanceisChecked;
    this.verticalDistanceisChecked = !this.verticalDistanceisChecked;
  }

  horizontalDistance() {
    this.generalService.horizontalDistance = !this.generalService.horizontalDistance;
    this.horizontalDistanceTemp = !this.horizontalDistanceTemp;
    this.generalService.horizontalDistanceisChecked = !this.generalService.horizontalDistanceisChecked;
    this.horizontalDistanceisChecked = !this.horizontalDistanceisChecked;
  }

    ngDoCheck(){
        this.bigFontTemp = this.generalService.bigFont,
        this.darkModeTemp = this.generalService.darkMode,
        this.horizontalDistanceTemp = this.generalService.horizontalDistance,
        this.verticalDistanceTemp = this.generalService.verticalDistance;

        this.darkModeisChecked = this.generalService.darkModeisChecked;
        this.bigFontisChecked = this.generalService.bigFontisChecked;
        this.verticalDistanceisChecked = this.generalService.verticalDistanceisChecked;
        this.horizontalDistanceisChecked = this.generalService.horizontalDistanceisChecked;
    }

}
