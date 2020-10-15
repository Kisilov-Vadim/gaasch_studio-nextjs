import '../styles/globals.scss';
import Router from "next/router";
import Loader from '../src/component/Loader/Loader';

//import providers
import SectionMarginContext from '../src/contexts/SectionMarginContext';
import WindowWidthContext from '../src/contexts/WindowWidthContext';
import MainPageContext from '../src/contexts/MainPageContext'; 
import ProjectPageContext from '../src/contexts/ProjectPageContext'; 
import TitleStatusContext from '../src/contexts/TitleStatusContext';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      console.log('start')
      setLoading(true);
    };
    const end = () => {
      console.log('end')
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  if (loading) {
    return (
      <Loader />
    )
  }
  
  return (
    <ProjectPageContext>
      <MainPageContext>
        <WindowWidthContext>
          <SectionMarginContext>
            <TitleStatusContext>
              <Component {...pageProps} />
            </TitleStatusContext>
          </SectionMarginContext>
        </WindowWidthContext>
      </MainPageContext>
    </ProjectPageContext>
  )
}

export default MyApp
