import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const AnyReactComponent = () => (
  <Icon name="marker" size="big" color="red" />
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state ={
    apiKey: "AIzaSyBDTIkrq_EQJUC8o2tW1-ASi7LIN0nbaUA"
  }

  showMapLocation = () =>{
      if(this.props.latLng.lat === '' || this.props.latLng.lng === ''){
          return (
            <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.state.apiKey }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent lat={59.955413} lng={30.337844} />
            </GoogleMapReact>
          </div>
          )
      }
      else{
          const {latLng} = this.props
          return (
            <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.state.apiKey }}
              defaultCenter={latLng}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent lat={this.props.latLng.lat} lng={this.props.latLng.lng} />
            </GoogleMapReact>
          </div>
          )
      }
  }


  render() {
      
    return (
      <Fragment>
        {this.showMapLocation()}
      </Fragment>
      
    );
  }
}

export default SimpleMap;
