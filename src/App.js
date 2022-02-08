import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import News from "./components/News";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="router">
          <Routes>
            <Route exact path="/" element={<News />} />
            <Route path="/news/bbb" element={<News title="BBB 22" />} />
            <Route
              path="/news/tecnologia"
              element={<News title="Tecnologia" />}
            />
            <Route path="/news/ciencia" element={<News title="Ciência" />} />
            <Route path="/news/saude" element={<News title="Saúde" />} />
            <Route path="/news/esporte" element={<News title="Música" />} />
            <Route path="/news/politica" element={<News title="Política" />} />
            <Route path="/news/educacao" element={<News title="Educação" />} />
            <Route path="/news/economia" element={<News title="Economia" />} />
            <Route path="/news/musica" element={<News title="Música" />} />
            <Route path="/news/anime" element={<News title="Animes" />} />
          </Routes>
        </div>

        <div className="footer">
          <div className="footer__social">
            <a href="https://github.com/gabomoreira" target="_blank">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/gabrielmoreiradev"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
          <p>Criado por Gabriel Moreira</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
