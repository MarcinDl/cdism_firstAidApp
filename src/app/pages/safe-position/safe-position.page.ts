import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-safe-position',
  templateUrl: './safe-position.page.html',
  styleUrls: ['./safe-position.page.scss'],
})
export class SafePositionPage implements OnInit {

  constructor(
    private generalService:GeneralService
  ) { }

  ngOnInit() {
  }
  public darkMode: any;
  public bigFont: any;
  public verticalDistance:any;
  public horizontalDistance:any;

  ngDoCheck(){
    this.bigFont = this.generalService.bigFont,
    this.darkMode = this.generalService.darkMode,
    this.horizontalDistance = this.generalService.horizontalDistance,
    this.verticalDistance = this.generalService.verticalDistance
  }
}
