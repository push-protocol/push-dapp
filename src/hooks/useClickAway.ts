// React + Web3 Essentials
import { useEffect, useRef } from 'react';

export function useClickAway(ref1:any, ref2:any, onClickAway:()=>void):void{
  const callbackRef = useRef(onClickAway);
  useEffect(() => {
    callbackRef.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const closeDropdown = (e:Event) => {
      if (ref1 && ref2) {
        if (ref1.current && !ref1?.current.contains(e.target) && ref2.current && !ref2?.current.contains(e.target)) {
          callbackRef.current();
        }
      }
     else if (ref1) {
        if (ref1.current && !ref1?.current.contains(e.target)) {
          callbackRef.current();
        }
      }
     else if (ref2) {
        if (ref2.current && !ref2?.current.contains(e.target)) {
          callbackRef.current();
        }
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, [ref1]);
}
