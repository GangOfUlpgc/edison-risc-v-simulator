export function useMultiplexor(inputs: string[], selector: string): string {
  const selectedIndex = parseInt(selector, 2);

  if (selectedIndex < 0 || selectedIndex >= inputs.length) {
    throw new Error(`Invalid selector value: ${selector}`);
  }

  return inputs[selectedIndex];
}
