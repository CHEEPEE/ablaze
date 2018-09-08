class Dashbaord extends React.Component {
  state = {};
  logout(){
      logout();
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light shadow bg-white">
          <a className="navbar-brand" href="#">
            ABLAZE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="dropdown">
                <a
                  className="btn btn-none pr-3 dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                 User email
                </a>

                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" onClick = {this.logout.bind(this)} href="#">
                    Log out
                  </a>
                
                </div>
              </div>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
