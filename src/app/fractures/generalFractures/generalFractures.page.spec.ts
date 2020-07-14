import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { generalFracturesPage } from './generalFractures.page';

describe('generalFracturesPage', () => {
  let component: generalFracturesPage;
  let fixture: ComponentFixture<generalFracturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [generalFracturesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(generalFracturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
