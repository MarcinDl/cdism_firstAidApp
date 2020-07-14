import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { backboneFracturesPage } from './backboneFractures.page';

describe('backboneFracturesPage', () => {
  let component: backboneFracturesPage;
  let fixture: ComponentFixture<backboneFracturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [backboneFracturesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(backboneFracturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
