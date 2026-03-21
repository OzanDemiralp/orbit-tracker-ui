import { useState, useEffect } from 'react';
import { Cartesian3 } from 'cesium';
import { getSatellitePosition } from '../services/satelliteService';

export const useSatelliteTracker = (group, name, intervalMs = 5000) => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const update = async () => {
      try {
        const data = await getSatellitePosition(group, name);
        setPosition(
          Cartesian3.fromDegrees(data.longitude, data.latitude, data.altitude),
        );
      } catch (err) {
        setError(err);
      }
    };

    update();
    const id = setInterval(update, intervalMs);
    return () => clearInterval(id);
  }, [group, name, intervalMs]);

  return { position, error };
};
