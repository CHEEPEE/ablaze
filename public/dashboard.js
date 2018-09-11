class Dashbaord extends React.Component {
  state = {};
  logout() {
    logout();
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
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
                  className="btn btn-none text-white pr-3 dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  User email
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a
                    className="dropdown-item"
                    onClick={this.logout.bind(this)}
                    href="#"
                  >
                    Log out
                  </a>
                </div>
              </div>
            </form>
          </div>
        </nav>
        <div className="row h-100">
          <div className="col-2 h-100 pt-5">
            <div
              className="list-group bg-white pt-5 h-100"
              id="list-tab"
              role="tablist"
            >
              <h3 className="p-2 text-info">Contol Panel</h3>
              <a
                className="list-group-item border-0 rounded-0 list-group-item-action active"
                data-toggle="list"
                role="tab"
              >
                Boarding House
              </a>
              {/* <a
                className="list-group-item border-0 rounded-0 list-group-item-action"
                data-toggle="list"
                role="tab"
              >
                Manage Users
              </a>
              <a
                className="list-group-item border-0 rounded-0 list-group-item-action"
                data-toggle="list"
                role="tab"
              >
                Manage Report
              </a>
              <a
                className="list-group-item border-0 rounded-0  list-group-item-action"
                data-toggle="list"
                role="tab"
              >
                Settings
              </a> */}
            </div>
          </div>
          <div className="col-10 bg-white pt-5 shadow" id="mainContainer">
            <ManageBoardingHouse />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class ManageBoardingHouse extends React.Component {
  state = {};
  getBoardingHouses() {
    getBoardingHouses();
  }

  getActive() {
    getBoardingHouses("active");
  }
  getPending() {
    getBoardingHouses("pending");
  }
  getBlock() {
    getBoardingHouses("block");
  }
  componentDidMount() {
    this.getBoardingHouses();
    this.getNumber();
  }
  getNumber(){
    getNumber();
  }

  render() {
    return (
      <React.Fragment>
        <div className="row font-weight-light text-primary p-3 mt-5">
          <h3>Manage Boarding House</h3>
        </div>
        <div className="row p-3">
          <ul
            className="nav nav-pills mb-3 pb-2 w-100 border-bottom"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item pl-2 pr-2 m-2">
              <a
                onClick={this.getBoardingHouses.bind(this)}
                className="nav-link active"
                id="filterAll"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item ">
              <a
                onClick={this.getActive.bind(this)}
                className="nav-link pl-2 pr-2 btn-outline-success m-2"
                id="filterActive"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Active
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.getPending.bind(this)}
                className="nav-link pl-2 pr-2 btn-outline-warning m-2"
                id="filterPending"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Pending
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={this.getBlock.bind(this)}
                className="nav-link pl-2 pr-2 btn-outline-dark m-2"
                id="filterBlock"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Block List
              </a>
            </li>
          </ul>
        </div>
        <div className="row pl-3 pr-4">
          <div className="col">Name</div>
          <div className="col">Status</div>
          <div className="col">Owner</div>
          <div className="col">Address</div>
          <div className="col" />
        </div>
        <div className="row w-100">
          <div
            className="list-group p-3 w-100"
            id="boardingHouseListContainer"
          />
        </div>
      </React.Fragment>
    );
  }
}

class BoardingHouseItem extends React.Component {
  state = {
    statusColor: "",
    status: this.props.objData.status,
    objSnap:""
  };

  setToActive() {
    let sup = this;
    db.collection("houseProfiles")
      .doc(this.props.objData.userId)
      .update({
        status: "active"
      }).then(function(){
        sup.getBoardingHouses();
      })
  }
  setToPending() {
    let sup = this;
    db.collection("houseProfiles")
      .doc(this.props.objData.userId)
      .update({
        status: "pending"
      }).then(function(){
        sup.getBoardingHouses();
      })
  }
  setToBlock() {
    let sup = this;
    db.collection("houseProfiles")
      .doc(this.props.objData.userId)
      .update({
        status: "block"
      }).then(function(){
        sup.getBoardingHouses();
      })
  }
  getNumber(){
    getNumber();
  }
  onChangeSnap() {
    let sup = this;
    db.collection("houseProfiles")
      .doc(this.props.objData.userId)
      .onSnapshot(function(querySnapshot) {
        sup.setState({
          objSnap:querySnapshot.data()
         
        })
        sup.getNumber();
        sup.getcolor();
      });
      
  }
  getBoardingHouses(){
    if(this.props.status == "all"){
      getBoardingHouses();
    }else{
      getBoardingHouses(this.props.status);
    }
  }

  getcolor() {
    switch (this.state.objSnap.status) {
      case "pending":
        this.setState({
          statusColor: "warning"
        });
        break;
      case "active":
        this.setState({
          statusColor: "success"
        });
        break;
      case "block":
        this.setState({
          statusColor: "dark"
        });
        break;
    }
  }
  componentDidMount() {
    this.getcolor();
    this.onChangeSnap();
  }

  render() {
    return (
      <React.Fragment>
        <div className="list-group-item mt-2 list-group-item-action bg-light border-0 ">
          <div className="row">
            <div className="col">
              <h5 className="text-info">{this.state.objSnap.name}</h5>
            </div>
            <div className="col">
              <div className="dropdown">
                <button
                  className={
                    "btn text-white text-capitalize w-50 dropdown-toggle btn-" +
                    this.state.statusColor
                  }
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {this.state.objSnap.status}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a
                    onClick={this.setToActive.bind(this)}
                    className="dropdown-item"
                    href="#"
                  >
                    Active
                  </a>
                  <a
                    onClick={this.setToPending.bind(this)}
                    className="dropdown-item"
                    href="#"
                  >
                    Pending
                  </a>
                  <a
                    onClick={this.setToBlock.bind(this)}
                    className="dropdown-item"
                    href="#"
                  >
                    Blocklist
                  </a>
                </div>
              </div>
            </div>
            <div className="col">{this.state.objSnap.owner}</div>
            <div className="col">{this.state.objSnap.address}</div>
            <div className="col">
              <button type="button" className="btn btn-info btn-sm">
                View Details
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function getBoardingHouses(status) {
  if (status != null) {
    db.collection("houseProfiles")
      .where("status", "==", status)
      .get().then(function(querySnapshot) {
        var baordingHouse = [];
        querySnapshot.forEach(function(doc) {
          baordingHouse.push(doc.data());
        });
        var listItem = baordingHouse.map(object => (
          <BoardingHouseItem key={object.userId+status} status = {status} objData={object} />
        ));
        ReactDOM.render(
          <React.Fragment>{listItem}</React.Fragment>,
          document.querySelector("#boardingHouseListContainer")
        );
      });
  } else {
    db.collection("houseProfiles").get().then(function(querySnapshot) {
      var baordingHouse = [];
      querySnapshot.forEach(function(doc) {
        baordingHouse.push(doc.data());
      });
      var listItem = baordingHouse.map(object => (
        <BoardingHouseItem key={object.userId} status = "all" objData={object} />
      ));
      ReactDOM.render(
        <React.Fragment>{listItem}</React.Fragment>,
        document.querySelector("#boardingHouseListContainer")
      );
    });
  }
}

function getNumber(){
  db.collection("houseProfiles")
  .get().then(function(querySnapshot) {
    var all = 0;
    var active = 0;
    var pending = 0;
    var block = 0;
    querySnapshot.forEach(function(doc) {
      all++;
      if(doc.data().status == "active"){
        active++;
      }else if(doc.data().status == "pending"){
        pending++;
      }else if(doc.data().status == "block"){
        block++;
      }
    });

    ReactDOM.render(
      <React.Fragment>
        All <span className="ml-2 badge badge-primary text-primary bg-light shadow-sm">{all}</span>
      </React.Fragment>,
      document.querySelector("#filterAll")
    )
    ReactDOM.render(
      <React.Fragment>
        Active <span className="ml-2 badge badge-primary text-success bg-light shadow-sm ">{active}</span>
      </React.Fragment>,
      document.querySelector("#filterActive")
    )
    ReactDOM.render(
      <React.Fragment>
        Pending <span className="ml-2 badge badge-primary text-warning bg-light shadow-sm">{pending}</span>
      </React.Fragment>,
      document.querySelector("#filterPending")
    )
    ReactDOM.render(
      <React.Fragment>
        Blocklist <span className="ml-2 badge badge-primary text-dark bg-light shadow-sm">{block}</span>
      </React.Fragment>,
      document.querySelector("#filterBlock")
    )
   
  });
}
