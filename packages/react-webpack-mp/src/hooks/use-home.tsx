import { useState } from 'react';

export interface IUseHome {
  localState: any;
  setLocalState: (number) => any;
  sourceText: string;
}

export interface IUseHomeProps {
  platform?: 'mobile-native' | 'mobile-browser' | 'pc-native' | 'pc-browser';
}

export default function useHome(props: IUseHomeProps = {}): IUseHome {
  const { platform = 'unknown' } = props;
  const [localState, setLocalState] = useState<number>(performance.now());

  return {
    sourceText: `The platform is ${platform}`,
    localState,
    setLocalState,
  };
}
