import { Injectable } from '@angular/core';
import { blogModal } from '../modals/blog.modal';
@Injectable()
export class BlogService {
  // blogs: blogModal[] = [
  //   new blogModal(
  //     'test blog title',
  //     'test blog subtitle',
  //     'test blog content ',
  //     'test img ',
  //     new Date(),
  //     'some test author '
  //   ),
  //   new blogModal(
  //     'test blog title',
  //     'test blog subtitle',
  //     'test blog content ',
  //     'test img ',
  //     new Date(),
  //     'some test author '
  //   ),
  //   new blogModal(
  //     'test blog title',
  //     'test blog subtitle',
  //     'test blog content ',
  //     'test img ',
  //     new Date(),
  //     'some test author '
  //   ),
  // ];
  blogs: blogModal[] = [];
  constructor() {}

  createNewBlog(obj) {
    console.log(this.blogs);

    this.blogs.push(
      new blogModal(
        obj.title,
        obj.subtitle,
        obj.content,
        obj.img,
        new Date(obj.date),
        obj.username
      )
    );
  }
}
