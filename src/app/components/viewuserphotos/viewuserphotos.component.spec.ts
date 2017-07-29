import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserphotosComponent } from './viewuserphotos.component';

describe('ViewuserphotosComponent', () => {
  let component: ViewuserphotosComponent;
  let fixture: ComponentFixture<ViewuserphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserphotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
