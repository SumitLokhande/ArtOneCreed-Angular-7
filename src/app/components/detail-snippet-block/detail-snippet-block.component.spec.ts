import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSnippetBlockComponent } from './detail-snippet-block.component';

describe('DetailSnippetBlockComponent', () => {
  let component: DetailSnippetBlockComponent;
  let fixture: ComponentFixture<DetailSnippetBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSnippetBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSnippetBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
