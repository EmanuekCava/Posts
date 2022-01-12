import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Post } from "../interface/posts";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public API: string = "http://localhost:3400"

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(`${this.API}/posts`, {
      
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  createPosts(postData: Post) {
    return this.http.post<Post>(`${this.API}/createposts`, postData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
  getPost(id: number) {
    return this.http.get<Post>(`${this.API}/post/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
  removePosts(id: number) {
    return this.http.delete<Post>(`${this.API}/removeposts/${id}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
  updatePosts(id: number, postData: Post): Observable<Post> {
    return this.http.put<Post>(`${this.API}/updateposts/${id}`, postData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }
}
