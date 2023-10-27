import { PropsWithChildren, Fragment } from 'react';

import { Header } from '@/components/Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
