import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBlogComponent } from './small-blog.component';

describe('SmallBlogComponent', () => {
  let component: SmallBlogComponent;
  let fixture: ComponentFixture<SmallBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
