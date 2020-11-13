import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface blogResponseData {
  blogs: [];
  totalPages: string;
  totalBlogs: string;
  tags: [];
}

@Injectable()
export class ApiService {
  serverUrl: string = 'http://127.0.0.1:8000';
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
      .post(`${this.serverUrl}/new-user-blog`, form, {
        headers: new HttpHeaders({
          Authorization: 'Token ',
        }),
      })
      .pipe(catchError(this.handleAuthentication));
  }

  getHomeBlogs(page: string = '1') {
    return this.http
      .get(`${this.serverUrl}/get-all-blogs`, {
        params: {
          pageNo: page,
        },
      })
      .pipe(catchError(this.handleAuthentication));
  }

  handleAuthentication(error) {
    let errorMsg = 'Some unknown error occured please try again later';
    switch (error.error) {
      case '':
        errorMsg = 'some custom error ';
        break;
    }
    return throwError(errorMsg);
  }
}
