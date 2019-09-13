import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import flats from '../data/flats';
import Marker from './marker';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <FlatList
            flats={this.state.flats}
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="right-scene">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
