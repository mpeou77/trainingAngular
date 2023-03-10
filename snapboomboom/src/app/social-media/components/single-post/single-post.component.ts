import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  @Input() post!:Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number}>();
  tempUser = {firstName: 'Meakara', lastName: 'Peou'};
  constructor() { }

  ngOnInit(): void {
  }

  onNewComment(comment: string) {
    this.postCommented.emit({ comment, postId: this.post.id});
  }
}
