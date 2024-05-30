import React from 'react';
import './Header.css';
import loginIcon from '../assets/login-icon.png'; 


const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>NEWSPECT</h1>
    </div>
    <nav className="nav">
      <ul>
        <li><a href="/" className="active">메인페이지</a></li>
        <li><a href="/search">주제검색</a></li>
        <li><a href="/my">마이스크랩</a></li>
      </ul>
    </nav>
    <div className="login">
      <a href="/login">
        <img src={loginIcon} alt="로그인 아이콘" className="login-icon" /> 로그인
      </a>
    </div>
  </header>
);

export default Header;
