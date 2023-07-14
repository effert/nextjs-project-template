'use client';
import { SWRConfig } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function SwrConfigProvider({ children }: { children: any }) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
}
