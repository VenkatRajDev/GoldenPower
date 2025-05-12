export const GroupIntoColumns = <T>(array: T[], rowPerColums: number): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < array.length; i += rowPerColums) {
    result.push(array.slice(i, i + rowPerColums));
  }

  return result;
}