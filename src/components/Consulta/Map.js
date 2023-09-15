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

    const renderSuggestion = ({ description }) => {
      const addressParts = description.split(',');
      const streetName = addressParts[0];
      const city = addressParts[1];
      return (
        <div style={{ padding: '10px', borderBottom: '1px solid #ccc', fontFamily: 'DM Sans', width: '100%' }}>
          <span style={{ fontWeight: 'bold' }}>{streetName}</span>, {city}
        </div>
      );
    };

    return (
      <div style={{ position: 'relative', height: '75vh' }}>
        <PlacesAutocomplete
          value={address}
          onChange={this.handleAddressChange}
          onSelect={this.handleSelect}
          renderSuggestion={renderSuggestion}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div style={{ position: 'relative' }}>
              <input
                {...getInputProps({
                  placeholder: 'Digite um endereço...',
                  className: 'location-search-input',
                  style: {
                    height: '8vh',
                    border: 'none',
                    marginBottom: '2vh',
                    width: '90%',
                    backgroundColor: '#EDF2F7',
                    borderRadius: '20px',
                    fontSize: '16px',
                    padding: '0 5%',
                    fontFamily: "DM Sans"
                  },
                })}
              />  
              <div
                className="autocomplete-dropdown-container"
                style={{ position: 'absolute', zIndex: 1, backgroundColor: '#fff', width: '100%', fontSize: '16px' }}
              >
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
                      <span style={{ fontFamily: 'DM Sans' }}>{renderSuggestion(suggestion)}</span>
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
          style={{ width: '100%', height: '65vh', position: 'absolute'}}
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