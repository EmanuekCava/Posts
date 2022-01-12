import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from '../app/routes/posts/posts.component';     
import { CreateComponent } from '../app/routes/create/create.component';  
import { PostComponent } from './routes/post/post.component';
import { UpdateComponent } from './routes/update/update.component';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: ':id',
        component: PostComponent
    },
    {
        path: "update/:id",
        component: UpdateComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }