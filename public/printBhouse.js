class BoardingHouseList extends React.Component {
  state = {};
  getBlockedList() {
    db.collection("houseProfiles")
      .where("status", "==", "block")
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
          <React.Fragment>{listItem}</React.Fragment>,
          document.getElementById("listContainer")
        );
      });
  }
  componentDidMount() {
    this.getBlockedList();
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h1>Boarding House List</h1>
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="list-group w-100">
            <div className="list-group-item border-0">
              <div className="row">
                <div className="col font-weight-bold">Boarding House Name</div>
                <div className="col font-weight-bold">Owner</div>
                <div className="col font-weight-bold">Status</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="list-group w-100" id="listContainer" />
        </div>
      </React.Fragment>
    );
  }
}

class BoardingHouseItem extends React.Component {
  state = {};
  render() {
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col text-info">{this.props.objData.name}</div>
          <div className="col">{this.props.objData.owner}</div>
          <div className="col">{this.props.objData.status}</div>
        </div>
      </div>
    );
  }
}

class PrintBusinessPermit extends React.Component {
  state = {businessProfileObject:""};
  getParam(){
    var urlParams = new URLSearchParams(window.location.search);
    //console.log(urlParams.get('eventid'));

    var event_id = urlParams.get("houseId");
    if (event_id!=null){
      console.log(event_id);
      let sup = this;
      db.collection("houseProfiles").doc(event_id).onSnapshot(function(doc) {
        sup.setState({
          businessProfileObject:doc.data()
        })
    });
    }else{
      console.log("The Nun");
    }
  }
  componentDidMount(){
    this.getParam();
  }
  render() {
    return (
      <React.Fragment>
        <div className="row text-center">
          <div className="col">
            <h1>2018 BUSINESS PERMIT</h1>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            Pursuant to the provision of Municipality Ordinance No. 2012-001
            otherwise known as the Revised Revenue Code of Sibalom, this
            Business Permit is hereby granted to
          </div>
        </div>
        <div className="row text-center mt-3 mb-3">
          <input
            type="text"
            defaultValue = {this.state.businessProfileObject.owner}
            class="form-control text-primary text-uppercase font-weight-bold text-xl form-control-lg text-center border-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Business Owner"
          />
          <div className="col-12">
            <small className="text-muted">Business name</small>
          </div>
        </div>

        <div className="row text-center mb-3">
          <input
            type="text"
            defaultValue = {this.state.businessProfileObject.name}
            class="form-control text-success text-uppercase font-weight-bold form-control-lg text-center border-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Business Name"
          />
          <div className="col-12">
            <small className="text-muted">Line of Business</small>
          </div>
        </div>
        <div className="row text-center mb-3">
          <input
            type="text"
            
            class="form-control text-capitalize form-control-lg text-center border-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Line of Business"
          />
          <div className="col-12">
            <small className="text-muted">Business Address</small>
          </div>
        </div>
        <div className="row text-center mb-5">
          <input
            type="text"
            defaultValue = {this.state.businessProfileObject.address}
            class="form-control text-capitalize form-control-lg text-center border-0"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Address"
          />
          <div className="col-12">
            <small className="text-muted">
              Owner/Proprietor/Operator Manager
            </small>
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            This PERMIT is valid up to December 31, 2018 only and can be revoked
            for vaiolation of any provision/s of existing oridinance laws, rules
            and regulations pertaining to the afore-stated business/es, which
            are now in force or may hereafter be issued on the matter
          </div>
        </div>

        <div className="row mt-5">
          <div className="col">
            <div className="row">
              <div className="col-12">
                <small>Permit No.</small>
                <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Permit Number"
                />
              </div>
              <div className="col-12">
                <small>Ammount Paid</small>
                <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Ammount Paid"
                />
              </div>
              <div className="col-12">
                <small>OR Number</small>
                <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter OR Number"
                />
              </div>
              <div className="col-12">
                <small>Date Paid</small>
                <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Date Paid"
                />
              </div>
              <div className="col-12">
                <small>Business Status</small>
                <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Business Status"
                />
              </div>
            </div>
          </div>
          <div className="col text-center">
            <div className="row">Apprved:</div>
            <div className="row mt-5">
              <div className="col">BY THE AUTHORITY OF THE MAYOR</div>
            </div>
            <div className="row mt-5 pt-5">
              <div className="col-12 font-weight-bold">
                <h4>ANGEL A. GILVAS</h4>
              </div>
              <div className="col-12">Senior Admininstrative Assistant III</div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-auto">Payment</div>
          <div className="col">
            <small className = "pl-1">1st Quarter</small><br/>
            <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  
                />
          </div>
          <div className="col">
            <small className = "pl-1">2nd Quarter</small><br/>
            <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  
                />
          </div>
          <div className="col">
            <small className = "pl-1">3rd Quarter</small><br/>
            <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  
                />
          </div>
          <div className="col">
            <small className = "pl-1">4th Quarter</small><br/>
            <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  
                />
          </div>
          <div className="col">
            <small className = "pl-1">Full Payment</small><br/>
            <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  
                />
          </div>
          <div className="col">
            <small className = "pl-1">Date of Issue</small><br/>
            <input
                  type="text"
                  class="form-control text-capitalize font-weight-bold form-control-sm border-0"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Date of Issue"
                />
          </div>
        </div>
        <div className ="row mt-5">
            <div className = "col-12 text-center text-uppercase">
            <h3 className = "text-danger">note: post this permit in a conspicuous place</h3>
            </div>
            <div className = "col-6 text-center text-info">
            lgusibalom@gmail.com
            </div>
            <div className = "col-6 text-center text-info">
            TelFax No. (036) 543-7834
            </div>
        </div>

        <div className="row mt-5 mb-5" />
     
      </React.Fragment>
    );
  }
}

class PrintCertificate extends React.Component {
  state = {
    mainContent:
      "This is to certify that according to the records filed in this office, one establishment operation Printing job in the Municipality of Sibalom namely:",
    date: "Done this 17th day of September 2018 at Sibalom, Antique,Philippines",
    businessProfileObject:""
  };
 
  getParam(){
    var urlParams = new URLSearchParams(window.location.search);
    //console.log(urlParams.get('eventid'));

    var event_id = urlParams.get("houseId");
    if (event_id!=null){
      console.log(event_id);
      let sup = this;
      db.collection("houseProfiles").doc(event_id).onSnapshot(function(doc) {
        sup.setState({
          businessProfileObject:doc.data()
        })
    });
    }else{
      console.log("The Nun");
    }
  }
  componentDidMount(){
    this.getParam();
  }

  saveChages() {
    let date = $("#date").val();
    let mainContent = $("#mainContent").val();

    this.setState({
      mainContent: mainContent,
      date: date
    });
    $("#customCert").modal("toggle");
  }

  render() {
    return (
      <React.Fragment>
        <div className="row d-print-none">
          <button
            type="button"
            data-toggle="modal"
            data-target="#customCert"
            class="btn btn-primary "
          >
            Customize Certificate
          </button>
        </div>
        <div className="row">
          <div className="col" />
          <div className="col-6 text-center ">
            <div className="row ">
              <div className="col-12">Republic of the Philippines</div>
              <div className="col-12">Provice of Antique</div>
              <div className="col-12">Municipality of Sibalom</div>
            </div>
            <div className="row mt-3 font-weight-bold">
              <div className="col">
                {" "}
                <h5>BUSINESS PERMITS AND LICENSSING OFFICE</h5>
              </div>
            </div>
            <div className="row mt-5 text-center">
              <div className="col">
                <h1>CERTIFICATION</h1>
              </div>
            </div>
          </div>
          <div className="col" />
        </div>
        <div className="row ml-5 mt-3 mr-5">
          <p className="indent">{this.state.mainContent}</p>
        </div>
        <div className="row m-5">
          <div className="col-4">
            <small className="ml-3">Business Name</small>
          </div>
          <div className="col-4">
            <small className="ml-3">Business Owner</small>
          </div>
          <div className="col-4">
            <small className="ml-3">Business Location</small>
          </div>
          <div className="col-4">
            <input
              type="text"
              defaultValue = {this.state.businessProfileObject.name}
              class="form-control border-0 font-weight-bold"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Business Name"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              defaultValue = {this.state.businessProfileObject.owner}
              class="form-control border-0 font-weight-bold"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Owner Name"
            />
          </div>
          <div className="col-4">
            <input
             defaultValue = {this.state.businessProfileObject.address}
              type="text"
              class="form-control border-0 font-weight-bold"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Business Location"
            />
          </div>
        </div>
        <div className="row ml-5 mr-5 text-center">
          <div className="col-12">
            <p>
              This certification is issued for all legal intent and purposes it
              may serve
            </p>
          </div>
          <div className="col-12">
            <p>{this.state.date}</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col" />
          <div className="col" />
          <div className="col">
            <div className="row">
              <input
                type="text"
                class="form-control text-center border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Name Here"
              />
            </div>
            <div className="row">
              <input
                type="text"
                class="form-control text-center border-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Position"
              />
            </div>
          </div>
        </div>
        <div className="modal" id="customCert" tabindex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Info</h5>
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
                <div className="row m-2">
                  <div className="input-group mb-3">
                    <textarea
                      id="mainContent"
                      className="form-control"
                      rows="6"
                      defaultValue={this.state.mainContent}
                      aria-label="With textarea"
                    />
                  </div>
                </div>
                <div className="row m-2">
                  <div className="input-group mb-3">
                    <textarea
                      id="date"
                      className="form-control"
                      rows="3"
                      defaultValue={this.state.date}
                      aria-label="With textarea"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={this.saveChages.bind(this)}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function renderBoardingHousePrint() {
  ReactDOM.render(
    <BoardingHouseList />,
    document.querySelector("#mainContainer")
  );
}

function renderPermits() {
  ReactDOM.render(
    <PrintBusinessPermit />,
    document.querySelector("#mainContainer")
  );
}

function renderCertificates() {
  ReactDOM.render(
    <PrintCertificate />,
    document.querySelector("#mainContainer")
  );
}

function whatToPrint() {
  let printOptions = $("#printOptions").val();
  if (printOptions == "bhouse") {
    renderBoardingHousePrint();
  } else if (printOptions == "permit") {
    renderPermits();
  } else if (printOptions == "cert") {
    renderCertificates();
  }
}

function printPage() {
  window.print();
}

renderPermits();
