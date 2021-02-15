import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BurnsPage } from './burns.page';

describe('BurnsPage', () => {
  let component: BurnsPage;
  let fixture: ComponentFixture<BurnsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BurnsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
