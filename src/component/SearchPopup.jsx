import React from "react";

const SearchPopup = () => {
  return (
    <div className="search-popup">
      <button className="close-search">
        <span className="flaticon-multiply">
          <i className="fal fa-times"></i>
        </span>
      </button>
      <form method="post" action="#">
        <div className="form-group">
          <input
            type="search"
            name="search-field"
            placeholder="Search Here"
            required
          />
          <button type="submit">
            <i className="fal fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPopup;
