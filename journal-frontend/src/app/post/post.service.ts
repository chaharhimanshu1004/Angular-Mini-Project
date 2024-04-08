import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) {}
  getPosts(userId: number): Observable<Post[]> {
    console.log("at frontend posts route")
    const url = `${this.apiUrl}/?userId=${userId}`;
    return this.http.get<Post[]>(url);
  }
}
