import { debounce } from "./events";

export const onVisible = (
  element: HTMLElement,
  callback: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
  disconnect: boolean = true
): IntersectionObserver => {
  const intersection = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
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

export const getScrollParent = (element: HTMLElement, includeHidden: boolean = false) => {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === "absolute";
  var overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/;

  if (style.position === "fixed") {
    return document.body;
  }

  for (var parent = element; (parent = parent.parentElement);) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === "static") {
      continue;
    }
    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) return parent;
  }

  return document.body;
}