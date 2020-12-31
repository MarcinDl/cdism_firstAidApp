import { Component, OnInit } from '@angular/core';
import { upperFracturesContent } from '../fracturesContent';
import { upperFracturesTitle } from '../fracturesContent';
@Component({
  selector: 'app-upperFractures',
  templateUrl: './upperFractures.page.html',
  styleUrls: ['./upperFractures.page.scss'],
})
export class upperFracturesPage implements OnInit {
  public upperFracturesTitle = upperFracturesTitle;

  public upperFracturesContent = upperFracturesContent.whatToDo;
  public upperFracturesContentTitle = upperFracturesContent.whatToDoTitle;


  constructor() { }

  ngOnInit() {
  }

}
