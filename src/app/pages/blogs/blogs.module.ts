import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogsComponent } from './blogs.component';

@NgModule({
  declarations: [BlogsComponent],
  imports: [SharedModule],
})
export class blogsModule {}
