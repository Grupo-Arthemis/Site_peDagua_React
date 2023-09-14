import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      mapCenter: {
        lat: null,
        lng: null,
      },
    };
  }

  componentDidMount() {
    // Verifique se a geolocalização está disponível no navegador
    if ('geolocation' in navigator) {
      // Obtenha as coordenadas da localização atual do usuário
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const mapCenter = { lat: latitude, lng: longitude };

        // Atualize o estado com as coordenadas da localização atual
        this.setState({ mapCenter });
      });
    }
  }

  handleAddressChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (selectedAddress) => {
    this.setState({ address: selectedAddress });

    geocodeByAddress(selectedAddress)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.setState({ mapCenter: latLng });
      })
      .catch((error) => console.error('Error', error));
  };

  render() {
    const { address, mapCenter } = this.state;

    return (
      <div style={{height:"max-content"}}>
        <PlacesAutocomplete
          value={address}
          onChange={this.handleAddressChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Digite um endereço...',
                  className: 'location-search-input',
                  style: { width: "97%", height: '5vh', borderRadius: 10, border: "1px solid #9795b5"},
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Carregando...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
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
        <Map
          google={this.props.google}
          zoom={14}
          center={mapCenter}
          style={{ width: '95%', height: '80%', borderRadius: 10, border: "1px solid #9795b5", margin: "0 auto", position: "absolute"}}
        >
          <Marker position={mapCenter} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD04y6Ip4Gu5lnlO894XGdf3rOA6BhGxow',
})(MapContainer);
