import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickListener = (e) => {
    e.preventDefault();
    const result = e.target.value;
    const obj = calculate(this.state, result);
    this.setState(obj);
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    const { total, next, operation } = this.state;
    const result = `${total || ''}${operation || ''}${next || ''}`;
    return (
      <form>
        <div className="resultsDiv">{result}</div>
        <div className="btnDiv">
          <input type="button" value="AC" onClick={this.clickListener} />
          <input type="button" value="+/-" onClick={this.clickListener} />
          <input type="button" value="%" onClick={this.clickListener} />
          <input className="orange" type="button" value="÷" onClick={this.clickListener} />
          <input type="button" value="7" onClick={this.clickListener} />
          <input type="button" value="8" onClick={this.clickListener} />
          <input type="button" value="9" onClick={this.clickListener} />
          <input className="orange" type="button" value="x" onClick={this.clickListener} />
          <input type="button" value="4" onClick={this.clickListener} />
          <input type="button" value="5" onClick={this.clickListener} />
          <input type="button" value="6" onClick={this.clickListener} />
          <input className="orange" type="button" value="-" onClick={this.clickListener} />
          <input type="button" value="1" onClick={this.clickListener} />
          <input type="button" value="2" onClick={this.clickListener} />
          <input type="button" value="3" onClick={this.clickListener} />
          <input className="orange" type="button" value="+" onClick={this.clickListener} />
          <input className="span" type="button" value="0" onClick={this.clickListener} />
          <input type="button" value="." onClick={this.clickListener} />
          <input className="orange" type="button" value="=" onClick={this.clickListener} />
        </div>
      </form>
    );
  }
}
