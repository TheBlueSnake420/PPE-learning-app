export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** Shuffle, but never return the original order when that's avoidable. */
export function shuffleChanged<T>(items: readonly T[]): T[] {
  if (items.length < 2) return [...items];
  for (let attempt = 0; attempt < 10; attempt++) {
    const result = shuffle(items);
    if (result.some((item, i) => item !== items[i])) return result;
  }
  return [...items].reverse();
}
