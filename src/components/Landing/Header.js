import React from "react";
import girlImage from './girl.png';
import girlImage2 from "./73Z_2108.w023.n001.896B.p1.896.jpg";

export default function Header() {
  return (
    <header>
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-md-7 col-sm-12 text-white" data-aos="fade-right">
            <h1>Kuebiko</h1>
            <p>An inclusive novels reading and writing website</p>
          </div>
          <div class="col-md-5 col-sm-12 h-25" data-aos="fade-up">
          <img src={girlImage} style={{height:'60vh'}} alt="Book" />

          </div>
        </div>
      </div>
    </header>
  );
}
