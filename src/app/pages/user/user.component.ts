import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogModal } from 'src/app/modals/blog.modal';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isLoading: boolean = true;
  blogs: blogModal[];
  user: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.apiService.fetchUserBlogs(params.id).subscribe(
        (response) => {
          console.log(response);
          this.isLoading = false;
          this.blogs = response.blogs;
          this.user = response.user;
        },
        (errorMsg) => {
          console.log(errorMsg);

          this.isLoading = false;
        }
      );
    });
  }
}
