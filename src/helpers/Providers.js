import ModelProvider from "../context/providers/ModelProvider";
import NavProvider from "../context/providers/NavProvider";
import NewsProvider from "../context/providers/NewsProvider";
import MoviesProvider from "../context/providers/MoviesProvider";
import SharedProvider from "../context/providers/SharedProvider";
import {HelmetProvider} from "react-helmet-async";

const Providers = () => {
  return (
    <ModelProvider>
      <NavProvider>
        <NewsProvider>
          <MoviesProvider>
            <SharedProvider>
              <HelmetProvider>
              </HelmetProvider>
            </SharedProvider>
          </MoviesProvider>
        </NewsProvider>
      </NavProvider>
    </ModelProvider>
  );
}

export default Providers;
