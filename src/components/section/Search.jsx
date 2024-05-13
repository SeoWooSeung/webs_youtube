import React from "react";

const Search = () => {
  return (
    <div id="search">
      <div className="search___inner">
        <label>
          <span className="ir">검색</span>
        </label>
        <input
          type="search"
          name="searchinput"
          id="searchInput"
          autoComplete="off"
          className="search__input"
          placeholder="검색어를 입력해주세요"
        />
      </div>
    </div>
  );
};

export default Search;
