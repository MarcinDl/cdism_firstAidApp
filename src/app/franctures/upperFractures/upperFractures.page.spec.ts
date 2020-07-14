import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { upperFracturesPage } from './upperFractures.page';

describe('upperFracturesPage', () => {
  let component: upperFracturesPage;
  let fixture: ComponentFixture<upperFracturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [upperFracturesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(upperFracturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
