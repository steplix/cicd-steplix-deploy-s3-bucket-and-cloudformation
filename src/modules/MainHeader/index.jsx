import React from "react";
import { useTranslation } from "next-export-i18n";
import { useMountainScroll } from "@/common/hooks/useMountainScroll";
import Icon from "@/common/components/Icon";
import StepOne from "./contentSteps/stepOne";
import MountainStep from "@/common/components/MountainStep";

const scrollSizes = {
  xs: 10,
  sm: 15,
  md: 20,
  lg: 25,
  xl: 30,
};

const stepsByBreakpoint = [
  {
    id: 0,
    breakpoints: ["xs", "sm", "md", "lg", "xl"],
    showNext: true,
    showPrevious: false,
    showRestart: false,
    scrollSize: 100,
    content: <StepOne />,
  },
  {
    id: 1,
    breakpoints: ["xs", "sm", "md"],
    showNext: true,
    showPrevious: true,
    showRestart: false,
    content: "component content 2",
  },
  {
    id: 2,
    breakpoints: ["xs", "sm", "md"],
    showNext: true,
    showPrevious: true,
    showRestart: false,
    content: "component content 3",
  },
  {
    id: 3,
    breakpoints: ["xs", "sm", "md"],
    showNext: true,
    showPrevious: true,
    showRestart: false,
    content: "component content 4",
  },
  {
    id: 4,
    breakpoints: ["xs", "sm", "md"],
    showNext: false,
    showPrevious: true,
    showRestart: true,
    content: "component content 5",
  },
  {
    id: 5,
    breakpoints: ["lg", "xl"],
    showNext: false,
    showPrevious: true,
    showRestart: false,
    content: "component content 5",
  },
];

const MainHeader = () => {
  const { t } = useTranslation();
  const scrollRef = useMountainScroll();
  const [step, setStep] = React.useState(0);

  React.useEffect(() => console.log("step: ", step), [step]);

  return (
    <header
      ref={scrollRef}
      className="overflow-x-scroll scroll-smooth scrollbar-hide overflow-y-hidden"
    >
      <div className="mainHeader w-[1088px] h-[492px] pt-[50px]">
        <div
            className="mountainStep w-[20px] h-[20px] top-[300px] left-[300px]"
            onMouseOver={() => console.log("entra1")}
            onClick={() => console.log("entra1")}
        />
        <div
            className="mountainStep w-[20px] h-[20px] top-[146px] left-[482px]"
            onMouseOver={() => console.log("entra2")}
            onClick={() => console.log("entra2")}
        />
        <div
            className="mountainStep w-[20px] h-[20px] top-[22px] left-[630px]"
            onMouseOver={() => console.log("entra3")}
            onClick={() => console.log("entra3")}
        />
      </div>
      <div className="container px-4 absolute top-[150px] w-">
        <StepOne />
      </div>
      <div className="container px-4 absolute top-[539px]">
        <button
          className="h-[48px] w-[48px] transform translate-y-[-50%] bg-none rounded-full"
          onClick={(e) => setStep(step - 1)}
        >
          <Icon name="back" className="h-[48px] w-[48px]" />
        </button>
        <button
          className="float-right h-[48px] w-[48px] transform translate-y-[-50%]"
          onClick={(e) => setStep(step + 1)}
        >
          <Icon name="forward" className="h-[48px] w-[48px]" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
