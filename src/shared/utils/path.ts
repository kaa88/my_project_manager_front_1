export const fixPath = (url: string | undefined): string =>
  url ? url.replace(/\/$/, "") : "";
