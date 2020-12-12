import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from '../components/blog/blog.component';
import { ErrorPopupComponent } from '../components/error-popup/error-popup.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { SmallBlogComponent } from '../components/small-blog/small-blog.component';
import { TagComponent } from '../components/tag/tag.component';
import { UserLinkComponent } from '../components/user-link/user-link.component';

@NgModule({
  declarations: [
    TagComponent,
    UserLinkComponent,
    HeaderComponent,
    LoaderComponent,
    BlogComponent,
    ErrorPopupComponent,
    SmallBlogComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    TagComponent,
    UserLinkComponent,
    LoaderComponent,
    BlogComponent,
    ErrorPopupComponent,
    HeaderComponent,
    SmallBlogComponent,
  ],
})
export class SharedModule {}
