import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css'],
})
export class NewBlogComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.apiService.sendData(this.form.value.name, this.form.value.type);
  }
}
