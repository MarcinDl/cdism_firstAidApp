import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-burns',
  templateUrl: './burns.page.html',
  styleUrls: ['./burns.page.scss'],
})
export class BurnsPage implements OnInit {

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
