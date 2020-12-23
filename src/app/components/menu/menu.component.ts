import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GeneralService } from "./../../services/general.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  bigFontTemp = false;
  darkModeTemp = false;

  constructor(
    private modalCtr:ModalController,
    private generalService:GeneralService
  ) { }

  ngOnInit() {}

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
