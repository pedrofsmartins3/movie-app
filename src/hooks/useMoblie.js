import React, { useEffect, useState } from "react";

export function useMobile(breakPoint = "640px") {
  const [isUnder, setIsUnder] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakPoint})`);

    const handleResize = () => {
      setIsUnder(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    handleResize();

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [breakPoint]);

  return { isUnder };
}
