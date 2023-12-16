import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Feature from "./Feature";
import "./styles.css";
import { Link } from "react-router-dom";

function Body({ isLoggedIn, user, handleLogOut }) {
  return (
    <div className="gege" > 
    
      <section id="section-0">
        <Navbar
          handleLogOut={handleLogOut}
          isLoggedIn={isLoggedIn}
          user={user}
        />
        <Header />
      </section>
      <section id="section-1" className="text-center">
        <h2
          class="mb-5 font-weight-bold text-white popular-text"
          data-aos="fade-up"
        >
        
          POPULAR RIGHT NOW
        </h2>

        <div class="row mt-5 ml-3 mr-3" data-aos="fade-up">
          <Link
            to="/cards"
            style={{ textDecoration: "none" }}
            class="col-md-4 main-page-card "
          >
            <div class="view overlay z-depth-1-half">
              <img
                style={{ width: "50%", maxHeight: "500px" }}
                src="https://images-na.ssl-images-amazon.com/images/I/81QSVDBGkEL.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">The Empress</h4>
            <p class="text-white fs-3">
              Rise of the queen. Over decades of being deprived of her title
              marie finally gets back her throne.
            </p>
          </Link>

          <Link
            to="/cards"
            style={{ textDecoration: "none" }}
            class="col-md-4 main-page-card "
          >
            <div class="view overlay z-depth-1-half">
              <img
                style={{ width: "50%", maxHeight: "500px" }}
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539302358l/42281998._SY475_.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Unrelenting Tide</h4>
            <p class="text-white fs-3">
              Kid with spcial powers fights otherworldly creatures to save his
              planet from horrible fate.
            </p>
          </Link>

          <Link
            to="/cards"
            style={{ textDecoration: "none" }}
            class="col-md-4 main-page-card "
          >
            <div class="view overlay z-depth-1-half">
              <img
                style={{ width: "50%", maxHeight: "500px" }}
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590598478l/53174067.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Skyhunter</h4>
            <p class="text-white fs-3">
              A youth seeks for a redemption of his past deed and seeks to
              travel.
            </p>
          </Link>
        </div>

        <div class="row mt-5 ml-3 mr-3" data-aos="fade-up">
          <Link
            to="/cards"
            style={{ textDecoration: "none" }}
            class="col-md-4 main-page-card "
          >
            <div class="view overlay z-depth-1-half">
              <img
                style={{ width: "50%", maxHeight: "500px" }}
                src="https://cdn.kobo.com/book-images/6701ad1a-fc89-4421-8e3f-79c36187d331/1200/1200/False/a-game-of-thrones-the-story-continues-books-1-5-a-game-of-thrones-a-clash-of-kings-a-storm-of-swords-a-feast-for-crows-a-dance-with-dragons-a-song-of-ice-and-fire.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Game of Thrones</h4>
            <p class="text-white fs-3">
              Tale of love and war that grows iminent over time. The tale of
              betrayal and survival
            </p>
          </Link>

          <Link
            to="/cards"
            style={{ textDecoration: "none" }}
            class="col-md-4 main-page-card "
          >
            <div class="view overlay z-depth-1-half">
              <img
                style={{ width: "50%", maxHeight: "500px" }}
                src="https://images-na.ssl-images-amazon.com/images/I/91EVnJvVTjL.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Crooked Kingdom</h4>
            <p class="text-white fs-3">
              A dark and omnious creature rises from the deaths of hell to take
              over the world
            </p>
          </Link>

          <Link
            to="/cards"
            style={{ textDecoration: "none" }}
            class="col-md-4 main-page-card "
          >
            <div class="view overlay z-depth-1-half">
              <img
                style={{ width: "50%", maxHeight: "500px" }}
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375156317l/18270118.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="mask rgba-white-slight"></div>
            </div>

            <h4 class="my-4 font-weight-bold text-white">Insignia</h4>
            <p class="text-white fs-3">
              Mordred gets her revenge and gets back to her lover and they sail
              over to moon.
            </p>
          </Link>
        </div>
      </section>
      <section id="section-2">
        <Feature />
      </section>
      {/* <svg class="wave-top" width="100%" viewBox="0 0 1200 250">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V-8.5451e-06H1150C1100 -8.5451e-06 1000 -8.5451e-06 900 -8.5451e-06C800 -8.5451e-06 700 -8.5451e-06 600 -8.5451e-06C500 -8.5451e-06 400 -8.5451e-06 300 -8.5451e-06C200 -8.5451e-06 100 -8.5451e-06 50 -8.5451e-06H0V108.306Z"
          fill="#0099FF"
        />
      </svg> */}
    </div>
  );
}

export default Body;
