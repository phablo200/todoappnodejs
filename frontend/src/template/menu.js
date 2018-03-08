import React from 'react';


export default props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/todos"><span>Tarefas</span></a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/about"><span>Sobre</span></a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </div>
</nav>
);
