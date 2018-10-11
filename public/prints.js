class PrintsContainer extends React.Component {
  state = {};
  printBoardingHouseList() {
    var win = window.open("printboardinghouselist.html");
    win.focus();
  }
  render() {
    return (
      <React.Fragment>
        <div className="row pt-5">
          <div className="col">
            <h3>Prints</h3>
          </div>
        </div>
        <div className="row p-3">
          <div className="col">
            <button
              type="button"
              onClick={this.printBoardingHouseList.bind(this)}
              class="btn btn-primary"
            >
              Print Boarding House Block List
            </button>
          </div>
          <div className="col">
            <button type="button" class="btn btn-primary">
              Print Permit
            </button>
          </div>
          <div className="col">
            <button type="button" class="btn btn-primary">
              Print Certificate
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function renderPrints() {
  ReactDOM.render(
    <PrintsContainer />,
    document.querySelector("#mainContainer")
  );
}
