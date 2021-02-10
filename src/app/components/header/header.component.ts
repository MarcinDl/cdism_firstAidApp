import { Component, OnInit } from '@angular/core';
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private NativePageTransitions: NativePageTransitions,
    private router: Router,
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
}
