// ????????
export const useScroll = (anchorName: string, behavior?: ScrollBehavior) => {
  return () => {
    const el = document.getElementById(anchorName);
    if (el) el.scrollIntoView({ behavior });
  };
};
