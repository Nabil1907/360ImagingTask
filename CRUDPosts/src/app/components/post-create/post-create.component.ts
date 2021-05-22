import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from './../../crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private crudService: CRUDService
  ) {

    this.postForm = this.formBuilder.group({
      title: [''],
      desc: [''],
      imageUrl: ['']
    })
  }

  ngOnInit(): void {
  }
  onSubmit(): any {
    console.log(this.postForm.value)
    this.crudService.addPost(this.postForm.value)
      .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      }, (err) => {
        console.log(err);
      });
  }

}
