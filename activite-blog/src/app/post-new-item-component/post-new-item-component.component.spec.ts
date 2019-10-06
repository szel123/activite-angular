import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewItemComponentComponent } from './post-new-item-component.component';

describe('PostNewItemComponentComponent', () => {
  let component: PostNewItemComponentComponent;
  let fixture: ComponentFixture<PostNewItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostNewItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
