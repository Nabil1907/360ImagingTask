import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CRUDService } from './../../crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {
  getId: any;
  title: any;
  desc: any;
  postId: any;
  imageUrl: any;
  commentForm: FormGroup;
  Comments: any = [];
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CRUDService

  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');


  }

  ngOnInit(): void {
    this.crudService.GetOnePost(this.getId).subscribe(res => {
      console.log(res)
      this.postId = res._id;
      this.title = res.title;
      this.imageUrl = res.imageUrl;
      this.desc = res.desc;
      this.crudService.getAllComments(res._id).subscribe(res => {
        console.log(res);

        this.Comments = res;
      });
    });
    this.commentForm = this.formBuilder.group({
      commentBody: [''],
      postId: this.postId
    });
    console.log(this.title);


  }
  onSubmit(): any {

    // add post id in the form data 
    this.commentForm.value.postId = this.postId;

    this.crudService.addComment(this.commentForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngOnInit()
        console.log(this.Comments);

        this.Comments = Comment;
        // this.ngZone.run(() => this.router.navigateByUrl('/show-post/' + this.postId));
      }, (err) => {
        console.log(err);
      });

  }
  deleteComment(id: any, i: any) {

    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteComment(id).subscribe((res) => {
        this.Comments.splice(i, 1);
      })
    }


  }

}
