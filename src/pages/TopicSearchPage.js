import React from 'react';
import Header from '../components/Header';
import './TopicSearchPage.css';
import SearchBar from '../components/SearchBar';

const TopicSearchPage = () => {
  return (
    <div className="topic-search-page">
      <Header />
      <div className="search-section">
        <h2>주제를 검색해보세요</h2>
        <SearchBar />
      </div>
    </div>
  );
};

export default TopicSearchPage;
