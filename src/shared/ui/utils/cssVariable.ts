export const cssVariable = {
  get: (name: string, element?: HTMLElement): number => {
    let value: number | null = null;
    if (name) {
      const variable = parseFloat(
        getComputedStyle(element || document.body).getPropertyValue(
          fixName(name)
        )
      );
      if (!isNaN(variable)) value = variable;
    }
    if (value === null) {
      console.error(`Could not find CSS variable "${name}"`);
      return 0;
    }
    return value;
  },

  set: (name: string, value: string, element?: HTMLElement): void => {
    (element || document.body).style.setProperty(fixName(name), value);
  },
};

const fixName = (name: string): string => name.replace(/^-*/, "--");
