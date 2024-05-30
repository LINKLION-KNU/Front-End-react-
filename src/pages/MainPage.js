import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import './MainPage.css';
import arrowIcon from '../assets/arrow-down.png'; 
import logoImage from '../assets/logo.png'; 

const MainPage = () => {
  const scrollToDescription = () => {
    document.getElementById('description-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <div className="title-section">
          <h2>편식없는 정보,<br />다양한 시각</h2>
          <p>NEWSPECT를 통해 경험해볼까요?</p>
        </div>
        <SearchBar />
        <div className="scroll-down" onClick={scrollToDescription}>
          <div className="scroll-text">NEWPECT 자세히 알아보기</div>
          <img src={arrowIcon} alt="화살표 아이콘" className="scroll-arrow" />
        </div>
      </div>
      <div id="description-section" className="description-section">
        <div className="logo">
          <img src={logoImage} alt="뉴스펙트 로고" />
        </div>
        <div className="text">
          <p>
            NEWSPECT는 News + Inspect와 결합되어,<br />
            "뉴스를 다양한 관점에서 검토한다"는 의미를 담고 있어요.<br />
            편향된 정보는 제공하지 않는 것이 저희 서비스의 목표입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
