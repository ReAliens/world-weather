import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const WrappedMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{
        lat: props.position.coordinates.lat,
        lng: props.position.coordinates.lng,
      }}
    >
      <Marker
        position={{
          lat: props.position.coordinates.lat,
          lng: props.position.coordinates.lng,
        }}
      />
    </GoogleMap>
  )),
);

export default WrappedMap;
