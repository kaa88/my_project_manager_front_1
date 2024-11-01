export const parseActionName = (actionName: string) => {
  const split = actionName.split("/");
  return split[1] || split[0];
};
