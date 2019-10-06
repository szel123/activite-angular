import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit,OnDestroy {
  

  @Input() title : String ;
  @Input() content : String ;
  @Input() loveIts : number ;
  @Input() post : Post ;
   created_at = new Date() ;
   postSubscription : Subscription;
   posts :Post[];


  constructor(private postsService:PostsService , private router:Router) { }

  ngOnInit() {
    this.postSubscription = this.postsService.postsSubject.subscribe(
      (posts : Post[]) => {
        this.posts = posts;
      }
    )
  }

  getLoveIts(){
    return this.post.loveIts;
  }

  ajouter(){
    this.post.loveIts++;
  }

  soustraire(){
    this.post.loveIts--;
  }

  onDeletePost(){
    this.postsService.onDeletePost(this.post);
    this.router.navigate(['posts']);
  }

  onViewPost(){
    this.router.navigate(['posts',this.post.title]);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
  

}
