import { Component } from "@angular/core";
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';
import { MenuComponent } from '../../components/menu/menu.component'
import { GeneralService } from "../../services/general.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

  bigFont: any;
  darkMode: any;
  
  constructor(
    private NativePageTransitions: NativePageTransitions,
    private router: Router,
    private modalCtr: ModalController,
    public generalService:GeneralService
  ) { }

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: "left",
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50,
    };
    this.NativePageTransitions.slide(options);
    this.router.navigate(["/second"]);
  }
  flipPage() {
    let options: NativeTransitionOptions = {
      direction: "up",
      duration: 600,
    };
    this.NativePageTransitions.flip(options);
    this.router.navigate(["/second"]);
  }
  fadePage() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/second"]);
  }
  curlPage() {
    let options: NativeTransitionOptions = {
      direction: "up",
      duration: 600,
    };
    this.NativePageTransitions.curl(options);
    this.router.navigate(["/second"]);
  }


  navigateFirstAid() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/first-aid"]);
  }

  navigateFractures() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/fractures"]);
  }

  navigateUnconscious() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/unconscious"]);
  }

  cardialArrest() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/cardiac-arrest"]);
  }

  navigateSafePosition() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/safe-position"]);
  }
  navigateFAQ() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/faq"]);
  }
  navigateBurns() {
    let pageTransOpts: NativeTransitionOptions = {
      duration: 1000,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/burns"]);
  }


  async openModal() {
    const modal = await this.modalCtr.create({
      component: MenuComponent,
      cssClass: 'my-custom-modal-css',
      // componentProps: {
      //   foo: "hello",
      //   bar: oswiecimPlace
      // }
    });
    await modal.present();

    // await modal.onWillDismiss();
    // if (this[this.placeOnPage] && this[this.placeOnPage].length === 1) {
    //   this.router.navigate(['menu']);
    // }

  }

  ngDoCheck() {
    this.darkMode = this.generalService.darkMode;
    this.bigFont = this.generalService.bigFont;
  }



}
