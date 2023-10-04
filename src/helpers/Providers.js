import ModalProvider from "../context/providers/ModalProvider";
import NavProvider from "../context/providers/NavProvider";
import NewsProvider from "../context/providers/NewsProvider";
import MoviesProvider from "../context/providers/MoviesProvider";
import SharedProvider from "../context/providers/SharedProvider";
import {HelmetProvider} from "react-helmet-async";

const Providers = ({children}) => {
  return (
    <ModalProvider>
      <NavProvider>
        <NewsProvider>
          <MoviesProvider>
            <SharedProvider>
              <HelmetProvider>
                {children}
              </HelmetProvider>
            </SharedProvider>
          </MoviesProvider>
        </NewsProvider>
      </NavProvider>
    </ModalProvider>
  );
}

export default Providers;
