import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-single-item-component',
  templateUrl: './post-single-item-component.component.html',
  styleUrls: ['./post-single-item-component.component.scss']
})
export class PostSingleItemComponentComponent implements OnInit {

  post : Post;

  constructor(private postsService:PostsService , private router:Router ,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.post = new Post('','',0,Date());
    const title = this.route.snapshot.params['id'];
    this.postsService.getPost(title).then(
      (post:Post)=>{
        this.post = post;
      }
    );
  }

  onBack(){
    this.router.navigate(['posts']);
  }

}
