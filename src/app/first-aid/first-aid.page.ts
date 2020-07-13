import { Component, OnInit } from '@angular/core';
import { firstAidContentTitle, firstAidContentList } from './firstAidContent'
import { Router } from '@angular/router'
@Component({
  selector: 'app-first-aid',
  templateUrl: './first-aid.page.html',
  styleUrls: ['./first-aid.page.scss'],
})
export class FirstAidPage implements OnInit {
  public title = firstAidContentTitle;
  public lists = firstAidContentList;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  toHomePage() {
    this.router.navigate(['/home']);
  }
}
