import React, { useEffect } from 'react';

const RestrictRotation = () => {
  useEffect(() => {
    const lockOrientation = async () => {
      if ((screen.orientation as any)?.lock) {
        try {
          await (screen.orientation as any).lock('portrait-primary');
        } catch (error) {
          console.error('Failed to lock the screen orientation:', error);
        }
      } else if ((screen as any)?.lockOrientation) {
        try {
          await (screen as any).lockOrientation('portrait-primary');
        } catch (error) {
          console.error('Failed to lock the screen orientation:', error);
        }
      } else {
        console.warn('Screen orientation API not supported.');
      }
    };

    lockOrientation();
  }, []);

  return <></>;
};

export default RestrictRotation;
