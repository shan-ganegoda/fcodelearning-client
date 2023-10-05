import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourcecontentComponent } from './courcecontent.component';

describe('CourcecontentComponent', () => {
  let component: CourcecontentComponent;
  let fixture: ComponentFixture<CourcecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourcecontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourcecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
