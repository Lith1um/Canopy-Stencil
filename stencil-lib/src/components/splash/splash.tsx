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

  componentDidLoad(): void {
    this.handleDisableChange(this.disabled);
  }

  @Watch('disabled')
  handleDisableChange(disabled: boolean): void {
    if (disabled) {
      this.host.parentElement.removeEventListener('click', this.handleOnClick);
      this.host.parentElement.style.position = 'unset';
      this.host.parentElement.style.overflow = 'unset';
      this.host.parentElement.style.cursor = 'unset';
      return;
    }

    // insert the animation into a style on the component, since
    // defining in the stylesheet does not work for slotted content
    this.host.parentElement.insertAdjacentHTML('afterbegin', `<style>
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  span.cpy-ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 450ms linear;
    background-color: var(--cpy-bg-splash);
  }
</style>`);

    this.host.parentElement.style.position = 'relative';
    this.host.parentElement.style.overflow = 'hidden';
    this.host.parentElement.style.cursor = 'pointer';

    this.host.parentElement.addEventListener('click', this.handleOnClick);
  }

  handleOnClick = (e: MouseEvent): void => {
    const circle = document.createElement("span");
    const diameter = Math.max(this.host.parentElement.clientWidth, this.host.parentElement.clientHeight);
    const radius = diameter / 2;
    const bounds = this.host.parentElement.getBoundingClientRect();
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - bounds.left - radius}px`;
    circle.style.top = `${e.clientY - bounds.top - radius}px`;
    circle.classList.add('cpy-ripple');
  
    this.host.parentElement.appendChild(circle);
    setTimeout(() => circle.remove(), 500);
  }

  render() {
    return (
      <slot/>
    );
  }
}
