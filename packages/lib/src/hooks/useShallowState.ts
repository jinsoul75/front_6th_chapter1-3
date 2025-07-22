import { useState } from "react";
import { shallowEquals } from "../equals";
import { useCallback } from "react";

export const useShallowState = <T>(initialValue: T) => {
  // useState를 사용하여 상태를 관리하고, shallowEquals를 사용하여 상태 변경을 감지하는 훅을 구현합니다.
  const [state, setState] = useState<T>(initialValue);

  // setStateWithShallowCompare는 항상 같은 참조를 유지
  const setStateWithShallowCompare = useCallback(
    (value: T) => {
      setState((prev) => {
        if (!shallowEquals(prev, value)) {
          return value;
        }
        return prev;
      });
    },
    [], // 의존성 없음: 항상 같은 함수
  );

  return [state, setStateWithShallowCompare];
};
