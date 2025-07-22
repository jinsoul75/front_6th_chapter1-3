import { type FunctionComponent, type ReactElement } from "react";
import { shallowEquals } from "../equals";
import { useRef } from "../hooks";

export function memo<P extends object>(Component: FunctionComponent<P>, equals = shallowEquals) {
  const MemoizedComponent: FunctionComponent<P> = (props) => {
    // 1. 이전 props를 저장할 ref 생성
    const prevPropsRef = useRef<P | null>(null);
    // 2. 메모이제이션된 컴포넌트 생성
    const memoizedResultRef = useRef<ReactElement | null>(null);

    // 3. equals 함수를 사용하여 props 비교
    if (prevPropsRef.current === null || !equals(prevPropsRef.current, props)) {
      // props가 바뀌었으니 새로 렌더링
      memoizedResultRef.current = <Component {...props} />;
    }
    prevPropsRef.current = props;

    // 4. props가 변경된 경우에만 새로운 렌더링 수행
    return memoizedResultRef.current;
  };

  return MemoizedComponent;
}
