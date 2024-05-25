export const useScroll = (name: string, behavior?: ScrollBehavior) => {
  return () => {
    const el = document.getElementById(name);
    if (el) el.scrollIntoView({ behavior });
  };
};
