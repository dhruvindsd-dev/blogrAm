import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { RegisterationComponent } from './pages/registeration/registeration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/:id', component: BlogPageComponent },
  { path: 'new-blog', component: NewBlogComponent },
  { path: 'register/:type', component: RegisterationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
