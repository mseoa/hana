import { useEffect, useState } from 'react';

const ABORT_REASON = 'My useFetch Clean-up';
/**
 * 싱글톤: 변수나 객체가 앱 전체에서 단 하나의 인스턴스로 공유되는 패턴입니다.
코드에서 cache가 컴포넌트 함수 바깥에 선언되어 있기 때문에 모든 useFetch 훅에서 하나의 cache 객체만 사용하게 됩니다. 이 방식은 싱글톤 패턴을 따릅니다.
 */
const cache: Record<string, unknown> = {};

interface ErrorWithMessage {
  message: string;
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage =>
  typeof error === 'object' &&
  error !== null &&
  'message' in error &&
  typeof error.message === 'string';

const toErrorWithMessage = (error: unknown) =>
  isErrorWithMessage(error) ? error : new Error(JSON.stringify(error));

//url이 바뀌어도 한번만 실행되게 하기위해서 url을 depArr로 설정 안함
export const useFetch = <T>(
  url: string,
  isCache: boolean = false,
  depArr: unknown[] = []
) => {
  const [result, setResult] = useState<T>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorWithMessage>();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    /**
     * useEffect 내에서 비동기 함수 호출이 필요하기 때문입니다.
     * 데이터를 빠르게 가져와야 하는 경우, 컴포넌트가 렌더링되자마자 비동기 작업이 즉시 실행되도록 해야 합니다.
     * 즉시 실행 함수를 사용하지 않으면 데이터를 가져오는 함수가 정의만 되고, 호출되지 않아서 데이터를 받지 못하게 될 수 있음
     */
    (async function () {
      try {
        if (isCache && url in cache) return setResult(cache[url] as T);
        setLoading(true);
        const data = (await fetch(url, { signal }).then((res) => {
          if (res.ok) return res.json();
          else throw new Error(`${res.status} ${res.statusText}`);
        })) as T;
        // console.log('data~~~~~~~', data);
        setResult(data);
        setError(undefined);
        if (isCache) cache[url] = data;
        // console.log('cache>>>>', cache);
        // console.log('useFetch data>>>>', data);
      } catch (error) {
        if (error && String(error) !== ABORT_REASON) {
          console.error('useFetch error>>>>', error);
          setError(toErrorWithMessage(error));
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      abortController.abort(ABORT_REASON);
    };
  }, depArr);
  return { data: result, isLoading, error };
};
