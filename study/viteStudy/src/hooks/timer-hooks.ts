import exp from 'constants';
import { useCallback, useEffect, useRef } from 'react';

// export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   const cbRef = useRef(cb);
//   const argsRef = useRef(args);
//   const timerRef = useRef<ReturnType<typeof setTimeout>>();

//   const setup = useCallback(() => {
//     timerRef.current = setTimeout(cbRef.current, delay, ...argsRef.current);
//   }, [delay]);
//   const clear = useCallback(() => clearTimeout(timerRef.current), []);
//   const reset = useCallback(() => {
//     clear();
//     setup();
//   }, [clear, setup]);

//   useEffect(() => {
//     setup();
//     return clear;
//   }, [setup, clear]);

//   return { reset, clear };
// };

// export const useInterval = <
//   T extends (...args: Parameters<T>) => ReturnType<T>,
// >(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   const cbRef = useRef(cb);
//   const argsRef = useRef(args);
//   useEffect(() => {
//     const timer = setInterval(cbRef.current, delay, ...argsRef.current);
//     return () => clearInterval(timer);
//   }, [delay]);
// };

type TimerFn = typeof setTimeout | typeof setInterval;
type ClearFn = typeof clearTimeout | typeof clearInterval;

function useTimer<T extends (...args: Parameters<T>) => ReturnType<T>>(
  this: { timerFn: TimerFn; clearFn: ClearFn },
  cb: T,
  delay: number,
  ...args: Parameters<T>
) {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);
  const timerRef = useRef<ReturnType<typeof this.timerFn>>();

  const { timerFn, clearFn } = this; // this에 대한 혼선이 없어야하기때문에 콜백에서 this를 사용하지 않는다.
  const setup = useCallback(() => {
    timerRef.current = timerFn(cbRef.current, delay, ...argsRef.current);
  }, [delay, timerFn]);
  const clear = useCallback(() => clearFn(timerRef.current), [clearFn]);
  const reset = useCallback(() => {
    clear();
    setup();
  }, [clear, setup]);

  useEffect(() => {
    setup();
    return clear;
  }, [setup, clear]);

  return { reset, clear };
}

export const useTimeout = useTimer.bind({
  timerFn: setTimeout,
  clearFn: clearTimeout,
});
export const useInterval = useTimer.bind({
  timerFn: setInterval,
  clearFn: clearInterval,
});

export function useDebounce<T extends (...args: unknown[]) => ReturnType<T>>(
  cb: T,
  delay: number,
  depArr: unknown[] = []
) {
  const { reset, clear } = useTimeout(cb, delay);
  useEffect(() => {
    reset();
    return clear;
  }, [...depArr, delay]); // depArr이 변경되거나 delay가 변경되면 reset을 실행
  // 계속 치고만 있으면 reset이 실행되지 않음
}

export function useDebounceX<
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(cb: T, delay: number, depArr: unknown[] = []) {
  const cbRef = useRef(cb);
  const timerRef = useRef<ReturnType<typeof setTimeout> | number>();

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(cbRef.current, delay);

    return () => clearTimeout(timerRef.current);
  }, [...depArr, delay]);
}
