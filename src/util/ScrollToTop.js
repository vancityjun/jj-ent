import React, { useEffect } from "react";
import { withRouter } from "react-router";

const ScrollToTop = ({ location: { pathname }, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return children;
};

export default withRouter(ScrollToTop);
