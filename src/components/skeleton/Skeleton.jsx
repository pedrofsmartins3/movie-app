import React from "react";
import { Skeleton as PrimeSkeleton } from "primereact/skeleton";

function Skeleton({ width = "100%", height = "100%", ...props }) {
  return <PrimeSkeleton {...props} width={width} height={height} />;
}

export default Skeleton;
