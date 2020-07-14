import { Component, OnInit } from '@angular/core';
import { generalFracturesContent } from './../fracturesContent'
@Component({
  selector: 'app-generalFractures',
  templateUrl: './generalFractures.page.html',
  styleUrls: ['./generalFractures.page.scss'],
})
export class generalFracturesPage implements OnInit {
  public symptoms = generalFracturesContent.symptoms
  constructor() { }

  ngOnInit() {
  }

}
