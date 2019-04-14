class Dashbaord extends React.Component {
  state = {
    user: firebase.auth().currentUser
  };

  renderRequrements() {
    renderRequirements();
  }

  renderDashBoard() {
    renderDashBoard();
  }

  renderBoardingHouseManagement() {
    ReactDOM.render(
      <ManageBoardingHouse />,
      document.querySelector("#mainContainer")
    );
  }

  logout() {
    logout();
  }
  renderPrints() {
    var win = window.open("printboardinghouselist.html");
    win.focus();
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
          <a className="navbar-brand" href="#">
            Boarding House Management System
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
            <ul className="navbar-nav mr-auto" />
            <form className="form-inline my-2 my-lg-0">
              <div className="dropdown">
                <a
                  className="btn btn-none text-white pr-3 dropdown-toggle"
                  href="#"
                  role="button"
                  id="userEmail"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {firebase.auth().currentUser.email}
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
          <div className="col-2" />

          <div className="col-2 position-fixed h-100 pt-5">
            <div
              className="list-group bg-white pt-5 h-100"
              id="list-tab"
              role="tablist"
            >
              <h3 className="p-2 text-info">Control Panel</h3>
              <a
                className="list-group-item border-0 rounded-0 list-group-item-action active"
                data-toggle="list"
                role="tab"
                onClick={this.renderBoardingHouseManagement.bind(this)}
              >
                Boarding House
              </a>
              <a
                className="list-group-item border-0 rounded-0 list-group-item-action"
                onClick={this.renderPrints.bind(this)}
              >
                Reports
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
          <div className="col-10 bg-white pt-5" id="mainContainer">
            <ManageBoardingHouse />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function renderDashBoard() {
  ReactDOM.render(<Dashbaord />, document.querySelector("#app"));
}

class ManageBoardingHouse extends React.Component {
  state = {};
  getBoardingHouses() {
    getBoardingHouses(null);
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
  getNumber() {
    getNumber();
  }
  getRequest() {
    getRequest();
  }

  render() {
    return (
      <React.Fragment>
        <div className="row font-weight-light text-primary p-3 mt-5">
          <div className="col">
            <h3>Manage Boarding House</h3>
          </div>
          <div className="col" />
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
            <li className="nav-item">
              <a
                onClick={this.getRequest.bind(this)}
                className="nav-link pl-2 pr-2 btn-outline-danger m-2"
                id="filterBlock"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Request
              </a>
            </li>
          </ul>
        </div>
        <div id="boardingHouseListContainer" />
      </React.Fragment>
    );
  }
}

function getRequest() {
  db.collection("changeNameRequest")
    .where("status", "==", false)
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });

      let baordingHouse = [];
      console.log(querySnapshot);
      querySnapshot.forEach(function(doc) {
        baordingHouse.push(doc.data());
      });
      var listItem = baordingHouse.map(object => (
        <RequestItem
          key={object.ownerAccountId}
          id={object.ownerAccountId}
          objData={object}
          newName={object.newName}
        />
      ));
      ReactDOM.render(
        <React.Fragment>{listItem}</React.Fragment>,
        document.querySelector("#boardingHouseListContainer")
      );
    })
    .catch(function(error) {
      console.log("Error getting documents: ", error);
    });
}
class RequestItem extends React.Component {
  state = { profile: {} };
  componentDidMount() {
    let sup = this;
    db.collection("houseProfiles")
      .doc(this.props.id)
      .onSnapshot(function(doc) {
        sup.setState({
          profile: doc.data()
        });
      });
  }

  confirmRequest = () => {
    let sup = this;
    if (confirm("Confirm name change?")) {
      db.collection("houseProfiles")
        .doc(this.props.id)
        .update({
          name: this.props.newName
        })
        .then(function(docRef) {
          console.log("name change Success");
          db.collection("changeNameRequest")
            .doc(sup.props.id)
            .update({
              status: true
            })
            .then(function() {
              getRequest();
            });
        });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="list-group-item mt-2 list-group-item-action bg-light border-0 ">
          <div className="row">
            <div className="col">
              <div className="row pt-1">
                <div className="col-auto text-primary font-weight-bold">
                  {this.state.profile.name}
                </div>
                <div classNamea="col-auto">to</div>
                <div className="col-auto text-success font-weight-bold">
                  {this.props.newName}
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-end">
              <button
                type="button"
                onClick={this.confirmRequest.bind(this)}
                className="btn mr-2 btn-small btn-success btn-sm"
              >
                Confirm Request
              </button>
              <button type="button" className="btn btn-small btn-danger btn-sm">
                Decline Request
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
class BoardingHouseItem extends React.Component {
  state = {
    statusColor: "",
    status: this.props.objData.status,
    objSnap: ""
  };

  setToActive() {
    let sup = this;
    if (confirm("Set To Active?")) {
      // db.collection("requirementComplete").doc(this.this.props.objData.userId)
      // .get().then({

      // })

      //set boarding house to active
      let sup = this;
      db.collection("businessRequirements")
        .doc(this.props.objData.userId)
        .onSnapshot(function(querySnapshot) {
          let obj = querySnapshot.data();
          if (obj != null) {
            console.log(obj);
            if (sup.isPermitValidate(obj)) {
              db.collection("houseProfiles")
                .doc(sup.props.objData.userId)
                .update({
                  status: "active"
                })
                .then(function() {
                  sup.getBoardingHouses();
                  db.collection("notifyOwnerStatus")
                    .doc("details")
                    .update({
                      message: "Your boarding house is now ACTIVE",
                      number: sup.props.objData.contactNumber
                    });
                });
            } else {
              alert("Requirements Not Complete");
            }
          } else {
            alert("Requirements Not Complete");
          }
        });
    }
  }

  isPermitValidate(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!obj[key]) {
          return false;
        }
      }
    }
    return true;
  }
  setToPending() {
    let sup = this;
    if (confirm("Set To Pending?")) {
      db.collection("houseProfiles")
        .doc(this.props.objData.userId)
        .update({
          status: "pending"
        })
        .then(function() {
          sup.getBoardingHouses();
        });
    }
  }
  setToBlock() {
    let sup = this;
    if (confirm("Set To Block?")) {
      db.collection("houseProfiles")
        .doc(this.props.objData.userId)
        .update({
          status: "block"
        })
        .then(function() {
          sup.getBoardingHouses();
          db.collection("notifyOwnerStatus")
            .doc("details")
            .update({
              message: "Your Boarding House has been BLOCK by ADMIN",
              number: sup.props.objData.contactNumber
            });
        });
    }
  }
  getNumber() {
    getNumber();
  }
  onChangeSnap() {
    let sup = this;
    db.collection("houseProfiles")
      .doc(this.props.objData.userId)
      .onSnapshot(function(querySnapshot) {
        sup.setState({
          objSnap: querySnapshot.data()
        });
        sup.getNumber();
        sup.getcolor();
      });
  }
  getBoardingHouses() {
    if (this.props.status == "all") {
      getBoardingHouses();
    } else {
      getBoardingHouses(this.props.status);
    }
  }

  printPermit() {
    var win = window.open(
      "printBhouse.html?houseId=" + this.props.id,
      "_blank"
    );
    win.focus();
  }

  printBoarders = () => {
    var win = window.open(
      "printboarders.html?houseId=" + this.props.id,
      "_blank"
    );
    win.focus();
  };

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
                    "btn text-white text-capitalize w-100 dropdown-toggle btn-" +
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
              <button
                type="button"
                data-toggle="modal"
                data-target={"#checklist" + this.props.id}
                className="btn btn-info btn-sm"
              >
                Requirements
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                data-toggle="modal"
                data-target={"#modalDetails" + this.props.id}
                className="btn btn-info btn-sm"
              >
                Details
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={this.printPermit.bind(this)}
              >
                Permit
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={() => this.printBoarders()}
              >
                Boarders
              </button>
            </div>
          </div>
        </div>
        {/* view detail modal */}
        <div
          className="modal fade"
          id={"checklist" + this.props.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.state.objSnap.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <RequirementsCheckList
                  id={this.props.id}
                  key={this.props.id}
                  modal={"#checklist" + this.props.id}
                />
              </div>
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id={"modalDetails" + this.props.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {this.state.objSnap.name}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <ViewDetails key={this.props.id} userId={this.props.id} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end details modal */}
      </React.Fragment>
    );
  }
}

function getBoardingHouses(status) {
  if (status != null) {
    db.collection("houseProfiles")
      .where("status", "==", status)
      .get()
      .then(function(querySnapshot) {
        var baordingHouse = [];
        querySnapshot.forEach(function(doc) {
          baordingHouse.push(doc.data());
        });
        var listItem = baordingHouse.map(object => (
          <BoardingHouseItem
            key={object.userId + status}
            id={object.userId}
            status={status}
            objData={object}
          />
        ));
        ReactDOM.render(
          <React.Fragment>
            <div className="row pl-3 pr-4">
              <div className="col">Name</div>
              <div className="col">Status</div>
              <div className="col">Owner</div>
              <div className="col">Address</div>
              <div className="col" />
              <div className="col" />
              <div className="col" />
              <div className="col" />
            </div>
            <div className="row w-100">
              <div className="list-group m-3 p-3 w-100" />
              {listItem}
            </div>
          </React.Fragment>,
          document.querySelector("#boardingHouseListContainer")
        );
      });
  } else {
    db.collection("houseProfiles")
      .get()
      .then(function(querySnapshot) {
        let baordingHouse = [];
        console.log(querySnapshot);
        querySnapshot.forEach(function(doc) {
          baordingHouse.push(doc.data());
        });
        var listItem = baordingHouse.map(object => (
          <BoardingHouseItem
            key={object.userId}
            id={object.userId}
            status="all"
            objData={object}
          />
        ));
        ReactDOM.render(
          <React.Fragment>
            {" "}
            <div className="row pl-3 pr-4">
              <div className="col">Name</div>
              <div className="col">Status</div>
              <div className="col">Owner</div>
              <div className="col">Address</div>
              <div className="col" />
              <div className="col" />
              <div className="col" />
              <div className="col" />
            </div>
            <div className="row w-100">
              <div className="list-group w-100" />
              {listItem}
            </div>
          </React.Fragment>,
          document.querySelector("#boardingHouseListContainer")
        );
      });
  }
}

function getNumber() {
  db.collection("houseProfiles")
    .get()
    .then(function(querySnapshot) {
      var all = 0;
      var active = 0;
      var pending = 0;
      var block = 0;
      querySnapshot.forEach(function(doc) {
        all++;
        if (doc.data().status == "active") {
          active++;
        } else if (doc.data().status == "pending") {
          pending++;
        } else if (doc.data().status == "block") {
          block++;
        }
      });

      ReactDOM.render(
        <React.Fragment>
          All{" "}
          <span className="ml-2 badge badge-primary text-primary bg-light shadow-sm">
            {all}
          </span>
        </React.Fragment>,
        document.querySelector("#filterAll")
      );
      ReactDOM.render(
        <React.Fragment>
          Active{" "}
          <span className="ml-2 badge badge-primary text-success bg-light shadow-sm ">
            {active}
          </span>
        </React.Fragment>,
        document.querySelector("#filterActive")
      );
      ReactDOM.render(
        <React.Fragment>
          Pending{" "}
          <span className="ml-2 badge badge-primary text-warning bg-light shadow-sm">
            {pending}
          </span>
        </React.Fragment>,
        document.querySelector("#filterPending")
      );
      ReactDOM.render(
        <React.Fragment>
          Blocklist{" "}
          <span className="ml-2 badge badge-primary text-dark bg-light shadow-sm">
            {block}
          </span>
        </React.Fragment>,
        document.querySelector("#filterBlock")
      );
    });
}

class RequirementsCheckList extends React.Component {
  state = {};
  saveCheckList() {
    let sup = this;
    let brgyClearance = $("#brgyClearance" + this.props.id).is(":checked");
    let brgyBusPermit = $("#brgyBusPermit" + this.props.id).is(":checked");
    let fireClearance = $("#fireClearance" + this.props.id).is(":checked");
    let policeClearance = $("#policeClearance" + this.props.id).is(":checked");
    let courtClearance = $("#courtClearance" + this.props.id).is(":checked");
    let sanitaryClearance = $("#sanitaryClearance" + this.props.id).is(
      ":checked"
    );
    let certOfOccp = $("#certOfOccp" + this.props.id).is(":checked");
    let taxClearance = $("#taxClearance" + this.props.id).is(":checked");
    let dti = $("#dti" + this.props.id).is(":checked");
    let realEstatePermit = $("#realEstatePermit" + this.props.id).is(
      ":checked"
    );
    let prevBusinessPermit = $("#prevBusinessPermit" + this.props.id).is(
      ":checked"
    );
    let sssClearance = $("#sssClearance" + this.props.id).is(":checked");
    let leaseContract = $("#leaseContract" + this.props.id).is(":checked");
    let locationBus = $("#locationBus" + this.props.id).is(":checked");
    let arrayOfRecords = [];
    arrayOfRecords.push(brgyClearance);
    arrayOfRecords.push(brgyBusPermit);
    arrayOfRecords.push(fireClearance);
    arrayOfRecords.push(policeClearance);
    arrayOfRecords.push(courtClearance);
    arrayOfRecords.push(sanitaryClearance);
    arrayOfRecords.push(certOfOccp);
    arrayOfRecords.push(taxClearance);
    arrayOfRecords.push(dti);
    arrayOfRecords.push(realEstatePermit);
    arrayOfRecords.push(prevBusinessPermit);

    db.collection("businessRequirements")
      .doc(this.props.id)
      .set({
        brgyClearance: brgyClearance,
        brgyBusPermit: brgyBusPermit,
        fireClearance: fireClearance,
        policeClearance: policeClearance,
        courtClearance: courtClearance,
        sanitaryClearance: sanitaryClearance,
        certOfOccp: certOfOccp,
        taxClearance: taxClearance,
        dti: dti,
        realEstatePermit: realEstatePermit,
        prevBusinessPermit: prevBusinessPermit,
        sssClearance: sssClearance,
        leaseContract: leaseContract,
        locationBus: locationBus
      })
      .then(function() {
        console.log("Document successfully written!");
        $(sup.props.modal).modal("hide");
        db.collection("requirementComplete")
          .doc(sup.props.id)
          .set({ isComplete: sup.isRequirementsComplete(arrayOfRecords) });
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  isRequirementsComplete(arratOfPermist) {
    for (let isChecked of arratOfPermist) {
      if (!isChecked) {
        return false;
      }
    }
  }

  getCheckList() {
    let sup = this;
    db.collection("businessRequirements")
      .doc(this.props.id)
      .onSnapshot(function(querySnapshot) {
        let obj = querySnapshot.data();
        if (obj != null) {
          $("#brgyClearance" + sup.props.id).prop("checked", obj.brgyClearance);
          $("#brgyBusPermit" + sup.props.id).prop("checked", obj.brgyBusPermit);
          $("#fireClearance" + sup.props.id).prop("checked", obj.fireClearance);
          $("#policeClearance" + sup.props.id).prop(
            "checked",
            obj.policeClearance
          );
          $("#courtClearance" + sup.props.id).prop(
            "checked",
            obj.courtClearance
          );
          $("#sanitaryClearance" + sup.props.id).prop(
            "checked",
            obj.sanitaryClearance
          );
          $("#certOfOccp" + sup.props.id).prop("checked", obj.certOfOccp);
          $("#taxClearance" + sup.props.id).prop("checked", obj.taxClearance);
          $("#dti" + sup.props.id).prop("checked", obj.dti);
          $("#realEstatePermit" + sup.props.id).prop(
            "checked",
            obj.realEstatePermit
          );
          $("#prevBusinessPermit" + sup.props.id).prop(
            "checked",
            obj.prevBusinessPermit
          );
          $("#sssClearance" + sup.props.id).prop("checked", obj.sssClearance);
          $("#leaseContract" + sup.props.id).prop("checked", obj.leaseContract);
          $("#locationBus" + sup.props.id).prop("checked", obj.locationBus);
        }
      });
  }
  componentDidMount() {
    this.getCheckList();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row mb-3">
          <h3>Requirements</h3>
        </div>
        {/* app letter */}
        <div className="row">
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"brgyClearance" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"brgyClearance" + this.props.id}
              >
                Barangay Clearance
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"brgyBusPermit" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"brgyBusPermit" + this.props.id}
              >
                Barangay Business Permit
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"fireClearance" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"fireClearance" + this.props.id}
              >
                Fire Clearance
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"policeClearance" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"policeClearance" + this.props.id}
              >
                Police Clearance
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"courtClearance" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"courtClearance" + this.props.id}
              >
                Court Clearance
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"sanitaryClearance" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"sanitaryClearance" + this.props.id}
              >
                Sanitary Clearance
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"certOfOccp" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"certOfOccp" + this.props.id}
              >
                Certificate of Occupancy/ Annual Inspection
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"taxClearance" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"taxClearance" + this.props.id}
              >
                Tax Clearance
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"dti" + this.props.id}
                required
              />
              <label class="custom-control-label" for={"dti" + this.props.id}>
                DTI (Photocopy)
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"realEstatePermit" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"realEstatePermit" + this.props.id}
              >
                Real Estate Lessor's Business Permit
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"prevBusinessPermit" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"prevBusinessPermit" + this.props.id}
              >
                Business Permit (Previous Year)
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"sssClearance" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"sssClearance" + this.props.id}
              >
                SSS Clearance
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"leaseContract" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"leaseContract" + this.props.id}
              >
                Lease Contract (Rented stall/Space)
              </label>
            </div>
          </div>
          <div className="col-12">
            <div class="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                class="custom-control-input"
                id={"locationBus" + this.props.id}
                required
              />
              <label
                class="custom-control-label"
                for={"locationBus" + this.props.id}
              >
                Location Business
              </label>
            </div>
          </div>
          <div className="col-12" />
        </div>
        {/* end app leter */}
        <div className="row p-3">
          <button
            type="button"
            onClick={this.saveCheckList.bind(this)}
            className="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    );
  }
}

class ViewDetails extends React.Component {
  state = {
    profile: "",
    genInfo: ""
  };
  getProfle() {
    let sup = this;
    db.collection("houseProfiles")
      .doc(this.props.userId)
      .onSnapshot(function(querySnapshot) {
        sup.setState({
          profile: querySnapshot.data()
        });
      });
  }
  getGeneralInfo() {
    let sup = this;
    db.collection("generalInformation")
      .doc(this.props.userId)
      .onSnapshot(function(querySnapshot) {
        sup.setState({
          genInfo: querySnapshot.data()
        });
      });
  }
  componentDidMount() {
    this.getGeneralInfo();
    this.getProfle();
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h3>General Information</h3>
        </div>
        <div className="row">
          <div className="col-12">
            <small className="text-muted">Boarding House Name</small>
          </div>
          <div className="col-12">
            <h5>{this.state.profile.name}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <small className="text-muted">Owner</small>
          </div>
          <div className="col-12">
            <h5>{this.state.profile.owner}</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <small className="text-muted">Status</small>
          </div>
          <div className="col-12">
            <h5>{this.state.profile.status}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <small className="text-muted">Address</small>
          </div>
          <div className="col-12">
            <h5>{this.state.profile.address}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <small className="text-muted">Contact Number</small>
          </div>
          <div className="col-12">
            <h5>{this.state.profile.contactNumber}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <small className="text-muted">Email</small>
          </div>
          <div className="col-12">
            <h5>{this.state.profile.email}</h5>
          </div>
        </div>
      </div>
    );
  }
}
