import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  public darkMode: any;
  public bigFont: any;
  
  constructor() { }


  allegro(){
    alert("dupa")
  }
}
