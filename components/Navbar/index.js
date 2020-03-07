import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
        <Link className="navbar-brand" to="/">
            FMX
        </Link>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={
                      window.location.pathname === "/" || window.location.pathname === "/home"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                  >
                    Sign Up
                  </Link>
                </li>
            </ul>

            <a class="navbar-brand" href="#"><img src="https://img.icons8.com/ios/50/000000/xbox-x.png"></img>FMX</a>
    
            <form class="form-inline" action="/action_page.php">
                <input class="form-control mr-sm-2" type="text" placeholder="Search"></input>
                <button class="btn btn-success" type="submit">Search</button>
  
            </form>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
  
                  
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Sign Up <span class="sr-only"></span></a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Log In <span class="sr-only"></span></a>
                  </li>
  
                </ul>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
