import { Injectable } from '@angular/core';
import { blogModal } from '../modals/blog.modal';
@Injectable()
export class BlogService {
  blogs: blogModal[] = [
    new blogModal(
      'test blog title',
      'test blog subtitle',
      'test blog content ',
      'test img ',
      new Date(),
      'some test author '
    ),
    new blogModal(
      'test blog title',
      'test blog subtitle',
      'test blog content ',
      'test img ',
      new Date(),
      'some test author '
    ),
    new blogModal(
      'test blog title',
      'test blog subtitle',
      'test blog content ',
      'test img ',
      new Date(),
      'some test author '
    ),
  ];
  constructor() {}
}
