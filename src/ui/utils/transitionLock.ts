/**
 * Prevents double-clicking on transitions, e.g. when menu slides.
 * @example if (transitionIsLocked( 1000 )) return;
 */

export const transitionIsLocked = (timeout = 0) => {
  let result = isLocked;
  if (isLocked === false) {
    isLocked = true;
    setTimeout(() => {
      isLocked = false;
    }, timeout);
  }
  return result;
};

let isLocked = false;
