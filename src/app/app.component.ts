import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 // newComment='test';
  comments = [];
  commnetObj = null;

  constructor() {
    //this.newComment = null;
    //this.comments = new Array();
    this.commnetObj = {
      comment :null,
      time : null
    };
  }


  addComment(value) :void{
    let newComment = {
      comment :null,
      time : null
    };
    newComment.comment = value;
    newComment.time = new Date();
    this.comments.push(newComment);
  }
  
  
}
