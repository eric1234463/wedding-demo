import { APIProvider, Map, Marker, InfoWindow, useMarkerRef } from '@vis.gl/react-google-maps';

const MapCard = () => {
  const API_KEY = 'AIzaSyB1h0hErQWeGB804Rl3QBpimH6yS3fm_CQ'

  const center = { lat: 22.36879855333074, lng: 114.11300372685335 };
  const [markerRef, marker] = useMarkerRef();

  return (
    <APIProvider apiKey={API_KEY}>
      <div className='w-full py-10'>
        <div className='text-center font-3xl pb-8'>How to Go ?</div>
        <div className='px-0 lg:px-20 h-[400px]'>
          <Map
            zoom={20}
            center={center}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            <Marker position={center} ref={markerRef} />
            <InfoWindow anchor={marker}>
              <h2>荃灣西如心酒店 7/F Hall C</h2>
            </InfoWindow>
          </Map>
        </div>
      </div>
    </APIProvider>
  )
}

export default MapCard;