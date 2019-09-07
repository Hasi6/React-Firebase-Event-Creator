import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

const EventDetailsMap = ({ lat, lng }) => {
  const Marker = () => <Icon name="marker" size="big" color="red" />;
  const zoom = 14;
  const center = {
    lat,
    lng
  };
  console.log(lat);
  const apiKey = "AIzaSyBDTIkrq_EQJUC8o2tW1-ASi7LIN0nbaUA";

  return (
    <Segment attached="bottom" style={{padding: 1}}>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailsMap;
