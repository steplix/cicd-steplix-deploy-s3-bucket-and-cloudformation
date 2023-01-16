import { useState, useEffect } from "react";
import _ from "lodash";
import parse from 'html-react-parser';
import { useTranslation } from "next-export-i18n";
import { useMountainScroll } from "@/common/hooks/useMountainScroll";
import Icon from "@/common/components/Icon";
import StepInitial from "./contentSteps/stepInitial";
import StepEnd from "./contentSteps/stepEnd";
import CardHero from "@/common/components/CardHero";

const stepsByBreakpoint = [
  {
    id: 1,
    showNext: true,
    showPrevious: false,
    showRestart: false,
    scrollSize: 0,
  },
  {
    id: 2,
    showNext: true,
    showPrevious: true,
    showRestart: false,
    scrollSize: 155,
  },
  {
    id: 3,
    showNext: true,
    showPrevious: true,
    showRestart: false,
    scrollSize: 155,
  },
  {
    id: 4,
    showNext: true,
    showPrevious: true,
    showRestart: false,
    scrollSize: 270,
  },
  {
    id: 5,
    showNext: false,
    showPrevious: true,
    showRestart: true,
    scrollSize: 270,
  }
];

const MainHeader = () => {
  const { t } = useTranslation();
  const scrollRef = useMountainScroll();
  const [step, setStep] = useState(1);

  const scrollLeft = (scrollSize) => {
    setStep(_.max([1, step - 1]));

    if (step >= 1) {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft - scrollSize,
            behavior: "smooth",
          });
    }
  }

  const scrollRight = (scrollSize) => {
    setStep(_.min([5, step + 1]));

    if (step <= 5) {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft + scrollSize,
            behavior: "smooth",
          });
    }
  }

  const scrollInit = () => {
    setStep(1);

    scrollRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <header
      ref={scrollRef}
      className="overflow-x-scroll scroll-smooth scrollbar-hide overflow-y-hidden h-[569px]"
    >
      <div className="mainHeader w-[1088px] h-[492px] pt-[50px]">
        {step === 2 &&
          <div
            className="mountainStep w-[20px] h-[20px] top-[300px] left-[300px] animate-pulse"
            onMouseOver={() => {}}
            onClick={() => {}}
          />
        }
        {step === 3 &&
          <div
            className="mountainStep w-[20px] h-[20px] top-[146px] left-[482px] animate-pulse"
            onMouseOver={() => {}}
            onClick={() => {}}
          />
        }
        {step === 4 &&
          <div
            className="mountainStep w-[20px] h-[20px] top-[22px] left-[630px] animate-pulse"
            onMouseOver={() => {}}
            onClick={() => {}}
          />
        }
      </div>

      {step === 1 &&
        <div className="container absolute top-[150px]">
          <StepInitial />
        </div>
      }

      {(1 < step < 5) &&
        <div className="container absolute top-[118px]">
          <div className="ml-10">
            {(() => {
              switch (step) {
                case 2:
                  return <CardHero title={parse(t("MainHeader.stepOneTitle"))} description={t("MainHeader.stepOneDescription")} icon={<Icon name="bag" className="h-[40px] w-[40px]" />} />
                case 3:
                  return <CardHero title={parse(t("MainHeader.stepTwoTitle"))} description={t("MainHeader.stepTwoDescription")} icon={<Icon name="map" className="h-[40px] w-[40px]" />} />
                case 4:
                  return <CardHero title={parse(t("MainHeader.stepThreeTitle"))} description={t("MainHeader.stepThreeDescription")} icon={<Icon name="trophy" className="h-[40px] w-[40px]" />} />
              }
            })()}
          </div>
        </div>
      }

      {step === 5 &&
        <div className="container absolute top-[107px]">
          <StepEnd />
        </div>
      }

      <div className="container absolute top-[539px]">
        {stepsByBreakpoint[step-1].showPrevious &&
          <button
            className="h-[48px] w-[48px] transform translate-y-[-50%] bg-none rounded-full"
            onClick={() => scrollLeft(stepsByBreakpoint[step-1].scrollSize)}
          >
            <Icon name="back" className="h-[48px] w-[48px]" />
          </button>
        }
        {stepsByBreakpoint[step-1].showNext &&
          <button
            className="float-right h-[48px] w-[48px] transform translate-y-[-50%]"
            onClick={() => scrollRight(stepsByBreakpoint[step-1].scrollSize)}
          >
            <Icon name="forward" className="h-[48px] w-[48px]" />
          </button>
        }
        {stepsByBreakpoint[step-1].showRestart &&
          <button
            className="float-right h-[48px] w-[48px] transform translate-y-[-50%]"
            onClick={scrollInit}
          >
            <Icon name="restart" className="h-[48px] w-[48px]" />
          </button>
        }
      </div>
    </header>
  );
};

export default MainHeader;
