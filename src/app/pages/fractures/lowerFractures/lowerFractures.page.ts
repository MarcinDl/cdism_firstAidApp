import { Component, OnInit } from '@angular/core';
import { lowerFracturesContent } from '../fracturesContent';
import { lowerFracturesTitle } from '../fracturesContent';
@Component({
  selector: 'app-lowerFractures',
  templateUrl: './lowerFractures.page.html',
  styleUrls: ['./lowerFractures.page.scss'],
})
export class lowerFracturesPage implements OnInit {
  public lowerFracturesTitle = lowerFracturesTitle;

  public lowerFracturesContent = lowerFracturesContent.whatToDoLower;
  public lowerFracturesContentTitle = lowerFracturesContent.whatToDoLowerTitle;
  constructor() { }

  ngOnInit() {
  }

}
