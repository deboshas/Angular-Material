import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialougeOverviewExampleComponent } from './dialouge-overview-example.component';

describe('DialougeOverviewExampleComponent', () => {
  let component: DialougeOverviewExampleComponent;
  let fixture: ComponentFixture<DialougeOverviewExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialougeOverviewExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialougeOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
