import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogModal } from 'src/app/modals/blog.modal';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent implements OnInit {
  blogdata: blogModal;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blogdata = this.blogService.getBlog(+params['id']);
    });
  }
}
