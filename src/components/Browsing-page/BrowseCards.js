import React from "react";

import { Link } from 'react-router-dom';

function BrowseCards() {
  return (
    <div class="container align-items-center">
      <h1 className="text-center ps-5 browseHeader">Browse</h1>
      <div class="row justify-content-md-center align-items-center">
        <div class="col-md-3 m-2 align-items-center item item1">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Scifi</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item2">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Thriller</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item3">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Horror</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item4">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Action</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item5">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Romance</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item6">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">History</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item7">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Comedy</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item8">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Autobiography</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item9">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Children</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item10">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Regional</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item11">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Crime</div>
</Link>
        </div>
        <div class="col-md-3 m-2 align-items-center item item12">
        <Link to="/cards" style={{ all: 'unset', cursor: 'pointer' }}>
  <div className="col itemcontent">Mystery</div>
</Link>
        </div>
      </div>
    </div>
  );
}

export default BrowseCards;
