import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string };
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'https://jsonplaceholder.typicode.com';
  private users$: Observable<User[]>;
  private posts$: Observable<Post[]>;

  constructor(private http: HttpClient) {
    this.users$ = this.http.get<User[]>(`${this.base}/users`).pipe(shareReplay(1));
    this.posts$ = this.http.get<Post[]>(`${this.base}/posts`).pipe(shareReplay(1));
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  getPosts(): Observable<Post[]> {
    return this.posts$;
  }
}