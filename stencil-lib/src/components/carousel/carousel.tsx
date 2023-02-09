import { Component, h, Prop, State } from '@stencil/core';
import { debounce } from '../../utils/events';

@Component({
  tag: 'cpy-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class Carousel {

  @Prop()
  carouselTitle: string;
  
  @State()
  leftButtonDisabled = true;

  @State()
  rightButtonDisabled = false;

  contentElem: HTMLElement;

  componentDidLoad(): void {
    this.contentElem.addEventListener('scroll', debounce(() => this.handleScroll(), 100));
  }

  handleScroll(): void {
    this.leftButtonDisabled = this.contentElem.scrollLeft === 0;
    this.rightButtonDisabled = Math.abs(this.contentElem.scrollWidth - this.contentElem.clientWidth - this.contentElem.scrollLeft) < 1;
  }

  handleScrollClick(left: boolean): void {
    const scrollDistance = left
      ? -this.contentElem.clientWidth
      : this.contentElem.clientWidth;

    this.contentElem.scrollLeft += scrollDistance;
  }

  render() {
    const classes = {
      'carousel': true,
    };

    return (
      <div class={classes}>
        <div class="carousel__header">
          <div class="carousel__title">
            {this.carouselTitle}
          </div>

          <div class="carousel__buttons">
            <cpy-button icon type="basic" disabled={this.leftButtonDisabled} onClick={() => this.handleScrollClick(true)}>
              <cpy-icon>chevron_left</cpy-icon>
            </cpy-button>
            <cpy-button icon type="basic" disabled={this.rightButtonDisabled} onClick={() => this.handleScrollClick(false)}>
              <cpy-icon>chevron_right</cpy-icon>
            </cpy-button>
          </div>
        </div>

        <div class="carousel__content" ref={(el) => this.contentElem = el as HTMLElement}>
          <div class="carousel__scroll-content">
            <slot/>
          </div>
        </div>
      </div>
    );
  }
}
