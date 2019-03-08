import React, { Component } from "react";
const words = [
  {
    id: 1,
    name: "Test",
    name2: "try",
    imageURL: "https://i.imgur.com/SRtYTwd.jpg"
  },
  {
    id: 2,
    name: "Test2",
    name2: "try2",
    imageURL: "https://i.imgur.com/x85xzZR.gif"
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordList: words
    };
  }

  renderItems = () => {
    const newItems = this.state.wordList
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className="word-title mr-2"
          title={item.name2}
        >
          {item.name}
          <img src={item.imageURL} className="rounded float-right img-thumbnail"/>
        </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">All words</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default App;