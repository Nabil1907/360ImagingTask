import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CRUDService } from './../../crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CRUDService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetOnePost(this.getId).subscribe(res => {
      console.log(res)
      this.updateForm.setValue({
        title: res['title'],
        desc: res['desc'],
        imageUrl: res['imageUrl'],

      });
    });
    this.updateForm = this.formBuilder.group({
      title: [''],
      desc: [''],
      imageUrl: [''],

    })

  }

  ngOnInit() {

  }
  onUpdate(): any {
    this.crudService.updatePost(this.getId, this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/'))
      }, (err) => {
        console.log(err);
      });
  }

}
