import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  };

  render() {
    return (
      <div className="flat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.imageUrl}')` }}>
        <div className="price">
          {this.props.price}
        </div>
        <div className="flat-name">
          {this.props.name}
        </div>
        <a className=".card-link" href="#" onClick={this.handleClick}>Link</a>
      </div>
    );
  }
}


export default Flat;
