import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogService } from './services/blog.service';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { SmallBlogComponent } from './components/small-blog/small-blog.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BlogsComponent, BlogComponent, HeaderComponent, SmallBlogComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
