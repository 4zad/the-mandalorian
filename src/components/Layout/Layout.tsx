import { memo, PropsWithChildren, useCallback, useEffect } from 'react';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import Nav from '@/components/Nav/Nav';

import { checkWebpSupport } from '@/utils/basic-functions';

import { setIsWebpSupported, setPrevRoute, useAppDispatch } from '@/redux';

// const AppAdmin = dynamic(() => import('@/components/AppAdmin/AppAdmin'), { ssr: false });

export type Props = PropsWithChildren<{}>;

function Layout({ children }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRouteChange = useCallback(
    (url) => {
      if (router.asPath !== url) dispatch(setPrevRoute(router.asPath));
    },
    [dispatch, router.asPath]
  );

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, handleRouteChange]);

  useEffect(() => {
    checkWebpSupport('lossy', (isSupported) => dispatch(setIsWebpSupported(isSupported)));
  }, [dispatch]);

  return (
    <>
      <Nav />

      {children}

      {/* {process.env.NEXT_PUBLIC_ENVIRONMENT !== 'production' && <AppAdmin />} */}
    </>
  );
}

export default memo(Layout);
