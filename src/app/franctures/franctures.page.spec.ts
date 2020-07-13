import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrancturesPage } from './franctures.page';

describe('FrancturesPage', () => {
  let component: FrancturesPage;
  let fixture: ComponentFixture<FrancturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrancturesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrancturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
