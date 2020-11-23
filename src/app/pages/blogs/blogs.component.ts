import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogModal, Tag } from 'src/app/modals/blog.modal';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  blogs: blogModal[];
  currentPage: number = 1;
  isLoading: boolean = false;
  tags: Tag[];
  error: string;
  selectedTag: string; // not actually nessesary but doing it anyways for the outputting that the currently selected blog  is.
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //  pendign stuff :
    // add
    this.route.queryParams.subscribe((params) => {
      // check if params exist
      if (params.t) {
        this.selectedTag = params.t;
        this.apiService
          .fetchBlogWithTags(this.selectedTag)
          .subscribe((response) => {
            this.blogs = this.apiService.blogs;
            this.tags = this.apiService.tags;
          });
      } else {
        this.apiService.fetchBlogs(this.currentPage).subscribe((response) => {
          console.log('from all blogs');

          this.blogs = this.apiService.blogs;
          this.tags = this.apiService.tags;
        });
      }
    });
    // most probablyt this is not aSYN
    // if (this.selectedTag){

    //   this.apiService.fetchBlogWithTags()
    // }
  }
  loadInitalPosts() {}
  onScroll() {
    if (this.currentPage < this.apiService.totalPages) {
      this.currentPage++;
      this.isLoading = true;
      this.apiService.fetchBlogs(this.currentPage).subscribe(
        (response) => {
          this.isLoading = false;
          this.blogs = this.apiService.blogs;
        },
        (error) => {
          this.isLoading = false;
        }
      );
    } else {
      this.error = 'No more blogs found';
    }
  }
}
