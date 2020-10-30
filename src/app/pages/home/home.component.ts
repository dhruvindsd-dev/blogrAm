import { Component, OnInit } from '@angular/core';
import { blogModal } from 'src/app/modals/blog.modal';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingBlogs: blogModal[];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.trendingBlogs = this.blogService.blogs;
    console.log(this.trendingBlogs);
  }
}
