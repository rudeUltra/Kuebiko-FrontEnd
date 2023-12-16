import React from "react";
import Navigation from "./header";
import Central from "./central";
import { Col, Row } from "reactstrap";
import Carousel from 'react-bootstrap/Carousel';
import "./stylesAnish.css";
import "./styles.css";
// import "./index";

function Top({ isLoggedIn, user }) {
  const backImage = {
    backgroundImage: "url(/assets/images/bp.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    paddingBottom: "10%"
  };

  // const fullScreen = {
  //     height: "100%"
  // };

  return (
    <div className="container" style={backImage}>
      <Navigation isLoggedIn={isLoggedIn} user={user} />
      <Central />
    </div>
  );
}

function Interest() {

  return (
    <div className="container next">
      <Row>
        <Col lg="4" className="weekly">
          <h3>Weekly Updates</h3>
          <Carousel>
            <Carousel.Item>
              <a href="/bookinfo"><img src="/assets/images/book.jpeg" className="d-block w-100" alt="First slide" /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/bookinfo"><img src="/assets/images/book2.jpeg" className="d-block w-100" alt="Second slide" /></a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/bookinfo"><img src="/assets/images/book4.jpeg" className="d-block w-100" alt="Third slide" /></a>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col lg="4" id="popular">
          <h2>Popular Right Now</h2>
          <div className="item">
            <a href="/bookinfo"><p>Book 1 Info</p></a>
          </div>
          <div className="item">
            <a href="/bookinfo"><p>Book 2 Info</p></a>
          </div>
          <div className="item">
            <a href="/bookinfo"><p>Book 3 Info</p></a>
          </div>
        </Col>
      </Row>
    </div>
  );
}

function Book(params) {
  return (
    <section className="py-6 flix-parents">
      <div className="flickfeed video-list-slider pl-5">
        <article className="card" style={{ backgroundImage: params.img }}>
          {/* "url('/assets/images/cover1.jpg')" */}
          <div className="back p-4 d-flex flex-column justify-content-end">
            <h1 className="h4">{params.name}</h1>
            <p className="Episode">{params.episode}</p>
            <button className="more" />
          </div>
        </article>
      </div>
    </section>
  );
}

function BookPan() {
  return (
    <React.Fragment>
      <Book img="url('/assets/images/cover1.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
      <Book img="url('/assets/images/cover2.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
      <Book img="url('/assets/images/cover3.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
      <Book img="url('/assets/images/cover4.jpg')" name="Sword Art Online" episode="Chapter 1 'Getting Started'" />
    </React.Fragment>

  );
}

function Landing({ isLoggedIn, user }) {


  return (
    <React.Fragment>
      <Top isLoggedIn={isLoggedIn} user={user} />
      <Interest />
      {/* <BookPan /> */}
    </React.Fragment>
  );
}

export default Landing;

