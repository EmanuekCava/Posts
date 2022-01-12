import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Post } from "../../interface/posts";

import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})

export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService, private route: Router, private activatedRoute: ActivatedRoute) { }

  posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts().subscribe(
      res => {
        this.posts = res;
      },
      err => console.log(err)
    )
  }

  getPost(id: number) {
    this.route.navigate([`/${id}`])
  }

  removePosts(id: number) {
    this.postsService.removePosts(id).subscribe(
      res => {
        console.log(res)
        this.getPosts()
      },
      err => console.error(err)
    )
  }

  updatePosts(id: number) {
    this.route.navigate([`/update/${id}`])
  }

}
