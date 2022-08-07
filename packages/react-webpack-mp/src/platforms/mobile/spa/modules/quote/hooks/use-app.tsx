import { useState, SetStateAction, Dispatch } from 'react';

interface IUseApp {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export function useApp(): IUseApp {
  const [count, setCount] = useState<number>(1);

  return {
    count,
    setCount,
  };
}
