import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { blogModal, Tag } from '../modals/blog.modal';

export interface blogResponseData {
  blogs: any[];
  tags: any[];
  totalPages: string;
  totalBlogs: string;
}

@Injectable()
export class ApiService {
  serverUrl: string = 'http://127.0.0.1:8000';
  blogs: blogModal[] = [];
  tags: Tag[] = [];
  totalPages: number;
  constructor(private http: HttpClient) {}

  sendData(img: File, name: string, type: string) {
    const formdata = new FormData();
    formdata.append('img', img);
    formdata.append('name', 'some test request from angular');
    formdata.append('type', 'some test form angular');
    console.warn(formdata);

    this.http.post('http://127.0.0.1:8000/new-hero', {}).subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (errorData) => {
        console.log(errorData);
      }
    );
  }

  createNewBlog(form: FormData) {
    return this.http
      .post(`${this.serverUrl}/new-user-blog`, form)
      .pipe(catchError(this.handleError));
  }

  fetchBlogs(page: number = 1) {
    // getting blogs from the server
    return this.http
      .get(`${this.serverUrl}/get-all-blogs`, {
        params: {
          pageNo: '' + page,
        },
      })
      .pipe(
        catchError(this.handleError),
        tap((response: blogResponseData) => {
          this.blogs.push(...response.blogs);
          this.tags = response.tags;
          this.totalPages = +response.totalPages;
        })
      );
  }

  getBlog(index: number) {
    // getting blogs from the aldready initialized blogs i.e this.blogs
    return this.blogs.filter((blog) => {
      return blog.id == index;
    })[0]; // returing the first item since filter will return a list
  }

  fetchBlogWithTags(tag) {
    // fetch all the blogs with the tag
    return this.http
      .get(`${this.serverUrl}/get-blogs-from-tags`, {
        params: {
          tags: tag,
        },
      })
      .pipe(
        catchError(this.handleError),
        tap((response: blogResponseData) => {
          this.blogs = response.blogs;
        })
      );
  }

  handleError(error) {
    let errorMsg = 'Some unknown error occured please try again later';
    switch (error.error) {
      case 'invalid_page_count':
        break;
        errorMsg = 'no_more_pages_to_load';
    }
    return throwError(errorMsg);
  }
}
