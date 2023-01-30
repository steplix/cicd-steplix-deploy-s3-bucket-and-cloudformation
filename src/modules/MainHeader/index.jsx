import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import parse from 'html-react-parser';
import _ from "lodash";
import { LOCALE_SLUGS, MOUNTAIN_STEPS } from '@/common/utils/constants';
import { useTranslation } from "@/common/lib/i18n";
import { useMountainScroll } from "@/common/hooks/useMountainScroll";
import { getShortBreakpoint } from "@/common/utils/methods";
import Icon from "@/common/components/Icon";
import StepInitial from "./contentSteps/stepInitial";
import StepEnd from "./contentSteps/stepEnd";
import CardHero from "@/common/components/CardHero";

const MainHeader = ({ locale }) => {
  const { t } = useTranslation(locale);
  const scrollRef = useMountainScroll();
  const [stepsByBreakpoint, setStepsByBreakpoint] = useState(MOUNTAIN_STEPS['xs']);

  const [step, setStep] = useState(1);
  const [steps, setSteps] = useState({
    one: false,
    two: false,
    three: false
  });
  const [showInitialState, setShowInitialState] = useState(true);

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
    setStep(_.min([stepsByBreakpoint.length, step + 1]));

    if (step <= stepsByBreakpoint.length) {
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

  useEffect(() => {
    if(typeof window !== undefined){
      const breakpoint = getShortBreakpoint(window.innerWidth);
      setStepsByBreakpoint(MOUNTAIN_STEPS[breakpoint]);
     }
  }, []);

  useEffect(() => {
    if (steps.one || steps.two || steps.three) {
      setShowInitialState(false);
    } else {
      setShowInitialState(true);
    }
  }, [steps]);
  
  return (
    <header
      ref={scrollRef}
      className="overflow-x-scroll scroll-smooth scrollbar-hide overflow-y-hidden h-[569px] lg:h-[889px]"
    >
      <div className="mainHeader w-[1088px] sm:w-[1091px] lg:w-[1725px] h-[492px] sm:h-[538px] lg:h-[780px] lg:translate-x-[-18px]">
        <div className="block lg:hidden">
          {step === 2 &&
            <>
              <div className="mountainStep w-[20px] h-[20px] top-[300px] left-[300px] sm:left-[314px] animate-pulse"/>
              <div className="hidden sm:block line-step-1 w-[190px] h-[162px] top-[134px] left-[137px]"/>
            </>
          }
          {step === 3 &&
            <>
              <div className="mountainStep w-[20px] h-[20px] top-[146px] left-[482px] sm:left-[502px] animate-pulse"/>
              <div className="hidden sm:block line-step-2 w-[225px] h-[86px] top-[84px] left-[285px]"/>
            </>
          }
          {step === 4 &&
            <>
              <div className="mountainStep w-[20px] h-[20px] top-[22px] left-[630px] sm:left-[657px] animate-pulse"/>
              <div className="hidden sm:block line-step-3 w-[358px] h-[58px] top-[12px] left-[325px]"/>
            </>
          }
        </div>
        <div className="hidden lg:block">
          {step === 1 &&
            <>
              <div
                className="mountainStep w-[20px] h-[20px] top-[470px] left-[479px] animate-pulse"
                onClick={() => setSteps({ one: !steps.one, two: false, three: false })}
              />
              <div
                className="mountainStep w-[20px] h-[20px] top-[210px] left-[768px] animate-pulse"
                onClick={() => setSteps({ one: false, two: !steps.two, three: false, })}
              />
              <div
                className="mountainStep w-[20px] h-[20px] top-[0px] left-[1006px] animate-pulse"
                onClick={() => setSteps({ one: false, two: false, three: !steps.three })}
              />
            </>
          }
        </div>
      </div>

      <div className="block lg:hidden">
        {step === 1 &&
          <div className="container absolute top-[150px] sm:top-[160px] lg:top-[240px] xl:top-[221px] mainTitle">
            <StepInitial />
          </div>
        }

        {(1 < step < 5) &&
          <div className="container absolute top-[118px] sm:top-[134px]">
            <div className="ml-10 sm:ml-0">
                {(() => {
                  switch (step) {
                    case 2:
                      return (
                        <CardHero
                          key={t("MainHeader.stepOneTitle")}
                          title={parse(t("MainHeader.stepOneTitle"))}
                          description={t("MainHeader.stepOneDescription")}
                          icon={<Icon name="bag" className="h-[40px] w-[40px]" />}
                        />
                      );
                    case 3:
                      return (
                        <CardHero
                          key={t("MainHeader.stepTwoTitle")}
                          title={parse(t("MainHeader.stepTwoTitle"))}
                          description={t("MainHeader.stepTwoDescription")}
                          icon={<Icon name="map" className="h-[40px] w-[40px]" />}
                        />
                      );
                    case 4:
                      return (
                        <CardHero
                          key={t("MainHeader.stepThreeTitle")}
                          title={parse(t("MainHeader.stepThreeTitle"))}
                          description={t("MainHeader.stepThreeDescription")}
                          icon={<Icon name="trophy" className="h-[40px] w-[40px]" />}
                        />
                      );
                  }
                })()}
            </div>
          </div>
        }

        {step === 5 &&
          <div className="container absolute top-[107px] lg:top-[217px] cardStep">
            <StepEnd />
          </div>
        }

        <div className="container absolute top-[539px]">
          {stepsByBreakpoint[step-1].showPrevious &&
            <button
              className="h-[48px] w-[48px] transform translate-y-[-50%] sm:translate-y-[70%] bg-none rounded-full"
              onClick={() => scrollLeft(stepsByBreakpoint[step-1].scrollSize)}
            >
              <Icon name="back" className="h-[48px] w-[48px]" />
            </button>
          }
          {stepsByBreakpoint[step-1].showNext &&
            <button
              className="float-right h-[48px] w-[48px] transform translate-y-[-50%] sm:translate-y-[70%]"
              onClick={() => scrollRight(stepsByBreakpoint[step-1].scrollSize)}
            >
              <Icon name="forward" className="h-[48px] w-[48px]" />
            </button>
          }
          {stepsByBreakpoint[step-1].showRestart &&
            <button
              className="float-right h-[48px] w-[48px] transform translate-y-[-50%] sm:translate-y-[70%]"
              onClick={scrollInit}
            >
              <Icon name="restart" className="h-[48px] w-[48px]" />
            </button>
          }
        </div>
      </div>

      <div className="hidden lg:block">
        {step === 1 && showInitialState &&
          <div className="hidden lg:block container absolute w-auto top-[150px] sm:top-[160px] lg:top-[240px] xl:top-[221px] mainTitle">
            <StepInitial />
          </div>
        }

        <div className="container absolute w-auto top-[219px]">
          {steps.one &&
            <>
              <CardHero
                key={t("MainHeader.stepOneTitle")}
                title={parse(t("MainHeader.stepOneTitle"))}
                description={t("MainHeader.stepOneDescription")}
                icon={<Icon name="bag" className="h-[40px] w-[40px]" />}
              />
              <div className="line-step-1 w-[246.39px] h-[174px] top-[-28px] left-[160px] xl:left-[145px]"/>
            </>
          }
          {steps.two &&
            <>
              <CardHero
                key={t("MainHeader.stepTwoTitle")}
                title={parse(t("MainHeader.stepTwoTitle"))}
                description={t("MainHeader.stepTwoDescription")}
                icon={<Icon name="map" className="h-[40px] w-[40px]" />}
              />
              <div className="line-step-2 w-[396px] h-[90px] top-[-120px] left-[302px] xl:left-[285px]"/>
            </>
          }
          {steps.three &&
            <>
              <CardHero
                key={t("MainHeader.stepThreeTitle")}
                title={parse(t("MainHeader.stepThreeTitle"))}
                description={t("MainHeader.stepThreeDescription")}
                icon={<Icon name="trophy" className="h-[40px] w-[40px]" />}
              />
              <div className="line-step-3 w-[640px] h-[137px] top-[-274px] left-[302px] xl:left-[285px]"/>
            </>
          }
        </div>

        {step === 2 &&
          <div className="container absolute top-[107px] lg:top-[217px] cardStep">
            <StepEnd />
          </div>
        }

        <div className="container absolute top-[561.4px]">
          {stepsByBreakpoint[step-1].showNext && showInitialState &&
            <button
              className="h-[57.2px] w-[57.2px] xl:h-[70.4px] xl:w-[70.4px]"
              onClick={() => scrollRight(stepsByBreakpoint[step-1].scrollSize)}
            >
              <Icon name="forward" className="h-[57.2px] w-[57.2px] xl:h-[70.4px] xl:w-[70.4px]" />
            </button>
          }
          {stepsByBreakpoint[step-1].showPrevious &&
            <button
              className="float-right h-[57.2px] w-[57.2px] xl:h-[70.4px] xl:w-[70.4px]"
              onClick={() => scrollLeft(stepsByBreakpoint[step-1].scrollSize)}
            >
              <Icon name="back" className="h-[57.2px] w-[57.2px] xl:h-[70.4px] xl:w-[70.4px]" />
            </button>
          }
        </div>
      </div>
    </header>
  );
};

MainHeader.propTypes = {
    locale: PropTypes.oneOf(LOCALE_SLUGS)
}


export default MainHeader;
