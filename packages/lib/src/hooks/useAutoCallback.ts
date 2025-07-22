import type { AnyFunction } from "../types";
import { useCallback } from "./useCallback";
import { useRef } from "./useRef";

// useCallback과 useRef를 이용하여 useAutoCallback
export const useAutoCallback = <T extends AnyFunction>(fn: T): T => {
  //  useAutoCallback은 이런 방식으로 동작해야 합니다.
  // - 콜백함수가 **참조하는 값은 항상 렌더링 시점에 최신화** 되어야 한다. ← 이 부분을 어떻게 해결할 수 있을지 고민해보세요!
  const callbackRef = useRef<T>(fn);
  callbackRef.current = fn;

  // - 대신 항상 **동일한 참조를 유지**해야 한다 (useCallback 활용)
  return useCallback(
    ((...args: Parameters<T>) => {
      return callbackRef.current(...args);
    }) as T,
    [],
  );
};
