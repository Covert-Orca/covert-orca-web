import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Product from './Products/Products';
import Home from './Home/Home';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  }
  
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  }
  
  return (
    <Router>
      <div className="grid-container">
        <head>
          <link rel="stylesheet" href="style.css" />
          <title>Jet Piranha</title>
        </head>
        <body>
          <div>
            <header className="header">
              <div className="brand">
                <button onClick = {openMenu}>&#9776; </button>
                <a href="index.html">Jet Piranha</a>
              </div> 
              <div className="header-links">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
              </div>
            </header>
            <aside className = "sidebar">
              <h3> Shopping Categories </h3>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
              <ul>
                <li>
                  <a href="index.html">Pants</a>
                </li>

                <li>
                  <a href="index.html">Shirts</a>
                </li>
              </ul>
            </aside>
            <main className="main">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/catalog">
                  <Product />
                </Route>
              </Switch>
            </main>
            <footer className="footer">
              <a href="index.html">&copy; 2021 Jet Piranha</a>
            </footer>
          </div>
        </body>
      </div>
    </Router>
  );
}

export default App;
