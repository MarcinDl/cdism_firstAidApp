import { Component, OnInit } from '@angular/core';
import { firstAidContentTitle, firstAidContentList_1,firstAidContentList_2 } from './firstAidContent'
import { Router } from '@angular/router'
@Component({
  selector: 'app-first-aid',
  templateUrl: './first-aid.page.html',
  styleUrls: ['./first-aid.page.scss'],
})
export class FirstAidPage implements OnInit {
  public title = firstAidContentTitle;
  public lists_1 = firstAidContentList_1;
  public lists_2 = firstAidContentList_2;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHomePage() {
    this.router.navigate(['/home']);
  }
}
