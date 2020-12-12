import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewBlogComponent } from './new-blog.component';

const routes: Route[] = [{ path: '', component: NewBlogComponent }];

@NgModule({
  declarations: [NewBlogComponent],
  imports: [SharedModule, QuillModule.forRoot(), RouterModule.forChild(routes)],
})
export class NewBlogModule {}
