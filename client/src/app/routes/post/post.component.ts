import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Post } from "../../interface/posts";

import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post = {
    id: 0,
    title: '',
    content: '',
    created: 0
  }

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.postsService.getPost(params.id).subscribe(
        res => {
          this.post.id = res.id;
          this.post.title = res.title;
          this.post.content = res.content;
          this.post.created = res.created;
        },
        err => console.error(err)
      )
    }
  }

  removePosts(id: number) {
    this.postsService.removePosts(id).subscribe(
      res => {
        this.router.navigate(["/"])
        console.log(res)
      },
      err => console.error(err)
    )
  }
}
