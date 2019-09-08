import React, { Fragment } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import SimpleMap from "./SimpleMap";
import DateTimePickerTest from "./DateTimePickerTest";
import { connect } from "react-redux";
import { openModal } from "../../../actions/modals/modalActions";
import { Button } from "semantic-ui-react";

class TestPlaceApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      latLng: {
        lat: "",
        lng: ""
      }
    };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ latLng }))
      .catch(error => console.error("Error", error));
  };

  render() {
    return (
      <Fragment>
        <Button
          color="teal"
          content="Test Model"
          onClick={() => this.props.openModal("Test Modal", { data: 42 })}
        />
        <Button
          color="teal"
          content="Login Model"
          onClick={() => this.props.openModal("Login Modal", { data: 42 })}
        />
        <Button
          color="teal"
          content="Register Model"
          onClick={() => this.props.openModal("Register Modal", { data: 42 })}
        />
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <SimpleMap key={this.state.latLng.lat} latLng={this.state.latLng} />
        <DateTimePickerTest />
      </Fragment>
    );
  }
}

export default connect(
  null,
  { openModal }
)(TestPlaceApi);
