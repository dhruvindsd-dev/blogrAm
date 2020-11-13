import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogModal } from 'src/app/modals/blog.modal';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input('blog') blogData: blogModal;
  constructor() {}

  ngOnInit(): void {}
}
