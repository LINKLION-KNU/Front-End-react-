import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import loginIcon from '../assets/login-icon.png';

const Header = () => {
  const location = useLocation();
  const isSearchOrMyPage = location.pathname === '/search' || location.pathname === '/my';

  return (
    <header className={`header ${isSearchOrMyPage ? 'header-alt' : ''}`}>
      <div className="logo">
        <h1>NEWSPECT</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>메인페이지</Link></li>
          <li><Link to="/search" className={location.pathname === '/search' ? 'active' : ''}>주제검색</Link></li>
          <li><Link to="/my" className={location.pathname === '/my' ? 'active' : ''}>마이스크랩</Link></li>
        </ul>
      </nav>
      <div className="login">
        <Link to="/login">
          <img src={loginIcon} alt="로그인 아이콘" className="login-icon" /> 로그인
        </Link>
      </div>
      {isSearchOrMyPage && <div className="nav-bar"></div>}
    </header>
  );
};

export default Header;
