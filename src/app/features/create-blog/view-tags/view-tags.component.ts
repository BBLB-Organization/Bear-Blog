import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/core/models/tag';
import { TagService } from 'src/app/core/services/tag-service/tag.service';

@Component({
  selector: 'app-view-tags',
  templateUrl: './view-tags.component.html',
  styleUrls: ['./view-tags.component.css']
})
export class ViewTagsComponent implements OnInit {

  tagListPerBlog: string = "";
  @Input() tagListId: number | undefined;

  constructor(
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.loadTagById(this.tagListId);
  }

  loadTagById(tagId: number | undefined) {
    this.tagService.getTagListById(tagId).subscribe((res: Tag) => {
      this.tagListPerBlog = res.tagNames;
      console.log(this.tagListPerBlog)
    });
  }

}
