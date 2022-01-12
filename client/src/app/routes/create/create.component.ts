import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Post } from "../../interface/posts";

import { PostsService } from "../../services/posts.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newPost: Post = {
    id: 0,
    title: "",
    content: "",
    created: 0
  }

  constructor(private postsService: PostsService, 
    private route: Router) { }

  ngOnInit(): void {
  }

  createNewPost() {
    delete this.newPost.id;
    delete this.newPost.created;

    this.postsService.createPosts(this.newPost).subscribe(
      res => {
        this.route.navigate(["/"])
      },
      err => console.error(err)
    )
  }

}
