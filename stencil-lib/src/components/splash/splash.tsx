import { Component, Element, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'cpy-splash',
  styleUrl: 'splash.scss',
  shadow: true,
})
export class Splash {

  @Element()
  host: HTMLElement;

  @Prop()
  disabled: boolean = false;

  @Prop()
  unbounded: boolean = false;

  @Prop()
  centered: boolean = false;

  splashStyles = `<style id="cpy-ripple-styles">
  @keyframes ripple {
    to {
      transform: translateX(var(--translate)) translateY(var(--translate)) scale(2);
      opacity: 0;
    }
  }

  span.cpy-ripple {
    --translate: 0;
    position: absolute;
    z-index: 100;
    border-radius: 50%;
    transform: translateX(var(--translate)) translateY(var(--translate)) scale(0);
    animation: ripple 450ms linear;
    background-color: var(--cpy-bg-splash);
  }
  span.cpy-ripple--centered {
    --translate: -50%;
  }
</style>`;

  componentDidLoad(): void {
    if (this.unbounded && !document.getElementById('cpy-ripple-styles')) {
      document.body.insertAdjacentHTML('afterbegin', this.splashStyles);
    } else if (!this.unbounded) {
      this.host.parentElement.insertAdjacentHTML('afterbegin', this.splashStyles);
    }

    this.handleDisableChange(this.disabled);
  }

  @Watch('disabled')
  handleDisableChange(disabled: boolean): void {
    if (disabled) {
      this.host.parentElement.removeEventListener('click', this.handleOnClick);
      this.host.parentElement.style.position = null;
      this.host.parentElement.style.overflow = null;
      this.host.parentElement.style.cursor = null;
      this.host.parentElement.style.transform = null;
      return;
    }

    this.host.parentElement.style.position = 'relative';
    if (!this.unbounded) {
      this.host.parentElement.style.overflow = 'hidden';
    }
    this.host.parentElement.style.cursor = 'pointer';
    this.host.parentElement.style.transform = 'translateZ(0)';

    this.host.parentElement.addEventListener('click', this.handleOnClick);
  }

  handleOnClick = (e: MouseEvent): void => {
    const circle = document.createElement("span");
    const diameter = Math.sqrt(Math.pow(this.host.parentElement.clientWidth, 2) + Math.pow(this.host.parentElement.clientHeight, 2));
    const radius = diameter / 2;
    const bounds = this.host.parentElement.getBoundingClientRect();
  
    circle.style.width = circle.style.height = `${diameter}px`;

    if (!this.unbounded) {
      circle.style.left = this.centered ? '50%' : `${e.clientX - bounds.left - radius}px`;
      circle.style.top = this.centered ? '50%' : `${e.clientY - bounds.top - radius}px`;
    } else {
      circle.style.left = this.centered ? `${bounds.left + bounds.width/2}px` : `${e.clientX}px`;
      circle.style.top = this.centered ? `${bounds.top + bounds.height/2}px` : `${e.clientY}px`;
    }

    circle.classList.add('cpy-ripple');
    if (this.centered || this.unbounded) {
      circle.classList.add('cpy-ripple--centered');
    }
  
    if (this.unbounded) {
      document.body.appendChild(circle);
    } else {
      this.host.parentElement.appendChild(circle);
    }
    setTimeout(() => circle.remove(), 500);
  }

  render() {
    return (
      <slot/>
    );
  }
}
