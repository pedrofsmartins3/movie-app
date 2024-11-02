import React from "react";

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4">
      <img src="/assets/white_logo.svg" alt="movies_logo" className="h-14" />
      <p className="text-gray-400 text-sm">
        <span className="max-sm:hidden">Aviso sobre </span>cookies© 1996-2024 •
        Movies.com, Inc.{" "}
        <span className="max-sm:hidden">ou respetivas afiliadas</span>
      </p>
    </footer>
  );
}

export default Footer;
