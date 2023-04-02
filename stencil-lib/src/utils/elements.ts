import { debounce } from "./events";

export const onVisible = (
  element: HTMLElement,
  callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  disconnect: boolean = true
): IntersectionObserver => {
  const intersection = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > 0) {
        callback(entry, observer);
        if (disconnect) {
          observer.disconnect();
        }
      }
    });
  });
  
  intersection.observe(element);
  return intersection;
}

export const onResize = (
  element: HTMLElement,
  callback: (entry: ResizeObserverEntry, observer: ResizeObserver) => void,
  debounceMs = 50
): ResizeObserver => {
  const resize = new ResizeObserver(debounce((entries, observer) => {
    entries.forEach(entry => {
      callback(entry, observer);
    });
  }, debounceMs));
  
  resize.observe(element);
  return resize;
}
