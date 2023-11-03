import { useState, useEffect } from 'react';

function useUserInteraction() {
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return userInteracted;
}

export default useUserInteraction;