import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  
  posts():any {
    return this.http.get(this.url);
  }

  createPost(data:any):any {
    return this.http.post(this.url, data);
  }

  info = {
    name: 'Angular Practice',
    email: 'ang@gmail.com',
    mobile: 98390983980,
    date: new Date(),
  };
}
