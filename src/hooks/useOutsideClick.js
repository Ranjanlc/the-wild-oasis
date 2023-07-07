import { useEffect, useRef } from 'react';

const useOutsideClick = (handler, listenCapturing = true) => {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      // On dom element we can call contain method which tells us whether an element is contained in it or not.
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener('click', handleClick, listenCapturing);
    return () => {
      document.removeEventListener('click', handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);
  return ref;
};
export default useOutsideClick;
