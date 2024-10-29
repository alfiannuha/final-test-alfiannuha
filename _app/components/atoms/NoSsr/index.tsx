/* eslint-disable react/jsx-fragments */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-multi-assign */
/* eslint-disable react/display-name */
import React from "react";
import useEnhancedEffect from "@/hooks/useEnchancedEffect";

const NoSsr = (props: any) => {
  const { children, defer = false, fallback = null } = props;
  const [mountedState, setMountedState] = React.useState(false);

  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);

  React.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]);

  // We need the Fragment here to force react-docgen to recognise NoSsr as a component.
  return <React.Fragment>{mountedState ? children : fallback}</React.Fragment>;
};

export default NoSsr;
