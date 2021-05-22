import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CRUDService } from './../../crud.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  adsForm: FormGroup;
  Posts: any = [];

  constructor(
    private crudService: CRUDService,
    public formBuilder: FormBuilder
  ) {

    this.adsForm = this.formBuilder.group({
      title: [''],
      description: [''],
      photoUrl: ['']
    })
  }

  ngOnInit(): void {
    this.crudService.getAllPost().subscribe(res => {
      console.log(res);

      this.Posts = res;
    });

  }
  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deletePost(id).subscribe((res) => {
        this.Posts.splice(i, 1);
      })
    }
  }

}
