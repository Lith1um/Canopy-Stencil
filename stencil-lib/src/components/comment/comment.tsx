import { Component, h, Prop } from '@stencil/core';
import { AvatarSize } from '../avatar/avatar.type';
import { CommentItem } from './interfaces/comment.interface';
import { CommentSize, CommentType } from './types/comment-size.type';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { getUserLocale } from '../../utils/user-locale';

@Component({
  tag: 'cpy-comment',
  styleUrl: 'comment.scss',
  shadow: true,
})
export class Comment {

  @Prop() comment: CommentItem;

  @Prop() rightAligned: boolean = false;

  @Prop() maxLines: number = null;

  @Prop() size: CommentSize = 'default';

  @Prop() type: CommentType = 'primary';

  @Prop() showMoreText: string;

  @Prop() showLessText: string;

  avatarSizeMap: {[key in CommentSize]: AvatarSize} = {
    small: 'default',
    default: 'large',
    large: 'x-large'
  };

  async componentWillLoad(): Promise<void> {
    dayjs.extend(localizedFormat);
    const locale = await getUserLocale();
    dayjs.locale(locale);
  }

  formatDate(dateStr: string): string {
    return dayjs(dateStr).format('LLL');
  }

  render() {
    const classes = {
      'comment': true,
      'comment--right': this.rightAligned,
      [`comment--${this.type}`]: !!this.type,
      [`comment--${this.size}`]: !!this.size
    };

    if (!this.comment) {
      return;
    }

    return (
      <div class={classes}>
        {this.comment.imageUrl && <cpy-avatar size={this.avatarSizeMap[this.size]} src={this.comment.imageUrl}></cpy-avatar>}

        <div class='comment__bubble'>
          {this.comment.author && <div class='comment__author'>{this.comment.author}</div>}
          {this.comment.date && <div class='comment__timestamp'>{this.formatDate(this.comment.date)}</div>}
          
          <div class='comment__text'>
            <cpy-show-more
              lines={this.maxLines}
              text={this.comment.text}
              type={this.type}
              showMoreText={this.showMoreText}
              showLessText={this.showLessText}>
            </cpy-show-more>
          </div>
        </div>

        {this.rightAligned && <div class='comment__spacer'></div>}
      </div>
    );
  }
}
