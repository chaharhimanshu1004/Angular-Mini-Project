import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})

export class EditPostComponent {
  postId: number=0;
  title: string ='';
  content: string = '';
  constructor(private http: HttpClient, 
              private router: Router,
              private route: ActivatedRoute
            ) { }
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('postId')){
      this.postId = parseInt(this.route.snapshot.paramMap.get('postId') || '0');
    }
    console.log(typeof(this.postId))
    this.http.get(`http://localhost:3000/posts/${this.postId}`)
      .subscribe((response: any) => {
        this.title = response.title;
        this.content = response.content;
      });
  }
  
  editPost(){
    this.http.put(`http://localhost:3000/posts/${this.postId}`, { title: this.title, content: this.content })
      .subscribe(
        () => {
          console.log('Post updated successfully');
          alert('Post updated successfully');
          this.router.navigate(['/posts']);
        },
        (error) => {
          console.error('Error updating post', error);
        }
      );
  }

}
