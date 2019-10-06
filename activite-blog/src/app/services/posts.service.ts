import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[] = [];
  postsSubject = new Subject<Post[]>();

  emitPosts(){
    this.postsSubject.next(this.posts);
  }

  onAddPost(post : Post){
    this.posts.push(post);
    this.emitPosts();
  }

  onDeletePost(post :Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl) =>{
        if(postEl === post){
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove,1);
    this.emitPosts();
  }

  getPost(title:string){
    return new Promise(
      (resolve,reject)=>{
        for (let post of this.posts){
          if(post.title === title){
            resolve(post);
          }
        }
      }
    );
  }

  constructor() { }
}
