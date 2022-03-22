import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsMethodologiesComponent } from './tools-methodologies.component';

describe('ToolsMethodologiesComponent', () => {
  let component: ToolsMethodologiesComponent;
  let fixture: ComponentFixture<ToolsMethodologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsMethodologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsMethodologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
