import { useEffect, useState } from "react";
import _ from "lodash";
import { useTranslation } from "@/common/lib/i18n";
import { MOUNTAIN_STEPS } from '@/common/utils/constants';
import { useMountainScroll } from "@/common/hooks/useMountainScroll";
import { getShortBreakpoint } from "@/common/utils/methods";
import StepInitial from "./contentSteps/stepInitial";
import StepEnd from "./contentSteps/stepEnd";
import StepIntermediate from "./contentSteps/stepIntermediate";
import MountainStep from "@/common/components/MountainStep";
import ScrollButton from "./contentSteps/scrollButton";

const MainHeader = () => {
  const scrollRef = useMountainScroll();
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [stepsByBreakpoint, setStepsByBreakpoint] = useState(MOUNTAIN_STEPS['xs']);
  const [showStepIntermediate, setShowStepIntermediate] = useState({
    one: false,
    two: false,
    three: false,
  });
  const [showInitialState, setShowInitialState] = useState(true);

  useEffect(() => {
    if(typeof window !== 'undefined'){
      const breakpoint = getShortBreakpoint(window.innerWidth);
      setStepsByBreakpoint(MOUNTAIN_STEPS[breakpoint]);
    }
  }, []);

  useEffect(() => {
    if (showStepIntermediate.one || showStepIntermediate.two || showStepIntermediate.three) {
      setShowInitialState(false);
    } else {
      setShowInitialState(true);
    }
  }, [showStepIntermediate]);

  const scrollLeft = (scrollSize) => {
    setCurrentStep(_.max([1, currentStep - 1]));

    if (currentStep >= 1) {
        scrollRef.current.scrollTo({
            left: scrollRef.current.scrollLeft - scrollSize,
            behavior: "smooth",
          });
    }
  }

  const scrollRight = (scrollSize) => {
    setCurrentStep(_.min([stepsByBreakpoint.length, currentStep + 1]));

    if (currentStep <= stepsByBreakpoint.length) {
      if (showStepIntermediate.one || showStepIntermediate.two || showStepIntermediate.three)
        setShowStepIntermediate({ one: false, two: false, three: false });

      scrollRef.current.scrollTo({
          left: scrollRef.current.scrollLeft + scrollSize,
          behavior: "smooth",
        });
    }
  }

  const scrollInit = () => {
    setCurrentStep(1);

    scrollRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className="relative">
      <div ref={scrollRef}  className="containerScroll overflow-x-scroll scroll-smooth scrollbar-hide overflow-y-hidden whitespace-nowrap lg:h-[626px] xl:h-[572px] 2xl:container 2xl:p-0">
        <div className="relative bg-mountain bg-no-repeat bg-contain sm:bg-cover lg:bg-contain w-[1088px] sm:w-[1091px] lg:w-[1725px] h-[536px] sm:h-[538px] lg:h-[824.15px] top-[59px] xl:top-6 sm:top-[50px] lg:translate-x-[-18px] 2xl:translate-x-[-291px] lg:z-20">
          {stepsByBreakpoint[currentStep-1].id === 1 &&
            <>
              <button aria-label={t("MainHeader.buttonAriaLabel.forward")} className="absolute hidden lg:block top-[458px] left-[463px] lg:z-20"
                onClick={() =>
                  setShowStepIntermediate({ one: !showStepIntermediate.one, two: false, three: false })
                }
                onMouseEnter={() => 
                  setShowStepIntermediate({ one: !showStepIntermediate.one, two: false, three: false })
                }
                onMouseLeave={() => 
                  setShowStepIntermediate({ one: false, two: false, three: false })
                }
              >
                <MountainStep/>
              </button>
              <button aria-label={t("MainHeader.buttonAriaLabel.forward")} className="absolute hidden lg:block top-[210px] left-[753px] lg:z-20"
                onClick={() =>
                  setShowStepIntermediate({ one: false, two: !showStepIntermediate.two, three: false })
                }
                onMouseEnter={() =>
                  setShowStepIntermediate({ one: false, two: !showStepIntermediate.two, three: false })
                }
                onMouseLeave={() =>
                  setShowStepIntermediate({ one: false, two: false, three: false })
                }
              >
                <MountainStep/>
              </button>
              <button aria-label={t("MainHeader.buttonAriaLabel.forward")} className="absolute hidden lg:block top-[18px] left-[988px] lg:z-20"
                onClick={() =>
                  setShowStepIntermediate({ one: false, two: false, three: !showStepIntermediate.three })
                }
                onMouseEnter={() =>
                  setShowStepIntermediate({ one: false, two: false, three: !showStepIntermediate.three })
                }
                onMouseLeave={() =>
                  setShowStepIntermediate({ one: false, two: false, three: false })
                }
              >
                <MountainStep/>
              </button>
            </>
          }
        </div>
      </div>

      {stepsByBreakpoint[currentStep-1].id === 1 && showInitialState &&
        <div className="container absolute top-[94px] sm:top-[98px] lg:top-[140px] xl:top-[120px] lg:z-10">
          <StepInitial/>
        </div>
      }

      {(stepsByBreakpoint[currentStep-1].id === 2 || showStepIntermediate.one) &&
        <div className="container absolute top-[62px] sm:top-[72px]">
          <StepIntermediate
            cardInfo={{
              title: "MainHeader.stepOneTitle",
              description: "MainHeader.stepOneDescription",
              icon: "bag"
            }}
            stepPosition={{
              top: "top-[275px] sm:top-[268px]",
              left: "left-[265px] sm:left-[256px]"
            }}
            dashLine={{
              name: "line-step-1",
              position: {
                top: "top-[135px] lg:top-[285px] xl:top-[265px] 2xl:top-[265px]",
                left: "left-[95px] lg:left-[164px] xl:left-[150px] 2xl:left-[120px]"
              },
              size: {
                width: "w-[190.4px] lg:w-[246.39px] 2xl:w-[54.34px]",
                height: "h-[162px] lg:h-[174px] 2xl:h-[173.88px]"
              },
            }}
          />
        </div>
      }
      {(stepsByBreakpoint[currentStep-1].id === 3 || showStepIntermediate.two) &&
        <div className="container absolute top-[62px] sm:top-[72px]">
          <StepIntermediate
            cardInfo={{
              title: "MainHeader.stepTwoTitle",
              description: "MainHeader.stepTwoDescription",
              icon: "map"
            }}
            stepPosition={{
              top: "top-[120px] sm:top-[108px]",
              left: "left-[292px] sm:left-[445px]"
            }}
            dashLine={{
              name: "line-step-2",
              position: {
                top: "top-[82px] lg:top-[140px] xl:top-[110px] 2xl:top-[112px]",
                left: "left-[245px] lg:left-[305px] xl:left-[296px] 2xl:left-[23px]",
              },
              size: {
                width: "w-[225.5px] lg:w-[390px]",
                height: "h-[86.06px] lg:h-[90px]",
              },
            }}
          />
        </div>
      }
      {(stepsByBreakpoint[currentStep-1].id === 4 || showStepIntermediate.three) &&
        <div className="container absolute top-[62px] sm:top-[72px]">
          <StepIntermediate
            cardInfo={{
              title: "MainHeader.stepThreeTitle",
              description: "MainHeader.stepThreeDescription",
              icon: "trophy"
            }}
            stepPosition={{
              top: "top-[0px] sm:top-[-17px]",
              left: "left-[288px] sm:left-[446px]"
            }}
            dashLine={{
              name: "line-step-3",
              position: {
                top: "top-[5px] lg:top-[33px] xl:top-[0px] 2xl:top-[0px]",
                left: "left-[136px] lg:left-[300px] 2xl:left-[26px]",
              },
              size: {
                width: "w-[358.5px] lg:w-[620px]",
                height: "h-[58.5px] lg:h-[140px]",
              },
            }}
          />
        </div>
      }

      {stepsByBreakpoint[currentStep-1].id === 5 &&
        <div className="container absolute cardStepEndAnimation top-[59px] sm:top-[72px] lg:top-[109px]">
          <StepEnd/>
        </div>
      }

      <div className="container absolute top-[483px] lg:top-[461.4px] xl:top-[427px] lg:z-20">
        <ScrollButton
          isVisible={stepsByBreakpoint[currentStep-1].showPrevious}
          icon="back"
          scrollAction={() => scrollLeft(stepsByBreakpoint[currentStep-1].scrollSizePrevious)}
          customClass="float-left lg:float-right"
          ariaLabel={t("MainHeader.buttonAriaLabel.backward")}
        />

        <ScrollButton
          isVisible={stepsByBreakpoint[currentStep-1].showNext}
          icon="forward"
          scrollAction={() => scrollRight(stepsByBreakpoint[currentStep-1].scrollSizeNext)}
          customClass="float-right lg:float-left lg:z-20"
          ariaLabel={t("MainHeader.buttonAriaLabel.forward")}
        />

        <ScrollButton
          isVisible={stepsByBreakpoint[currentStep-1].showRestart}
          icon="restart"
          scrollAction={() => scrollInit()}
          customClass="float-right"
          ariaLabel={t("MainHeader.buttonAriaLabel.reset")}
        />
      </div> 
    </header>
  );
};

export default MainHeader;
