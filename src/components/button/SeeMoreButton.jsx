import { Button } from "primereact/button";
import React from "react";

function SeeMoreButton({
  label = "Ver mais",
  icon = "pi pi-plus-circle",
  variant = "",
  ...props
}) {
  const style =
    variant === "small" ? "p-2 text-md" : "py-3 text-lg px-4 min-w-[150px]";
  return (
    <Button
      label={label}
      icon={variant === "small" ? null : icon}
      iconPos="right"
      className={`border border-gray-400 bg-gray-400 font-bold rounded-lg gap-2 hover:bg-black hover:border hover:border-white hover:shadow-md hover:shadow-gray-600 ${style}`}
      {...props}
    />
  );
}

export default SeeMoreButton;
