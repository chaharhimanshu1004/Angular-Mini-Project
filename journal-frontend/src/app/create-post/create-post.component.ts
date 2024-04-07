import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  constructor(private http: HttpClient, private router: Router) { }
  title: string = '';
  content: string = '';
  createPost() {
    const newPost = { title: this.title, content: this.content };
    this.http.post('http://localhost:3000/posts/create', newPost)
      .subscribe(
        (response) => {
          console.log('New Journal created successfully', response);
          alert('New Journal created successfully');
          this.router.navigate(['/posts']);
        },
        (error) => {
          console.error('Error creating post', error);
        }
      );
  }
    
  }


