import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/modals/blog.modal';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  @Input('tagObj') tag: Tag;

  constructor() {}

  ngOnInit(): void {}
}
