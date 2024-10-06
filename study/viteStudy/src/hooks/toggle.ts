import { useState } from 'react';

export default function useToggle(defaultValue: boolean = false) {
  const [state, setState] = useState(defaultValue);
  const toggle = (forceState?: unknown) => {
    typeof forceState == 'boolean' ? forceState : setState((pre) => !pre);
  };

  return [state, toggle] as const; // as const는 tuple을 의미함
}
