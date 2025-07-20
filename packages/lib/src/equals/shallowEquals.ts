const isObject = (value: unknown): boolean => {
  return typeof value === "object" && value !== null;
};

export const shallowEquals = (a: unknown, b: unknown) => {
  // 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
  if (Object.is(a, b)) return true;

  // 2. 둘 중 하나라도 객체가 아닌 경우 처리
  if (!isObject(a) || !isObject(b)) return false;

  // 3. 객체의 키 개수가 다른 경우 처리
  const keysA = Object.keys(a as object);
  const keysB = Object.keys(b as object);

  if (keysA.length !== keysB.length) return false;

  // 4. 모든 키에 대해 얕은 비교 수행
  for (const key of keysA) {
    if (!keysB.includes(key)) return false;
    if ((a as Record<string, unknown>)[key] !== (b as Record<string, unknown>)[key]) return false;
  }

  return true;
};
