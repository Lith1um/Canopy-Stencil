export const enter = async (element, transitionName = null): Promise<void> => {
  element.classList.remove('hidden');
  await transition('enter', element, transitionName);
}

export const leave = async (element, transitionName = null): Promise<void> => {
  await transition('leave', element, transitionName);
  element.classList.add('hidden');
}

export const toggle = async (element, transitionName = null): Promise<void> => {
  if (element.classList.contains('hidden')) {
    await enter(element, transitionName);
  } else {
    await leave(element, transitionName);
  }
}

export const transition = async (direction, element, animation): Promise<void> => {
  const dataset = element.dataset;
  const animationClass = animation
    ? `${animation}-${direction}`
    : direction;
  let transition = `transition${direction.charAt(0).toUpperCase() + direction.slice(1)}`;
  const genesis = dataset[transition]
    ? dataset[transition].split(" ")
    : [animationClass];
  const start = dataset[`${transition}Start`]
    ? dataset[`${transition}Start`].split(" ")
    : [`${animationClass}-start`];
  const end = dataset[`${transition}End`]
    ? dataset[`${transition}End`].split(" ")
    : [`${animationClass}-end`];

  addClasses(element, genesis);
  addClasses(element, start);
  await nextFrame();
  removeClasses(element, start);
  addClasses(element, end);
  await afterTransition(element);
  removeClasses(element, end);
  removeClasses(element, genesis);
}

export const addClasses = (element, classes): void => {
  element.classList.add(...classes);
}

export const removeClasses = (element, classes): void => {
  element.classList.remove(...classes);
}

export const nextFrame = (): Promise<unknown> => {
  return new Promise(resolve => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

export const afterTransition = (element: HTMLElement): Promise<void> => {
  return new Promise<void>(resolve => {
    const computedDuration = getComputedStyle(element).transitionDuration.split(",")[0];
    const duration = Number(computedDuration.replace('s', '')) * 1000;
    setTimeout(() => resolve(), duration);
  });
}
