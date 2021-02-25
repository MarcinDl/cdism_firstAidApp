import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-cardiac-arrest',
  templateUrl: './cardiac-arrest.page.html',
  styleUrls: ['./cardiac-arrest.page.scss'],
})
export class CardiacArrestPage implements OnInit {
  public darkMode: any;
  public bigFont: any;
  public verticalDistance:any;
  public horizontalDistance:any;
  constructor(
    private generalService:GeneralService
  ) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.bigFont = this.generalService.bigFont,
    this.darkMode = this.generalService.darkMode,
    this.horizontalDistance = this.generalService.horizontalDistance,
    this.verticalDistance = this.generalService.verticalDistance
}

}
