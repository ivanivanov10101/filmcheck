import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Toggle from "./components/nav/Toggle";
import React, { Suspense, useState } from "react";
import Nav from "./components/nav/Nav";
import LoadingSpinner from "./components/shared/LoadingSpinner";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Films from "./pages/Films";
import FilmPage from "./pages/FilmPage";
import NewsEntry from "./components/news/NewsEntry";
import ThemeToggle from "./components/nav/ThemeToggle";
import Providers from "./helpers/Providers";
import Person from "./pages/Person";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode((modeToggle) => !modeToggle);
  }

  const queryClient = new QueryClient();
  return (
    <div
      className={`
                    ${darkMode ? "dark" : "light"}`}
    >
      <Router>
        <Suspense
          fallback={
            <div className="center">
              <LoadingSpinner />
            </div>
          }
        >
          <Providers>
            <QueryClientProvider client={queryClient}>
              <Toggle />
              <Nav>
                <ThemeToggle
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </Nav>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route path="/films" element={<Films />} />
                <Route path="/film/:id" element={<FilmPage />} />
                <Route path="/news/:id" element={<NewsEntry />} />
                <Route path="/person/:id" element={<Person />} />
              </Routes>
            </QueryClientProvider>
          </Providers>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
