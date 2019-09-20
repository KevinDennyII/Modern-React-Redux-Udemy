import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  //only use an error because the current convention
  // but you could also return an object like so...
  // { lat: lat, errorMessage: errorMessage };
  return [lat, errorMessage];
}
