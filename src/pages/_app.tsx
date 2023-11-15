import '../globals.css';

type AppProps = {
  Component: React.ComponentType<any>;
  pageProps: any;
};

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default MyApp;