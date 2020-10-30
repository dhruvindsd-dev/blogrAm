import { Component, OnInit } from '@angular/core';
import { blogModal } from 'src/app/modals/blog.modal';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
