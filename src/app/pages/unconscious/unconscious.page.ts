import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-unconscious',
  templateUrl: './unconscious.page.html',
  styleUrls: ['./unconscious.page.scss'],
})
export class UnconsciousPage implements OnInit {

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


  public slideOpts = {
    centeredSlides: true,
    // initialSlide: 1,
    // speed: 200,
    // spaceBetween: 10,
    slidesPerView: 1
  }


}
