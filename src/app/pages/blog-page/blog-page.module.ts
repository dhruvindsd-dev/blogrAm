import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPageComponent } from './blog-page.component';

@NgModule({
  declarations: [BlogPageComponent],
  imports: [SharedModule],
})
export class BlogPageModule {}
