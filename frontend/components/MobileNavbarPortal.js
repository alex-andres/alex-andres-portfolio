import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MobileNavbarPortal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <>{children}</>,
        document.querySelector("#mobile-nav-portal")
      )
    : null;
};

export default MobileNavbarPortal;
