import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
  <div className="search-container">
    <div className="search-tabs-bar">
      <div className="search-tabs">
        <button className="tab active">통합 검색</button>
        <button className="tab">분류 검색</button>
      </div>
      <div className="search-bar">
        <div className="search-icon">🔍</div>
        <input type="text" placeholder="주제를 입력해주세요." />
        <button className="search-button">검색</button>
      </div>
    </div>
  </div>
);

export default SearchBar;
