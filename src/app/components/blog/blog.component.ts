import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogModal } from 'src/app/modals/blog.modal';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input('blog') blogData: blogModal;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onClick(e) {
    console.log('test');
    this.router.navigate(['blog', this.blogData.id]);
  }
}
