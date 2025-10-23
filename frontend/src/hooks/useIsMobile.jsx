import { useEffect, useState } from "react";

const mobileWidth = window.innerWidth <= 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(mobileWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(mobileWidth);
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile, menuOpen, setMenuOpen, setIsMobile };
};

export default useIsMobile;
