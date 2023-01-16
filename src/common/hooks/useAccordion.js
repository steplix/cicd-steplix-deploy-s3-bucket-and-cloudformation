const { useRef, useState, useEffect } = require("react");

export const useAccordion = () => {
  const accordionRef = useRef(null);
  const [closeAccordion, setCloseAccordion] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!accordionRef.current.contains(event.target)) {
        setCloseAccordion(true);
      }

      if (accordionRef.current.contains(event.target)) {
        setCloseAccordion(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { ref: accordionRef, closeAccordion };
};
