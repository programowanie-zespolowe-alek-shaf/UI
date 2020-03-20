
export const preventPropagation = (e) => {
  if (!e) e = window.event;
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
};
