export default function intersection<T>(arrayA: T[], arrayB: T[]): T[] {
  const setA = new Set<T>(arrayA);
  const setB = new Set<T>(arrayB);
  const _intersection = new Set<T>();

  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return [..._intersection];
}
