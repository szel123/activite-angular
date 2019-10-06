import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-new-item-component',
  templateUrl: './post-new-item-component.component.html',
  styleUrls: ['./post-new-item-component.component.scss']
})
export class PostNewItemComponentComponent implements OnInit {

 
  PostForm: FormGroup;
  datepipe: DatePipe = new DatePipe('en-US');

  constructor(private formBuilder: FormBuilder, private PostsService: PostsService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.PostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  
  onAddPost() {
    const title = this.PostForm.get('title').value;
    const content = this.PostForm.get('content').value;
    const date = this.datepipe.transform(Date.now(), 'yyyy-MM-dd hh:mm:ss');
    const newPost = new Post(title, content , 0 ,date);
    this.PostsService.onAddPost(newPost);
    this.router.navigate(['/posts']);
  }
}



