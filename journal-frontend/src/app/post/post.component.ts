import { Component ,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { PostService } from './post.service';
import * as UserActions from '../user/user.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  post$: Observable<Post[]> = new Observable();

  constructor(
    private postService: PostService,
    private store: Store,
    private router: Router,
    private http: HttpClient
  ) { }
  logout(){
    console.log("Hello here at logout")
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/login']);

  }

  createPost(){
    this.router.navigate(['/create-post']);
  }
 
  ngOnInit() : void{
    this.post$ = this.postService.getPosts();
    this.post$.subscribe(posts => console.log(posts));
  }
  editPost(postId:number){
    this.router.navigate(['/edit-post', postId]);
  }
  deletePost(postId: number) {
    this.http.delete(`http://localhost:3000/posts/${postId}`)
      .subscribe(
        () => {
          console.log('Post deleted successfully');
          alert('Post deleted successfully');
          this.router.navigate(['/posts']);
        },
        (error) => {
          window.location.reload();
          console.error('Error deleting post', error);
        }
      );
  }

}
