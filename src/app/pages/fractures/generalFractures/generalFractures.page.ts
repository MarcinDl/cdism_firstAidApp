import { Component, OnInit } from '@angular/core';
import { generalFracturesContent } from '../fracturesContent';
import { generalFracturesTitle } from '../fracturesContent';
@Component({
  selector: 'app-generalFractures',
  templateUrl: './generalFractures.page.html',
  styleUrls: ['./generalFractures.page.scss'],
})
export class generalFracturesPage implements OnInit {
  public generalFracturesTitle = generalFracturesTitle;

  public symptoms = generalFracturesContent.symptoms
  public symptomsTitle = generalFracturesContent.symptomsTitle
  public forbiddenActs = generalFracturesContent.forbiddenActs
  public forbiddenActsTitle = generalFracturesContent.forbiddenActsTitle
  constructor() { }

  ngOnInit() {
  }

}
