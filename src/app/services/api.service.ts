import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
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

  sendData(name: string, type: string) {
    this.http
      .post('http://127.0.0.1:8000/api-auth', {
        username: name,
        password: type,
      })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (errorData) => {
          console.log(errorData);
        }
      );
  }
}
