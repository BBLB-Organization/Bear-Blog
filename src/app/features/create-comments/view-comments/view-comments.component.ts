import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/core/models/blog';
import { Comment } from 'src/app/core/models/comment';
import { CommentService } from 'src/app/core/services/comment-service/comment.service';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.css']
})
export class ViewCommentsComponent implements OnInit {

  listOfComments: Comment[] = [];

  @Input() blog: Blog = {
    id: undefined,
    blogTitle: "",
    blogText: "",
    imageId: undefined,
    tagListId: undefined,
    commentId: undefined
  };

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.commentService.getAllCommentsPerBlogId(this.blog.id).subscribe({
      next: (res: Comment[]) => {
        this.listOfComments = res.reverse();
      }
    })
  }

}
