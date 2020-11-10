import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface blogResponseData {
  blogs: [];
  totalPages: string;
  totalBlogs: string;
}

@Injectable()
export class ApiService {
  serverUrl: string = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {}
  getData() {
    this.http.get('http://127.0.0.1:8000').subscribe(
      (responseData) => {
        console.log(responseData);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sendData(img: File, name: string, type: string) {
    console.log(img);
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
    return this.http.post(`${this.serverUrl}/new-user-blog`, form, {
      headers: new HttpHeaders({
        Authorization: 'Token ',
      }),
    });
  }

  getHomeBlogs(page: string = '1') {
    return this.http.get(`${this.serverUrl}/get-all-blogs`, {
      params: {
        pageNo: page,
      },
    });
  }
}
