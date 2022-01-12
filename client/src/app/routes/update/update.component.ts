import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from "../../interface/posts";

import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  posts: Post = {
    id: 0,
    title: "",
    content: "",
    created: 0
  }

  constructor(private postsService: PostsService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activatedRouter.snapshot.params;

    if (params.id) {  
      this.postsService.getPost(params.id).subscribe(
        res => {
          this.posts.title = res.title;
          this.posts.content = res.content;
        },
        err => console.log(err)
      )
    }
  }

  updatePost() {
    delete this.posts.id;
    delete this.posts.created;

    const params = this.activatedRouter.snapshot.params;
    if (params.id) {
      this.postsService.updatePosts(params.id, this.posts).subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
      this.router.navigate(["/"])
    }
  }
}
