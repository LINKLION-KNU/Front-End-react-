import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import TopicSearchPage from './pages/TopicSearchPage';
import MyScrapPage from './pages/MyScrapPage';
import './App.css';
import './transitions.css';

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<TopicSearchPage />} />
          <Route path="/my" element={<MyScrapPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
