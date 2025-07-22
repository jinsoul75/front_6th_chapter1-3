import { isObject } from "../utils/utils";

export const deepEquals = (a: unknown, b: unknown) => {
  // 1. 기본 타입이거나 null인 경우 처리
  if (Object.is(a, b)) return true;

  if (!isObject(a) || !isObject(b)) return false;

  // 2. 둘 다 객체인 경우:
  //    - 배열인지 확인
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) return false;
    }

    return true;
  }

  //    - 객체의 키 개수가 다른 경우 처리
  if (Object.keys(a as object).length !== Object.keys(b as object).length) return false;

  //    - 재귀적으로 각 속성에 대해 deepEquals 호출
  for (const key in a) {
    if (!deepEquals(a[key as keyof typeof a], b[key as keyof typeof b])) return false;
  }

  return true;
};
