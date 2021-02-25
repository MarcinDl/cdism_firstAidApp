import { Component, OnInit } from '@angular/core';
import { firstAidContentTitle, firstAidContentList_1,firstAidContentList_2 } from './firstAidContent'
import { Router } from '@angular/router'
import { GeneralService } from 'src/app/services/general.service';
@Component({
  selector: 'app-seizures',
  templateUrl: './seizures.page.html',
  styleUrls: ['./seizures.page.scss'],
})
export class SeizuresPage implements OnInit {
  public title = firstAidContentTitle;
  public lists_1 = firstAidContentList_1;
  public lists_2 = firstAidContentList_2;

  constructor(private router: Router,
    private generalService:GeneralService) { }

  ngOnInit() {
  }

  toHomePage() {
    this.router.navigate(['/home']);
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
