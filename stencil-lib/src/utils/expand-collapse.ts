import { nextFrame, afterTransition } from './animation-transition';

export async function expandEnter(element): Promise<void> {
  element.classList.remove('hide');
  await transitionExpandCollapse('enter', element);
}

export async function expandLeave(element): Promise<void> {
  await transitionExpandCollapse('leave', element);
  element.classList.add('hide');
}

export async function expandToggle(element): Promise<void> {
  if (element.classList.contains('hide')) {
    await expandEnter(element);
  } else {
    await expandLeave(element);
  }
}

export const transitionExpandCollapse = async (direction, element): Promise<void> => {
  element.style.transitionProperty = 'max-height';
  element.style.transitionTimingFunction = 'ease-in-out';
  if (direction === 'enter') {
    element.style.overflow = 'hidden';
    element.style.maxHeight = '0px';
    await nextFrame();
    element.style.maxHeight = element.scrollHeight + "px";
    await afterTransition(element);
    element.style.maxHeight = null;
  } else {
    element.style.overflow = 'hidden';
    element.style.maxHeight = element.scrollHeight + "px";
    await nextFrame();
    element.style.maxHeight = "0px";
    await afterTransition(element);
    element.style.maxHeight = null;
  }
  element.style.transitionProperty = null;
  element.style.transitionTimingFunction = null;
};
