import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardiacArrestPage } from './cardiac-arrest.page';

describe('CardiacArrestPage', () => {
  let component: CardiacArrestPage;
  let fixture: ComponentFixture<CardiacArrestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiacArrestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardiacArrestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
