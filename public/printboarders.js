const houseId = new URLSearchParams(window.location.search).get("houseId");
function printPage() {
  window.print();
}

class BoardersList extends React.Component {
  state = { businessProfileObject: {}, boarderList: "Loading. . ." };
  getBoardingHouseDetails = () => {
    let sup = this;
    db.collection("houseProfiles")
      .doc(houseId)
      .onSnapshot(function(doc) {
        sup.setState({
          businessProfileObject: doc.data()
        });
      });
  };
  getBoarders = () => {
    let sup = this;
    db.collection("reservationTickets")
      .where("ownerId", "==", houseId)
      .onSnapshot(function(snapShot) {
        console.log(snapShot);

        if (snapShot.docs.length == 0 || snapShot == null) {
          sup.setState({
            boarderList: "No Boarders"
          });
        } else {
          let boarderList = [];
          snapShot.forEach(doc => {
            boarderList.push(<BoarderList {...doc.data()} />);
          });
          sup.setState({
            boarderList: boarderList
          });
        }
      });
  };

  componentDidMount() {
    this.getBoardingHouseDetails();
    this.getBoarders();
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <h1>{this.state.businessProfileObject.name}</h1>
            <h5 className="text-secondary">Boarders List</h5>
          </div>
        </div>
        <div className="row">
          <div className="list-group w-100">
            <div className="list-group-item border-0">
              <div className="row">
                <div className="col font-weight-bold">Name</div>
                <div className="col font-weight-bold">Email</div>
              </div>
            </div>
          </div>
        </div>
        {this.state.boarderList}
        <div className="row">
          <div className="list-group w-100" id="listContainer" />
        </div>
      </React.Fragment>
    );
  }
}

class BoarderList extends React.Component {
  state = { userProfile: {} };
  getTenantDetails = async () => {
    let sup = this;
    let tenantId = await this.props.tenantId;
    db.collection("users")
      .doc(tenantId)
      .onSnapshot(doc => {
        console.log(doc.data());
        sup.setState({
          userProfile: doc.data()
        });
      });
  };
  componentDidMount() {
    this.getTenantDetails();
  }
  render() {
    return (
      <div className="row border-bottom mb-2 pb-2">
        <div className="col">{this.state.userProfile.userName}</div>
        <div className="col">{this.state.userProfile.email}</div>
      </div>
    );
  }
}

function renderBoardingHousePrint() {
  ReactDOM.render(<BoardersList />, document.querySelector("#mainContainer"));
}

renderBoardingHousePrint();
