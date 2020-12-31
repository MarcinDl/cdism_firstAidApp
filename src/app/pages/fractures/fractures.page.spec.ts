import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { fracturesPage } from './fractures.page';

describe('fracturesPage', () => {
  let component: fracturesPage;
  let fixture: ComponentFixture<fracturesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [fracturesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(fracturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
