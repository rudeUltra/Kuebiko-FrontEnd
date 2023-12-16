import { faBookOpen, faPen, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


import card1 from './6920933.jpg';
import card2 from './82250.jpg';
import card3 from './6736905.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./"
function Feature() {
  const containerStyle = {
  
    backgroundColor: '#0093E9',
backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'


    /* Add other styles as needed */
  };
  
  return ( 
    <React.Fragment>

    <h5 className="text-center text-white fs-1 pt-5">Features</h5>
    
    <div id="feature" className=" d-flex flex-wrap p-2 align-items-center justify-content-center text-white flex-row  pb-5 pt-5" >
    
      
    
      {/* Existing Features */}
      <div className="p-5 mt-4 mb-5">
        <div className="card bg-dark" style={{ width: '18rem',backgroundColor: '#0093E9',
backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)' }}>
          <img src={card1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <span className="glyphicon glyphicon-off"></span>
              <h4> <FontAwesomeIcon icon={faPen} /> Create</h4>
              <p>Create amazing books</p>
            </h5>
          </div>
        </div>
      </div>

      <div className="p-5 mt-4 mb-5">
        <div className="card bg-dark" style={{ width: '25rem',backgroundColor: '#0093E9',
backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)' }}>
          <img src={card2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <h4> <FontAwesomeIcon icon={faVolumeUp} /> Text to Speech</h4>
              <p>Listen to your books </p>
            </h5>
          </div>
        </div>
      </div>

      <div className="p-5 mt-5 mb-5">
        <div className="card bg-dark" style={{ width: '18rem',backgroundColor: '#0093E9',
backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)' }}>
          <img src={card3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              <span className="glyphicon glyphicon-lock"></span>
              <h4> <FontAwesomeIcon icon={faBookOpen} /> Read</h4>
              <p>Read amazing books</p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  
  </React.Fragment>
    
  );
}

export default Feature;



