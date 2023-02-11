export const dateStringToDate = (date: string): Date => {
  const x = date.split('/').map((item: string): number => {
    return Number(item);
  });

  return new Date(x[2], x[1] - 1, x[0]);
};
