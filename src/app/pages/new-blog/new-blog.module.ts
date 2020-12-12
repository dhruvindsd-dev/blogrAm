import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewBlogComponent } from './new-blog.component';

@NgModule({
  declarations: [NewBlogComponent],
  imports: [SharedModule, QuillModule.forRoot()],
})
export class NewBlogModule {}
