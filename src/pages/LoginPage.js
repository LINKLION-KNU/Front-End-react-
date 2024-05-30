import React from 'react';
import Header from '../components/Header';
import './LoginPage.css';
import googleLogo from '../assets/google-logo.png';
import kakaoLogo from '../assets/kakao-logo.png'; 
import appleLogo from '../assets/apple-logo.png'; 

const LoginPage = () => {
  return (
    <div className="login-page">
      <Header />
      <div className="login-content">
        <div className="login-header">
          <h1>NEWSPECT</h1>
          <p>로그인을 해야 서비스를 이용할 수 있어요.</p>
        </div>
        <div className="login-buttons">
          <button className="login-button google">
            <img src={googleLogo} alt="Google" />
            구글로 로그인하기
          </button>
          <button className="login-button kakao">
            <img src={kakaoLogo} alt="Kakao" />
            카카오로 로그인하기
          </button>
          <button className="login-button apple">
            <img src={appleLogo} alt="Apple" />
            애플로 로그인하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
