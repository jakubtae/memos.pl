import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="navLeft">

          <a href="/">
            <h3>memos.pl</h3>
          </a>
        </div>
        <div className="navRight">
          <Link className="btn" to="/#jak">
            Jak to działa?
          </Link>
          <Link className="btn" to="/#oferta">
            Oferty
          </Link>
          <Link className="btn" to="/file-upload">
            Konto
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
