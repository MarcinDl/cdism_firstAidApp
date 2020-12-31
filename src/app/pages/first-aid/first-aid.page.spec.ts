import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstAidPage } from './first-aid.page';

describe('FirstAidPage', () => {
  let component: FirstAidPage;
  let fixture: ComponentFixture<FirstAidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstAidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstAidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
