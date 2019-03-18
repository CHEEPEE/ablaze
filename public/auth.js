class Login extends React.Component {
  state = {};
  login() {
    login();
  }
  resetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail("ablazebh@gmail.com")
      .then(function() {
        // Email sent.
        alert("Password Reset Email Sent");
      })
      .catch(function(error) {
        // An error happened.
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="row h-75 d-flex align-items-center justify-content-center">
          <div className="w-25 bg-white p-5 shadow">
            <div className="row">
              <h3 className="text-primary">Boarding House Management System</h3>
              <small className="font-weight-bold mt-3 mb-3">Login User</small>
            </div>
            <div className="row">
              <div class="form-group w-100">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="row">
              <div class="form-group w-100">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row">
              <button
                type="button"
                onClick={this.login.bind(this)}
                class="btn btn-dark w-100"
              >
                Login
              </button>
            </div>
            <div className="row mt-3">
              <small>
                Forgot Password?{" "}
                <a
                  className="text-info"
                  href="#"
                  onClick={() => this.resetPassword()}
                >
                  Reset Password
                </a>
              </small>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
