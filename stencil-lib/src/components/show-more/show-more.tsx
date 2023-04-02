import { Component, h, Prop, State } from '@stencil/core';
import { onResize } from '../../utils/elements';
import { ShowMoreAppearance } from './show-more.type';

@Component({
  tag: 'cpy-show-more',
  styleUrl: 'show-more.scss',
  shadow: true,
})
export class ShowMore {

  @Prop() lines: number = 3;

  @Prop() text: string;

  @Prop() type: ShowMoreAppearance = 'primary';

  @Prop() showMoreText: string = 'show more';

  @Prop() showLessText: string = 'show less';

  @State()
  expanded: boolean = false;

  showMoreButtonElem: HTMLElement;
  showMoreTextElem: HTMLElement;
  resize: ResizeObserver;

  toggle(): void {
    this.expanded = !this.expanded;
  }

  componentDidLoad(): void {
    if (this.lines) {
      this.resize = onResize(this.showMoreTextElem, () => {
        if (this.expanded) {
          this.showMoreButtonElem.style.display = 'inline';
        } else if (this.showMoreTextElem.scrollHeight <= this.showMoreTextElem.clientHeight) {
          this.showMoreButtonElem.style.display = 'none';
        } else {
          this.showMoreButtonElem.style.display = 'unset';
        }
      });
    }
  }

  render() {
    const lineClampStyle = !this.expanded
      ? {webkitLineClamp: `${this.lines ?? 'none'}`}
      : {};

    return (
      <div class='show-more'>
        <p class='show-more__text' style={lineClampStyle} ref={(el) => this.showMoreTextElem = el as HTMLElement}>{this.text}</p>
        <cpy-link
          style={{display: 'none'}}
          type={this.type}
          func={() => this.toggle()}
          ref={(el) => this.showMoreButtonElem = el as HTMLElement}>
          {this.expanded ? this.showLessText : this.showMoreText}
        </cpy-link>
      </div>
    );
  }

  disconnectedCallback(): void {
    this.resize?.disconnect();
  }
}
