import { useState, useEffect } from 'react';

function useUserInteraction() {
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      console.log("CLICK")
      setUserInteracted(true);
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return {
    userInteracted,
    setUserInteracted
  };
}

export default useUserInteraction;