import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
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
  tags: { id: string; name: string }[] = [];
  constructor() {}

  createNewBlog(obj) {
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
  createTags(tags: { id: string; name: string }[]) {
    tags.map((tag) => {
      this.tags.push(tag);
    });
  }
  getBlog(id: number) {
    return this.blogs[id];
  }
}
