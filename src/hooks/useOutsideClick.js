
import { useEffect, useState, useRef, useCallback } from "react";

function useOnClickOutside(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);

  const ref = useRef(null);

  const handleClickOutside = useCallback((e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      setIsVisible(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { ref, isVisible, setIsVisible };
}

export default useOnClickOutside;