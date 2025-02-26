export const sum = (sumOf: string): number => {
  if (sumOf === "") return 0;
  let delimiter = /[\n,]/;
  if (sumOf.startsWith("//")) {
    const delimiterEndIndex = sumOf.indexOf("\n");
    delimiter = new RegExp(`[${sumOf.substring(2, delimiterEndIndex)}]`);
    sumOf = sumOf.substring(delimiterEndIndex + 1);
  }
  let negativeNumbers = sumOf.match(/-\d+/g);
  if (negativeNumbers) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }
  return sumOf.split(delimiter).reduce((acc, num) => {
    return acc + parseInt(num);
  }, 0);
};
