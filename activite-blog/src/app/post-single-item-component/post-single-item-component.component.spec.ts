import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSingleItemComponentComponent } from './post-single-item-component.component';

describe('PostSingleItemComponentComponent', () => {
  let component: PostSingleItemComponentComponent;
  let fixture: ComponentFixture<PostSingleItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostSingleItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSingleItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
