import React, { useEffect, useState } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import Reader from "./Reader/reader";
import { Switch, Route, Redirect } from 'react-router-dom';
import CreateBook from './Writer/createBook';
import Login from './Login/login';
import CreateChapter from './Writer/createChapter';
import Footer from './footer';
import { Landing } from "./Landing";
import { Browse } from "./Browsing-page";
import Navbar from "./Browsing-page/Navbar";
import BookCardComp from "./BookCardBoody";
import AllBooks from './AllBooks';

// https://kuebiko-backend.netlify.app/.netlify/functions/api


function Main() {
    const containerStyle = {
  
        backgroundColor: '#0093E9',
    backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'
    
    
        /* Add other styles as needed */
      };

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");
    const [bookname, setBookName] = useStateWithCallbackLazy("");
    const [logout, setLogOut] = useState(false);

    const handleChange = (username) => {
        setLoggedIn(true);
        setUser(username);
    }

    const handleLogOut = () => {
        setLogOut(true);
    }

    useEffect(() => {
        if (logout) {
            localStorage.removeItem("user");
            setLoggedIn(false);
            setUser("");
        }
    }, [logout]);

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.setItem("user", user);
        } else {
            if (localStorage.getItem("user")) {
                setLoggedIn(true);
                setUser(localStorage.getItem("user"));
            }
        }
    }, [isLoggedIn, user]);

    return (
        <React.Fragment>
       
        <Switch>
        <Route  exact path="/">
          <div style={{overflow:'hidden'}}>
            <Landing handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
            <Browse />
            <Footer/>
          </div>
        </Route>
  
        <Route  path="/reader">
          <div>
            {console.log(bookname)}
            <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
            <Reader bookName={bookname} />
          </div>
        </Route>
  
        <Route  exact path="/login">
          <Login handleChangeInLogin={handleChange} />
        </Route>
  
        <Route  exact path="/bookinfo">
          <Redirect push to="/reader" />
        </Route>
  
        <Route  exact path="/createBook">
          <div style={containerStyle}>
            <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
            <CreateBook Author={user} />
            <CreateChapter Author={user} />
            <Footer/>
            
          </div>
        </Route>
  
        <Route  exact path="/createChapter">
          <div>
            <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
            <CreateChapter Author={user} />
            <Footer/>
          </div>
        </Route>
  
        <Route  exact path="/browse">
          <div>
            <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
            <Browse />
            <Footer/>
          </div>
        </Route>
  
        <Route  exact path="/cards">
          <div style={containerStyle}>
            <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
            <BookCardComp setBookName={setBookName} />
            <Footer/>
          </div>
        </Route>
  
        <Route  exact path="/logout">
          {/* {setLogOut(true)} */}
          <Redirect push to="/" />
        </Route>
  
        <Route exact path="/allbooks">
          <div>
            <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
            <AllBooks setBookName={setBookName} />
            
          </div>
        </Route>

        
  
        <Route  exact path="/success">
          <h1>Successful</h1>
        </Route>
  
        <Route  exact path="/fail">
          <h1>Failure</h1>
        </Route>
        
      </Switch>
      
      </React.Fragment>
      
    )

}

export default Main;







