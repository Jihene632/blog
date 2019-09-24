import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postSubscription: Subscription;
   posts: any[];
  
    constructor(private service:PostsService) {}
    ngOnInit(){
      this.postSubscription = this.service.postsSubject.subscribe(
        (posts: any[]) => {
          this.posts =posts ;
}
      );
      this.service.emitpostsSubject();
      
    }
    ngOnDestroy() {
      this.postSubscription.unsubscribe();
    }
}
