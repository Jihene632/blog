import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../../../src/models/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsSubject = new Subject<Post[]>();
  posts:Post[]=[];

  emitpostsSubject() {
    this.postsSubject.next(this.posts);
  }
  addPost(post: Post) {
    this.posts.push(post);
    this.emitpostsSubject();
  }
  
loveIts(post:Post){
  return post.loveIts++;
}
dntloveIts(post:Post){
  return post.loveIts--;
}
getnbloveIts(post:Post){
  return post.loveIts;

}
removePost(post:Post, i:number){
  this.posts.splice(i, 1);
  this.emitpostsSubject();
}

}
