import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'cpy-show-more',
  styleUrl: 'show-more.scss',
  shadow: true,
})
export class ShowMore {

  @Prop() lines: number = 3;

  @Prop() text: string;

  @Prop() type: 'primary' | 'secondary' | 'basic' = 'primary';

  @Prop() showMoreText: string = 'show more';

  @Prop() showLessText: string = 'show less';

  @State()
  expanded: boolean = false;

  showMoreButtonElem: HTMLElement;
  showMoreTextElem: HTMLElement;

  toggle(): void {
    this.expanded = !this.expanded;
  }

  componentDidRender(): void {
    if (this.expanded) {
      this.showMoreButtonElem.style.display = 'inline';
    } else if (this.showMoreTextElem.scrollHeight <= this.showMoreTextElem.offsetHeight) {
      this.showMoreButtonElem.style.display = 'none';
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
          type={this.type}
          func={() => this.toggle()}
          ref={(el) => this.showMoreButtonElem = el as HTMLElement}>
          {this.expanded ? this.showLessText : this.showMoreText}
        </cpy-link>
      </div>
    );
  }
}
