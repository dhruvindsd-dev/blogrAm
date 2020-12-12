import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'blog/:id',
    loadChildren: () =>
      import('./pages/blog-page/blog-page.module').then(
        (e) => e.BlogPageModule
      ),
  },
  {
    path: 'new-blog',
    loadChildren: () =>
      import('./pages/new-blog/new-blog.module').then((e) => e.NewBlogModule),
  },
  {
    path: 'register/:type',
    loadChildren: () =>
      import('./pages/registeration/registeration.module').then(
        (e) => e.RegisterationModule
      ),
  },
  {
    path: 'tag/:tag',
    component: BlogsComponent,
  }, // all the blogs

  {
    path: 'user/:username/:id',
    loadChildren: () =>
      import('./pages/user/user.module').then((e) => e.UserModule),
  }, // all the blogs
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
