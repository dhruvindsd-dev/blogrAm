import { Component, Input, OnInit } from '@angular/core';
import { blogModal } from 'src/app/modals/blog.modal';

@Component({
  selector: 'app-small-blog',
  templateUrl: './small-blog.component.html',
  styleUrls: ['./small-blog.component.css'],
})
export class SmallBlogComponent implements OnInit {
  @Input('blog') blogData: blogModal;
  constructor() {}

  ngOnInit(): void {}
}
