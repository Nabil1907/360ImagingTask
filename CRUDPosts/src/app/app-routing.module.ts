import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostShowComponent } from './components/post-show/post-show.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'postDetails/:id', component: PostDetailsComponent },
  { path: 'addPost', component: PostCreateComponent },
  { path: 'show-post/:id', component: PostShowComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
