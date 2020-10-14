import '../styles/globals.scss';

//import providers
import SectionMarginContext from '../src/contexts/SectionMarginContext';
import WindowWidthContext from '../src/contexts/WindowWidthContext';
import MainPageContext from '../src/contexts/MainPageContext'; 
import ProjectPageContext from '../src/contexts/ProjectPageContext'; 
import TitleStatusContext from '../src/contexts/TitleStatusContext';

function MyApp({ Component, pageProps }) {
  
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
