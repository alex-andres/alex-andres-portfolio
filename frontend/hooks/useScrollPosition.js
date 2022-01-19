import { useEffect, useState } from "react";

export default function useScrollPositon() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function updateScrollPosition() {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    return () =>
      window.removeEventListener("scroll", updateScrollPosition, {
        passive: true,
      });
  }, []);

  return scrollPosition;
}
