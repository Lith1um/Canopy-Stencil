export const throttle = (func: Function, timeFrame: number) => {
  let lastTime = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastTime >= timeFrame) {
      func();
      lastTime = now;
    }
  };
}

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
