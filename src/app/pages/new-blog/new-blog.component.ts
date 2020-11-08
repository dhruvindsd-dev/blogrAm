import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('subtitle') subtitle: ElementRef;
  @ViewChild('content') content;
  file: File;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}
  onSubmit() {
    let data = new FormData();
    data.append('title', this.title.nativeElement.innerText);
    data.append('subtitle', this.subtitle.nativeElement.innerText);
    data.append(
      'content',
      this.content.elementRef.nativeElement.querySelector('.ql-editor')
        .innerHTML
    );
    this.apiService.createNewBlog(data).subscribe((responseData) => {
      console.log(responseData);
      this.router.navigate(['']);
    });
  }
  onImg(e) {
    this.file = e.target.files[0];
  }
  handleTyping(e: HTMLElement, max_type: number) {
    if (e.innerText.length > max_type) {
      e.style.border = '2px solid red';
    } else if (e.innerText.length == 0) {
      e.style.border = '2px solid red';
    } else {
      e.style.border = '2px solid white';
    }
  }
  handleFocusOut(e: HTMLElement) {
    console.log('some thing happened');

    e.style.border = '2px solid rgba(17, 16, 16, 0.5)';
  }
}

// list of authentications i wanna add
// 1. the length of the word
// 2. requred field
// 3. a valid img
