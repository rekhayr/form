import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      optionUpdate: "",
      SummaryUpdate: "",
      optionUpdated: [],
      SummaryUpdated: []
    };
  }
  onchangeHandler = e => {
    this.setState({
      optionUpdate: e.target.value
    });
  };

  removeSummary(key) {
    let optionNew = [...this.state.optionUpdated];
    optionNew.splice(key, 1);
    this.setState({
      optionUpdated: optionNew
    });
    let rows = [...this.state.SummaryUpdated];
    rows.splice(key, 1);
    this.setState({
      SummaryUpdated: rows
    });
  }
  onChangeDescription = e => {
    this.setState({
      SummaryUpdate: e.target.value
    });
  };
  onClickReset = e => {
    e.preventDefault();
    this.setState({ optionUpdate: "", SummaryUpdate: "" });
  };
  onClickAdd = e => {
    e.preventDefault();
    this.setState({ optionUpdate: "", SummaryUpdate: "" });
    this.setState({
      optionUpdated: [this.state.optionUpdate, ...this.state.optionUpdated]
    });
    this.setState({
      SummaryUpdated: [this.state.SummaryUpdate, ...this.state.SummaryUpdated]
    });
  };

  render() {
    return (
      <div>
        <form>
          <h1>Input form</h1>
          <select
            className="inputDescription "
            onChange={this.onchangeHandler}
            value={this.state.optionUpdate}
          >
            <option>select severity</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <div className="inputDescription ">Write Summary</div>
          <div>
            <textarea
              onChange={this.onChangeDescription}
              className="inputDescription "
              maxLength={200}
              value={this.state.SummaryUpdate}
            />
          </div>

          <button className="small" onClick={this.onClickAdd}>
            save
          </button>

          <button className="small marginLeft" onClick={this.onClickReset}>
            Reset
          </button>
        </form>
        {(this.state.optionUpdated.length > 0 ||
          this.state.SummaryUpdated.length > 0) && (
          <div className="marginTop paddingleft">
            <h1>List of message</h1>
            <table>
              <tr>
                <tr>
                  <th> Severity</th>
                </tr>
                {this.state.optionUpdated.map((severity, index) => (
                  <td key={index}>{severity}</td>
                ))}
              </tr>
              <tr>
                <tr>
                  <th> summary </th>
                </tr>
                {this.state.SummaryUpdated.map((description, key) => (
                  <td key={key}>
                    {description}
                    <button
                      className="small"
                      onClick={key => this.removeSummary(key)}
                    >
                      Remove
                    </button>
                  </td>
                ))}
              </tr>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default App;
