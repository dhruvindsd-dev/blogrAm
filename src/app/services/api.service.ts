import { HttpClient } from '@angular/common/http';
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
  homeBlogs: any = null;
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
      (responseData) => {},
      (errorData) => {}
    );
  }

  createNewBlog(form: FormData) {
    return this.http
      .post(`${this.serverUrl}/new-user-blog`, form)
      .pipe(catchError(this.handleError));
  }

  // fetchHomePageContent(){
  //   // fetching all the featured and top posts of the month here.
  //  return this.http.get(`${this.serverUrl}/homePageContent`).pipe(catchError(this.handleError), tap(response=>{
  //    this.homeBlogs = response
  //  }))
  // }

  getBlog(id: number) {
    return this.http.get(`${this.serverUrl}/get-blog-from-id/${id}`);
  }
  fetchBlogs(page: number = 1) {
    if (page == 1) {
      this.blogs = [];
    }
    // fetch blogs for the blogs page

    // getting blogs from the server
    return this.http
      .get(`${this.serverUrl}/get-all-blogs`, {
        params: {
          pageNo: '' + page,
        },
      })
      .pipe(catchError(this.handleError), tap(this.assignBlogResponse));
  }
  fetchBlogWithTags(tag, pageNo: number = 1) {
    console.log(pageNo);

    if (pageNo == 1) {
      this.blogs = [];
    }
    // fetch all the blogs with the tag
    return this.http
      .get(`${this.serverUrl}/get-blogs-from-tags`, {
        params: {
          tags: tag,
          pageNo: '' + pageNo,
        },
      })
      .pipe(catchError(this.handleError), tap(this.assignBlogResponse));
  }

  assignBlogResponse = (response: blogResponseData) => {
    console.log(response);
    console.log(this.blogs);

    this.blogs.push(...response.blogs);
    this.tags = response.tags;
    this.totalPages = +response.totalPages;
  };

  handleError(error) {
    console.log('somethig happened');

    let errorMsg = 'Some unknown error occured please try again later';
    switch (error.error) {
      case 'invalid_page_count':
        break;
        errorMsg = 'no_more_pages_to_load';
    }
    return throwError(errorMsg);
  }
}
