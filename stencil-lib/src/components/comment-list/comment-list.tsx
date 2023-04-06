import { Component, h, Prop } from '@stencil/core';
import { CommentItem } from '../comment/interfaces/comment.interface';
import { CommentSize, CommentType } from '../comment/types/comment-size.type';

@Component({
  tag: 'cpy-comment-list',
  styleUrl: 'comment-list.scss',
  shadow: true,
})
export class CommentList {

  @Prop() comments: CommentItem[];

  @Prop() rightAligned: boolean = false;

  @Prop() maxLines: number = null;

  @Prop() hideAvatar: boolean = false;

  @Prop() size: CommentSize = 'default';

  @Prop() type: CommentType = 'primary';

  @Prop() showMoreText: string;

  @Prop() showLessText: string;

  render() {
    if (!this.comments?.length) {
      return;
    }

    return [
      this.comments.map(comment =>
        <cpy-comment
          comment={comment}
          size={this.size}
          hideAvatar={this.hideAvatar}
          maxLines={this.maxLines}
          rightAligned={this.rightAligned}
          type={this.type}
          showMoreText={this.showMoreText}
          showLessText={this.showLessText}>
        </cpy-comment>)
    ];
  }
}
