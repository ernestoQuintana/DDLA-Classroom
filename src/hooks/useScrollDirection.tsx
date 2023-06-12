import { useState, useEffect } from 'react';

const useScrollDirection = ():boolean => {
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsScrollingUp(currentScrollPos < prevScrollPos);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
    return isScrollingUp;
  };
  
  export default useScrollDirection;