import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ModelProvider from "./context/providers/ModelProvider";

import NavProvider from "./context/providers/NavProvider";
import Toggle from "./components/Toggle";
import MoviesProvider from "./context/providers/MoviesProvider";
import NewsProvider from "./context/providers/NewsProvider";
import React, {Suspense, useState} from "react";
import Nav from "./components/Nav";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import SharedProvider from "./context/providers/SharedProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Films from "./pages/Films";
import MovieEntry from "./pages/MovieEntry";
import NewsEntry from "./components/news/NewsEntry";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className={`
                    ${darkMode ? "dark" : "light"}`}
    >
    <Router>
      <Suspense fallback={<div className="center"><LoadingSpinner/></div>}>
        <ModelProvider>
          <NavProvider>
            <NewsProvider>
              <MoviesProvider>
                <SharedProvider>
                  <HelmetProvider>
                  <Toggle/>
                  <Nav>
                    <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                  </Nav>
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
    </div>
  );
}

export default App;
