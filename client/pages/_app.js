import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

// function MyApp({ Component, pageProps: {...pageProps}}) {
//     return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
