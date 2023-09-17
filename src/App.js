import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ModelProvider from "./context/providers/ModelProvider";

import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import MoviesProvider from "./context/providers/MoviesProvider";
import NewsProvider from "./context/providers/NewsProvider";
import React,{ Suspense } from "react";
import Nav from "./components/Nav";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import SharedProvider from "./context/providers/SharedProvider";

const Home = React.lazy(() => import('./pages/Home'));
const MovieEntry = React.lazy(() => import('./pages/MovieEntry'));
const NewsEntry = React.lazy(() => import('./components/news/NewsEntry'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Films = React.lazy(() => import('./pages/Films'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="center"><LoadingSpinner/></div>}>
        <ModelProvider>
          <NavProvider>
            <NewsProvider>
              <MoviesProvider>
                <SharedProvider>
                  <Toggle/>
                  <Nav/>
                  <HelmetProvider>
                    <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route exact path='/profile' element={<Profile/>}/>
                      <Route path='/films' element={<Films/>}/>
                      <Route path='/film/:id' element={<MovieEntry/>}/>
                      <Route path='/news/:id' element={<NewsEntry/>}/>
                    </Routes>
                  </HelmetProvider>
                </SharedProvider>
              </MoviesProvider>
            </NewsProvider>
          </NavProvider>
        </ModelProvider>
      </Suspense>
    </Router>
  );
}

export default App;
