import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unconscious',
  templateUrl: './unconscious.page.html',
  styleUrls: ['./unconscious.page.scss'],
})
export class UnconsciousPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public slideOpts = {
    centeredSlides: true,
    // spaceBetween: 10,
    // slidesPerView: 1.6
  }
}
