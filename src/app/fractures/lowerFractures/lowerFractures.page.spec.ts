import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { lowerFracturesPage } from './lowerFractures.page';

describe('lowerFracturesPage', () => {
  let component: lowerFracturesPage;
  let fixture: ComponentFixture<lowerFracturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [lowerFracturesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(lowerFracturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
