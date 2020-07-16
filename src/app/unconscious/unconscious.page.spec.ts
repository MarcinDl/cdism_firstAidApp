import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnconsciousPage } from './unconscious.page';

describe('UnconsciousPage', () => {
  let component: UnconsciousPage;
  let fixture: ComponentFixture<UnconsciousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconsciousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnconsciousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
