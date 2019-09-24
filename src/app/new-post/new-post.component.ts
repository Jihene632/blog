import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private Service: PostsService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.newForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
     
    });
  }
  
  onSavePost() {
    const title = this.newForm.get('title').value;
    const content = this.newForm.get('content').value;
    const loveIts=0;
    const created_at=new Date();
    const newPost= new Post(title,content,loveIts,created_at);
    this.Service.addPost(newPost);
    this.router.navigate(['/posts']);

  }
}
