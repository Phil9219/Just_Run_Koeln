import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import MapStyle from "./MapStyle";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 50.937531,
  lng: 6.960279,
};
const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const MapHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    input:nth-child(1) {
      background: none;

      border: solid 2px var(--secondary-color);
      background: none;
      color: var(--secondary-color);
      font-family: "Heiti SC", adobe-heiti-std, sans-serif;
      font-size: 1rem;
      font-weight: 700;
      display: flex;
      text-align: center;

      ::placeholder {
        color: var(--inputfield-color);
      }
    }

    button:nth-child(2) {
      background: none;
      border: none;
    }
  `;

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <MapHeader>
        <Search panTo={panTo} />
        <Locate panTo={panTo} />
      </MapHeader>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}

        {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>Run Start</h2>
              <p>Be Ready At {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

Locate.propTypes = {
  panTo: PropTypes.string.isRequired,
};

function Locate({ panTo }) {
  return (
    <button
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      🧭
    </button>
  );
}

Search.propTypes = {
  panTo: PropTypes.string.isRequired,
};

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 50.937531, lng: () => 6.960279 },
      radius: 200 * 1000,
    },
  });

  return (
    <Combobox
      onSelect={async (address) => {
        setValue(address, false);
        clearSuggestions();
        try {
          const results = await getGeocode({ address });
          const { lat, lng } = await getLatLng(results[0]);
          panTo({ lat, lng });
        } catch (error) {
          console.log("Error: ", error);
        }
      }}
    >
      <ComboboxInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder="Choose StartingPoint"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
