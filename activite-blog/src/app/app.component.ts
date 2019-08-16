import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  posts = [{
    title: "Mon premier post",
    content: "description de mon premier post",
    loveIts: 0,
    created_at: new Date()
  }, {
    title: "Mon dexieme post",
    content: "description de mon dexieme post",
    loveIts: 0,
    created_at: new Date()
  },{
    title: "Mon troisieme post",
    content: "description de mon troisieme post",
    loveIts: 0,
    created_at: new Date()
  }];
}
