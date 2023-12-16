<Switch>
<Route exact path='/' component={() => (
    <div>
        {/* <Landing handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} /> */}
        <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
        <Browse />

    </div>
)} />
<Route path='/reader' component={() => (
    <div>
        {console.log(bookname)}
        <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
        <Reader bookName={bookname} />
    </div>
)} />
<Route exact path='/login' component={() => (
    <Login handleChangeInLogin={handleChange} />
)} />
<Route exact path="/bookinfo">
    <Redirect push to={'/reader'} />
</Route>
<Route exact path="/createBook" component={() => (
    <div style={{backgroundColor:"rgb(191, 255, 240)",paddingBottom:"10px"}}>
        <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
        <CreateBook Author={user} />
        <CreateChapter Author={user} />
    </div>
)} />
<Route exact path="/createChapter" component={() => (
    <div>
        <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
        <CreateChapter Author={user} />
    </div>
)} />
<Route exact path="/browse" component={() => (
    <div>
        <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
        <Browse />
    </div>
)} />
<Route path="/cards" component={() => (
    <div>
        <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
        <BookCardComp setBookName={setBookName} />
    </div>
)} />
<Route exact path="/logout" >
    {/* {setLogOut(true)} */}
    <Redirect push to="/" />
</Route>
<Route exact path="/allbooks" component={() => (
    <div>
        <Navbar handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} />
        <AllBooks setBookName={setBookName} />
    </div>
)} />
<Route exact path="/success" component={() => (
    <h1>Successful</h1>
)} />
<Route exact path="/fail" component={() => (
    <h1>Failure</h1>
)} />
</Switch>