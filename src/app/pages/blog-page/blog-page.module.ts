import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPageComponent } from './blog-page.component';

const routes: Route[] = [{ path: '', component: BlogPageComponent }];

@NgModule({
  declarations: [BlogPageComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class BlogPageModule {}
