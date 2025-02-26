export const sum = (sumOf: string): number => {
  if (sumOf === "") return 0;
  return sumOf.split(",").reduce((acc, curr) => acc + parseInt(curr), 0);
};
