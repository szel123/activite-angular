import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostNewItemComponentComponent } from './post-new-item-component/post-new-item-component.component';
import { PostsService } from './services/posts.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostSingleItemComponentComponent } from './post-single-item-component/post-single-item-component.component';
import { HeaderComponent } from './header/header.component';

const appRoutes : Routes = [
  {path: 'posts' , component:PostListComponentComponent},
  {path: 'creer' , component:PostNewItemComponentComponent},
  {path: 'posts/:id' , component:PostSingleItemComponentComponent},
  {path: '**' , component:PostListComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    PostNewItemComponentComponent,
    PostSingleItemComponentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
