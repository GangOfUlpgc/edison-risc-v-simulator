function useAdder(A: string, B: string): string {
  const a = parseInt(A, 2);
  const b = parseInt(B, 2);
  const sum = (a + b).toString(2);

  return sum;
}
