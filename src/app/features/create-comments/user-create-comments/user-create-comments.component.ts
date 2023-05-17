import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Blog } from 'src/app/core/models/blog';
import { Comment } from 'src/app/core/models/comment';
import { BlogService } from 'src/app/core/services/blog-service/blog.service';
import { CommentService } from 'src/app/core/services/comment-service/comment.service';
import { ToasterComponent } from 'src/app/shared/toaster/toaster.component';

@Component({
  selector: 'app-user-create-comments',
  templateUrl: './user-create-comments.component.html',
  styleUrls: ['./user-create-comments.component.css']
})
export class UserCreateCommentsComponent implements OnInit {

  commentForm: FormGroup = this.fb.group({
    commentText: ['', Validators.required]
  },
    { updateOn: 'submit' }
  );
  @Input() blog: Blog = {
    id: undefined,
    blogTitle: "",
    blogText: "",
    imageId: undefined,
    tagListId: undefined,
    commentId: undefined
  };
  comment: Comment = {
    id: undefined,
    username: "",
    commentText: "",
    commentPostDate: new Date()
  }

  message = "Test error";
  @ViewChild(ToasterComponent) toasterComponent: ToasterComponent = new ToasterComponent;

  get commentText(): string { return this.commentForm.get('commentText')?.value; }

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    console.log(this.blog);
  }

  addCommentIdToBlog() {
    this.blogService.updateBlogWithCommentId(this.blog.id, this.blog).subscribe((res: Blog) => {
      console.log('BLOG COMMENT ID UPDATED', res);
    });
  }

  postComment() {
    if (this.commentForm.valid) {
      this.comment.username = 'Anonymous';
      this.comment.commentText = this.commentText;
      this.commentService.saveComment(this.comment).subscribe({
        next: (res: Comment) => {
          if (this.blog.commentId == null) {
            this.blog.commentId = "" + res.id;
          }
          else {
            this.blog.commentId = this.blog.commentId + "," + res.id;
          }
          this.addCommentIdToBlog();
          this.message = "Comment was added successfully!";
          this.toasterComponent.openToaster();
        }
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }

}
