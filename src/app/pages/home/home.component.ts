import { Component, OnInit } from '@angular/core';
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
  constructor(
    private blogService: BlogService,
    private apiService: ApiService
  ) {
    this.featuredBlogs = this.blogService.blogs;
  }

  ngOnInit(): void {
    this.apiService
      .getHomeBlogs()
      .subscribe((responseData: blogResponseData) => {
        for (let blog of responseData.blogs) {
          this.blogService.createNewBlog(blog);
        }
      });
  }
}
