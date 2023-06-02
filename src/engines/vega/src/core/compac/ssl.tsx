export function useSLL(A: string, B: string): string {
  const a = parseInt(A, 2);
  const b = parseInt(B, 2);
  const result = (a << b).toString(2);

  return result;
}

export function useSLL1(A: string) {
  return useSLL(A, "1");
}
