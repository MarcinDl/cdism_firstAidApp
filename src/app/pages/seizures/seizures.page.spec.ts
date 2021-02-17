import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeizuresPage } from './seizures.page';

describe('FirstAidPage', () => {
  let component: SeizuresPage;
  let fixture: ComponentFixture<SeizuresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeizuresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeizuresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
