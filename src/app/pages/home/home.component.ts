import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogModal } from 'src/app/modals/blog.modal';
import { ApiService, blogResponseData } from 'src/app/services/api.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredBlogs: blogModal[];
  tags: { name: string; id: string }[];
  constructor(
    private blogService: BlogService,
    private apiService: ApiService,
    private router: Router
  ) {
    this.featuredBlogs = this.blogService.blogs;
    this.tags = this.blogService.tags;
    console.log(this.tags[0].name);
  }

  ngOnInit(): void {}

  onClick(index: number) {
    this.router.navigate(['blog', index]);
  }
}
