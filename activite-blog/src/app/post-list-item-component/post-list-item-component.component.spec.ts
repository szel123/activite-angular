import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponentComponent } from './post-list-item-component.component';

describe('PostListItemComponentComponent', () => {
  let component: PostListItemComponentComponent;
  let fixture: ComponentFixture<PostListItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
