import { Component, OnInit } from '@angular/core';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";
import { Router } from "@angular/router";
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public darkMode: any;
  public bigFont: any;
  public verticalDistance:any;
  public horizontalDistance:any;
  
  constructor(
    private NativePageTransitions: NativePageTransitions,
    private router: Router,
    private generalService:GeneralService
  ) { }

  ngOnInit() {}

  goHome(){
    let pageTransOpts: NativeTransitionOptions = {
      duration: 100,
      iosdelay: 50,
      androiddelay: 100
    };
    this.NativePageTransitions.fade(pageTransOpts);
    this.router.navigate(["/home"]);
  }
  ngDoCheck(){
    this.bigFont = this.generalService.bigFont,
    this.darkMode = this.generalService.darkMode,
    this.horizontalDistance = this.generalService.horizontalDistance,
    this.verticalDistance = this.generalService.verticalDistance
}

}
