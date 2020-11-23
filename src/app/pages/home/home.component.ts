import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogModal, Tag } from 'src/app/modals/blog.modal';
import { ApiService, blogResponseData } from 'src/app/services/api.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredBlogs: blogModal[];
  tags: Tag[];
  pages: any[];
  currentPage = 1;
  constructor(private apiService: ApiService, private router: Router) {
    this.featuredBlogs = this.apiService.blogs;
    this.tags = this.apiService.tags;
    this.pages = Array(this.apiService.totalPages);
  }
  ngOnInit(): void {}
}
