import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogsComponent } from './blogs.component';

const routes: Route[] = [{ path: '', component: BlogComponent }];

@NgModule({
  declarations: [BlogsComponent],
  imports: [SharedModule, InfiniteScrollModule, RouterModule.forChild(routes)],
  exports: [BlogsComponent],
})
export class blogsModule {}
