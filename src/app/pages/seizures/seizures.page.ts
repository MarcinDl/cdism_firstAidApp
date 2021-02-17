import { Component, OnInit } from '@angular/core';
import { firstAidContentTitle, firstAidContentList_1,firstAidContentList_2 } from './firstAidContent'
import { Router } from '@angular/router'
@Component({
  selector: 'app-seizures',
  templateUrl: './seizures.page.html',
  styleUrls: ['./seizures.page.scss'],
})
export class SeizuresPage implements OnInit {
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
