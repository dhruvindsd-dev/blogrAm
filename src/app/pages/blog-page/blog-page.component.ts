import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogModal } from 'src/app/modals/blog.modal';
import { ApiService } from 'src/app/services/api.service';
import { BlogService } from 'src/app/services/blog.service';
@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent implements OnInit {
  isLoading: boolean = true;
  blogdata: blogModal;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // this.blogdata = this.apiService.getBlog(+params['id']);
      this.apiService.getBlog(+params['id']).subscribe((response: any) => {
        console.log(response);
        this.isLoading = false;
        this.blogdata = response.blog;
      });
    });
  }
}
