import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogService } from './services/blog.service';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { SmallBlogComponent } from './components/small-blog/small-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { AuthService } from './auth/auth.service';
import { RegisterationComponent } from './pages/registeration/registeration.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorPopupComponent } from './components/error-popup/error-popup.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogsComponent,
    BlogComponent,
    HeaderComponent,
    SmallBlogComponent,
    BlogPageComponent,
    NewBlogComponent,
    RegisterationComponent,
    LoaderComponent,
    ErrorPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot(),
  ],
  providers: [BlogService, ApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
