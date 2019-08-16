import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() title : String ;
  @Input() content : String ;
  @Input() loveIts : number ;
   created_at = new Date() ;


  constructor() { }

  ngOnInit() {
  }

  getLoveIts(){
    return this.loveIts;
  }

  ajouter(){
    this.loveIts++;
  }

  soustraire(){
    this.loveIts--;
  }

}
