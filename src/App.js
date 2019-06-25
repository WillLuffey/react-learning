import React, { Component } from 'react';
import './App.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      current: null
    }
  }

componentWillMount() {
  fetch('https://www.osrsbox.com/osrsbox-db/items-json-slot/items-2h.json')
  // fetch('https://www.osrsbox.com/osrsbox-db/items-complete.json')
      .then(response => {
          return response.json();
      })
      .then(json => {
        this.setState({
          items: json,
        }, () => {
          // console.log(this.state.items);
        })
      })
      .catch(error => console.log(error))
}

setCurrent(id) {
  this.setState({current: id})
}
  render() {
    if (this.state.items.length === 0) {
      return (
        <div className="load bg-dark text-center">
          <CircularProgress color="secondary" />
          </div>
      );
    }
    console.log(this.state.items)
    if (this.state.current === null) {
  return (
    <div className="App bg-dark text-light">
      <nav class="navbar navbar-expand-sm navbar-dark bg-danger">
        <a class="navbar-brand" href="index.html">Experiment</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
          </div>
        </div>
      </nav>
      <div className="container mt-4 text-left">
        {Object.keys(this.state.items).map((itemObj, index) => {
          var item = this.state.items[itemObj];
          var imgURL = "https://www.osrsbox.com/osrsbox-db/items-icons/" + item.id + ".png"
          return (
            <button className="btn btn-dark btn-item" onClick={() => this.setCurrent(item.id)}>
            <figure key={item.id}>
              <img src={imgURL} alt="Item"/>
              <figcaption>{item.name}</figcaption>
            </figure>
            </button>
          )})
        }
      </div>
    </div>
  );
} else {
  const item = this.state.items[this.state.current];
  const imgURL = "https://www.osrsbox.com/osrsbox-db/items-icons/" + item.id + ".png";
  return (
    <div className="App bg-dark text-light">
      <nav class="navbar navbar-expand-sm navbar-dark bg-danger">
        <a class="navbar-brand" href="index.html">Experiment</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="index.html">Home <span class="sr-only">(current)</span></a>
          </div>
        </div>
      </nav>
      <div className="container mt-4 text-center">
        <button className="btn btn-block btn-danger" onClick={() => this.setCurrent(null)}>
          Return
        </button>
        <img className="item-preview" src={imgURL} alt="Item"/>
        <div className="table-responsive">
        <table className="table table-sm table-dark">
          <tr>
            <th>Name</th>
            <td>{item.name}</td>
            </tr>
            <tr>
            <th>ID</th>
            <td>{item.id}</td>
            </tr>
            <tr>
            <th>Examine</th>
            <td>{item.examine}</td>
            </tr>
            <tr>
            <th>Release Date</th>
            <td>{item.release_date}</td>
            </tr>
            <tr>
            <th>Tradeable?</th>
            <td>{item.tradeable ? "Yes" : "No"}</td>
            </tr>
            <tr>
            <th>Buy Limit</th>
            <td>{item.buy_limit}</td>
            </tr>
            <tr>
            <th>High Alch</th>
            <td>{item.highalch}</td>
            </tr>
            <tr>
            <th>Members?</th>
            <td>{item.members ? "Yes" : "No"}</td>
            </tr>
        </table>
        </div>
      </div>
    </div>
  );
}
}
}

export default App;
