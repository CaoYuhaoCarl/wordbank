export function generateSeed(style: string, index: number): string {
  return `${style}-${index + 1}-${Math.random().toString(36).slice(2)}`;
}