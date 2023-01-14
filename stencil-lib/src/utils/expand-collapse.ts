import { nextFrame, afterTransition, AnimationStack, StackFn } from './animation-transition';

export class ExpandCollapseService {

  expanded = false;

  animationStack = new AnimationStack();

  async toggle(element: HTMLElement, hideClass: string = 'hide'): Promise<void> {
    if (!this.expanded) {
      await this.expand(element, hideClass);
    } else {
      await this.collapse(element, hideClass);
    }
  }

  async expand(element: HTMLElement, hideClass: string = 'hide'): Promise<void> {
    this.expanded = true;

    const animationStart: StackFn = async () => {
      element.classList.remove(hideClass);
      element.style.transitionProperty = 'max-height';
      element.style.transitionTimingFunction = 'ease-in-out';
      element.style.overflow = 'hidden';
      element.style.maxHeight = '0px';
    }

    const animationDuring: StackFn = async () => {
      element.style.maxHeight = element.scrollHeight + "px";
    }

    const animationEnd: StackFn = async () => {
      element.style.maxHeight = null;
      element.style.transitionProperty = null;
      element.style.transitionTimingFunction = null;
    }

    await this.triggerAnimation(
      animationStart,
      async () => await nextFrame(),
      animationDuring,
      async () => await afterTransition(element),
      animationEnd
    );
  }

  async collapse(element: HTMLElement, hideClass: string = 'hide'): Promise<void> {
    this.expanded = false;

    const animationStart: StackFn = async () => {
      element.style.transitionProperty = 'max-height';
      element.style.transitionTimingFunction = 'ease-in-out';
      element.style.overflow = 'hidden';
      element.style.maxHeight = element.scrollHeight + "px";
    }

    const animationDuring: StackFn = async () => {
      element.style.maxHeight = "0px";
    }

    const animationEnd: StackFn = async () => {
      element.style.maxHeight = null;
      element.style.transitionProperty = null;
      element.style.transitionTimingFunction = null;
      element.classList.add(hideClass);
    }

    await this.triggerAnimation(
      animationStart,
      async () => await nextFrame(),
      animationDuring,
      async () => await afterTransition(element),
      animationEnd
    );
  }

  private async triggerAnimation(...instructions: StackFn[]): Promise<void> {
    if (this.animationStack.executeInProgress) {
      this.animationStack.clearStack();
      this.animationStack.addToStack(...instructions);
      return;
    }
    this.animationStack.addToStack(...instructions);
    await this.animationStack.executeStack();
  }

}