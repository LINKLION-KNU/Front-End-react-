import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import './MainPage.css';

const MainPage = () => (
  <div className="main-container">
    <Header />
    <div className="content">
      <div className="title-section">
        <h2>편식없는 정보,<br />다양한 시각</h2>
        <p>NEWSPECT를 통해 경험해볼까요?</p>
      </div>
      <SearchBar />
    </div>
  </div>
);

export default MainPage;
