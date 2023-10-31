import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteWritingAreaComponent } from './note-writing-area.component';

describe('NoteWritingAreaComponent', () => {
  let component: NoteWritingAreaComponent;
  let fixture: ComponentFixture<NoteWritingAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteWritingAreaComponent]
    });
    fixture = TestBed.createComponent(NoteWritingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
