import { Component, OnInit } from '@angular/core';
import { backboneFracturesTitle } from '../fracturesContent';
import { backboneracturesContent } from '../fracturesContent';
@Component({
  selector: 'app-backboneFractures',
  templateUrl: './backboneFractures.page.html',
  styleUrls: ['./backboneFractures.page.scss'],
})
export class backboneFracturesPage implements OnInit {
  public backboneFracturesTitle = backboneFracturesTitle;
  public backboneFracturesSymptoms = backboneracturesContent.backboneFracturesSymptoms;
  public backboneFracturesSymptomsTitle = backboneracturesContent.backboneFracturesSymptomsTitle;
  public backboneFracturesDoNot = backboneracturesContent.backboneFracturesDoNot;
  public backboneFracturesDoNotTitle = backboneracturesContent.backboneFracturesDoNotTitle;
  public backboneFracturesWhatToDo = backboneracturesContent.backboneFracturesWhatToDo;
  public backboneFracturesWhatToDoTitle = backboneracturesContent.backboneFracturesWhatToDoTitle;
  constructor() { }

  ngOnInit() {
  }

}
