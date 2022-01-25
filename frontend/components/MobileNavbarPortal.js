// import { useEffect, useState } from "react";
// import { createPortal } from "react-dom";

// const MobileNavbarPortal = ({ children }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     return () => setMounted(false);
//   }, []);

//   return mounted
//     ? createPortal(
//         <>{children}</>,
//         document.querySelector("#mobile-nav-portal")
//       )
//     : null;
// };

// export default MobileNavbarPortal;
// import React, { useEffect, useRef } from "react";
// import { useMenuContext } from "../../state/Menu";
// import Portal from "@reach/portal";
