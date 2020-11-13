import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ApiService, blogResponseData } from './services/api.service';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // loading will prevent other componenets form initializing if auto login or blog loading is not done
  isLoading: boolean = true;
  errorMsg: string = '';
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private blogService: BlogService
  ) {}
  ngOnInit() {
    this.authService.autologin();
    this.apiService.getHomeBlogs().subscribe(
      (responseData: blogResponseData) => {
        console.log(responseData);

        for (let blog of responseData.blogs) {
          this.blogService.createNewBlog(blog);
        }
        this.blogService.createTags(responseData.tags);
        this.isLoading = false;
      },
      (errorResponse) => {
        this.errorMsg = errorResponse;
        this.isLoading = false;
      }
    );
  }
}
