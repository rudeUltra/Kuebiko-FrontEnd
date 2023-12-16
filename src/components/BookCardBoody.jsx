import React from "react";
import { Link, useHistory } from 'react-router-dom';
// import { useHistory } from "react-router";s
import "./CardStyles.css";

function BookCardComp({setBookName}) {

  const history = useHistory();

  // const [changeToReader, setChangeToReader] = useState(false);

  const handleClick = (bookName) => {
    setBookName(bookName, () => {
      history.push("/reader");
    });
  }
  const containerStyle = {
  
    backgroundColor: '#0093E9',
backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'


    /* Add other styles as needed */
  };

  return (
    <div className="container" data-aos="fade-up"  >
      <div className="row align-items-center text-center mt-5 ml-3 mr-3">
        <div className="col-md-4">
          <div className="card text-center">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375156317l/18270118.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">Insignia</h5>
              <p className="card-text">
              Mordred gets her revenge and gets back to her lover and they sail over to moon1234.
              </p>
              <button onClick={() => handleClick("Insignia")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/91EVnJvVTjL.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">Crooked Kingdom</h5>
              <p className="card-text">
              A dark and omnious creature rises from the deaths of hell to take over the world
              </p>
              <button onClick={() => handleClick("Crooked Kingdom")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://cdn.kobo.com/book-images/6701ad1a-fc89-4421-8e3f-79c36187d331/1200/1200/False/a-game-of-thrones-the-story-continues-books-1-5-a-game-of-thrones-a-clash-of-kings-a-storm-of-swords-a-feast-for-crows-a-dance-with-dragons-a-song-of-ice-and-fire.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">Game of Thrones</h5>
              <p className="card-text">
              Tale of love and war that grows iminent over time. The tale of betrayal and survival
              </p>
              <button onClick={() => handleClick("Game of Thrones")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center text-center mt-5 ml-3 mr-3">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590598478l/53174067.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">Skyhunter</h5>
              <p className="card-text">
              A youth seeks for a redemption of his past deed and seeks to travel.
              </p>
              <button onClick={() => handleClick("Skyhunter")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539302358l/42281998._SY475_.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">Unrelenting Tide</h5>
              <p className="card-text">
              Kid with spcial powers fights otherworldly creatures to save his planet from horrible fate.
              </p>
              <button onClick={() => handleClick("Unrelenting Tide")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81QSVDBGkEL.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">The Empress</h5>
              <p className="card-text">
              Rise of the queen. Over decades of being deprived of her title marie finally gets back her throne.
              </p>
              <button onClick={() => handleClick("The Empress")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center text-center mt-5 ml-3 mr-3">
        
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://i.pinimg.com/originals/5c/e8/3d/5ce83d9e0445f4e1c3e9af399d5e185d.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">"एक "सूखा " गुलाब"</h5>
              <p className="card-text">
              यही तो मैं उस से कहती हूं पर वह मानता ही नहीं. कहता है, अगर यह सब सच नहीं होता तो आर्थिक मंदी अभी…
              </p>
              <button onClick={() => handleClick("एक \"सूखा \" गुलाब")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://i.pinimg.com/originals/5c/e8/3d/5ce83d9e0445f4e1c3e9af399d5e185d.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">大ハズレだと追放された転生重騎士...</h5>
              <p className="card-text">
              じゅ……重騎士だと！？　どういうことだ！　
              〈ステータス〉が軒並み低い上に、！
              </p>
              <button onClick={() => handleClick("大ハズレだと追放された転生重騎士はゲーム知識で無双する")} className="btn btn1 btn-primary">
                Read
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img
              src="https://i.pinimg.com/originals/5c/e8/3d/5ce83d9e0445f4e1c3e9af399d5e185d.jpg"
              className="card-img-top cardImage"
              style= {{maxHeight: "250px"}}
              alt="..."
            />
            <div className="card-body cardBody">
              <h5 className="card-title">All Books</h5>
              <p className="card-text">
                All the books present on the site.
              </p>
              <p> .</p>
              <Link to="/allbooks" className="btn btn1 btn-primary">
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCardComp;
