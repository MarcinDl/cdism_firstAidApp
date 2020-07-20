import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SafePositionPage } from './safe-position.page';

describe('SafePositionPage', () => {
  let component: SafePositionPage;
  let fixture: ComponentFixture<SafePositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafePositionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SafePositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
