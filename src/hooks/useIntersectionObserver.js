import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // You can adjust the threshold for better control
      // console.log(entry.target, 'is intersecting:', entry.isIntersecting);
      if (entry.isIntersecting) {
        setIsVisible(true);
        // If you want the animation to happen only once, uncomment the line below
        observer.unobserve(entry.target);
      } else {
        // If you want the animation to reset when it leaves the viewport,
        // and reappear when it re-enters, keep this else block.
        // For 'appear once' animations, you can remove this else block
        // or ensure setIsVisible(false) only happens after a full unobserve.
        setIsVisible(false); // Comment this out if you only want it to animate once and stay visible
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup: Disconnect observer when component unmounts
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [options]); // Re-run effect if options change (though usually they are static)

  return [elementRef, isVisible];
};

export default useIntersectionObserver;