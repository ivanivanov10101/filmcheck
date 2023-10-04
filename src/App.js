import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Toggle from "./components/Toggle";
import React, {Suspense, useState} from "react";
import Nav from "./components/Nav";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Films from "./pages/Films";
import MovieList from "./pages/MovieList";
import NewsEntry from "./components/news/NewsEntry";
import ThemeToggle from "./components/ThemeToggle";
import Providers from "./helpers/Providers";

function App() {
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(modeToggle => !modeToggle)
  }
  return (
    <div className={`
                    ${darkMode ? "dark" : "light"}`}
    >
    <Router>
      <Suspense fallback={<div className="center"><LoadingSpinner/></div>}>
        <Providers>
          <Toggle/>
            <Nav>
            <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
              </Nav>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route exact path='/profile' element={<Profile/>}/>
                  <Route path='/films' element={<Films/>}/>
                  <Route path='/film/:id' element={<MovieList/>}/>
                  <Route path='/news/:id' element={<NewsEntry/>}/>
                </Routes>
        </Providers>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
