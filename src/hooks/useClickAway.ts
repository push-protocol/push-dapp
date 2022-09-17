import { useEffect, useRef } from "react";

export function useClickAway(ref1=null,ref2=null, onClickAway) {
    
  const callbackRef = useRef(onClickAway);
  useEffect(() => {
    callbackRef.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const closeDropdown = (e) => {
      if(ref1 && ref1.current && !ref1?.current.contains(e.target) && ref2 &&
         ref2.current && !ref2?.current.contains(e.target))
      {
        callbackRef.current(e);
      }
    }

    document.addEventListener('click',closeDropdown);

    return () => document.removeEventListener('click',closeDropdown);
  },[ref1])
}