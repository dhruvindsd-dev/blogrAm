import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogService } from './services/blog.service';
import { ApiService } from './services/api.service';
import { AuthService } from './auth/auth.service';
import { httpConfigInterceptor } from './httpConfig.interceptor';
import { SharedModule } from './shared/shared.module';
import { blogsModule } from './pages/blogs/blogs.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    blogsModule,
  ],

  providers: [
    BlogService,
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: httpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
