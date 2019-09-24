import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
@Input() posts:Post;
@Input() index:number;


  constructor(private service:PostsService) { }

  ngOnInit() {
    
  }
  SupprimerPost(){
    return this.service.removePost(this.posts,this.index);
  }

  loveIt(){
  this.service.loveIts(this.posts);
  }
  DntloveIt(){
    this.service.dntloveIts(this.posts);
  }
  getloveIts(){
    return this.service.getnbloveIts(this.posts);
    
  }
  getColor(){
    if (this.service.getnbloveIts(this.posts)>0){
     return 'green';
    }
     else if(this.service.getnbloveIts(this.posts)<0) {
      return 'red';

  }

}
}