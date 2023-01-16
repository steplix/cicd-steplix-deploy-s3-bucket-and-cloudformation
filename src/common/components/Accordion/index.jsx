import { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import AccordionItemProvider, {
  useItemAccordion,
} from "./context/AccordionItemContext";
import AccordionGlobalProvider, {
  useGlobalAccordion,
} from "./context/AccordionGlobalContext";

import Icon from "@/common/components/Icon";

// eslint-disable-next-line react/display-name
const Accordion = forwardRef(({ children, ...props }, ref) => {
  return (
    <AccordionGlobalProvider {...props}>
      <div
        ref={ref}
        className="flex flex-col w-full m-auto gap-4 lg:grid lg:grid-cols-2 lg:gap-x-6 xl:grid-cols-3"
      >
        {children}
      </div>
    </AccordionGlobalProvider>
  );
});

Accordion.Title = function AccordionTitle({ children, ...props }) {
  return (
    <h1
      className="text-4xl leading-5 mt-0 mb-2 text-black text-center"
      {...props}
    >
      {children}
    </h1>
  );
};

Accordion.Item = function AccordionItem({ children, ...props }) {
  return (
    <AccordionItemProvider {...props}>
      <div className="w-full h-[fit-content] no-highlight accordion--shadow rounded-2xl">
        <div className="text-black relative">{children}</div>
      </div>
    </AccordionItemProvider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...props }) {
  const { id, setItemId, toggleShow, rotate, closeItem } = useItemAccordion();
  const { chevron, closeAccordion } = useGlobalAccordion();

  const onClick = () => {
    toggleShow();
    setItemId(id);
  };

  useEffect(() => {
    if (closeAccordion) {
      closeItem();
      setItemId(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeAccordion]);

  return (
    <>
      <div
        className={`transition-all flex justify-between cursor-pointer text-2xl px-6 py-5 font-normal select-none items-center z-50`}
        onClick={onClick}
        {...props}
      >
        {children}
        {chevron && (
          <span
            className={`${rotate ? "rotate-180" : "rotate-0"} transition-all `}
          >
            <Icon name="chevronDown" className="w-6" fill="#00A9E0" />
          </span>
        )}
      </div>
    </>
  );
};

Accordion.Body = function AccordionHeader({ children }) {
  const { toggleItem } = useItemAccordion();

  const [maxH, setMaxH] = useState("h-0");

  useEffect(() => {
    if (toggleItem) {
      return setMaxH("h-full px-6 pb-4 pt-0");
    }

    return setMaxH("h-0 p-0");
  }, [toggleItem]);

  return (
    <>
      <div
        className={`rounded-b-2xl text-[13px] font-normal whitespace-pre-wrap select-none overflow-hidden ${maxH}`}
      >
        {children}
      </div>
    </>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  chevron: PropTypes.bool,
};

export default Accordion;