import React, { Component } from 'react';
import './App.scss';

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
      return false;
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
        <button className="btn btn-block btn-danger" onClick={() => this.setCurrent(null)}>
          Return
        </button>
        <div className="table-responsive">
        <table className="table table-sm table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Examine</th>
            <th>Release Date</th>
            <th>Tradeable?</th>
            <th>Buy Limit</th>
            <th>High Alch</th>
            <th>Members?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.items[this.state.current].name}</td>
            <td>{this.state.items[this.state.current].id}</td>
            <td>{this.state.items[this.state.current].examine}</td>
            <td>{this.state.items[this.state.current].release_date}</td>
            <td>{this.state.items[this.state.current].tradeable ? "Yes" : "No"}</td>
            <td>{this.state.items[this.state.current].buy_limit}</td>
            <td>{this.state.items[this.state.current].highalch}</td>
            <td>{this.state.items[this.state.current].members ? "Yes" : "No"}</td>
          </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}
}
}

export default App;
