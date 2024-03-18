import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { useTranslation } from '@/pages/lib/i18n';
import CardHero from '@/common/components/CardHero';
import MountainStep from '@/common/components/MountainStep';

const StepIntermediate = ({ cardInfo, stepPosition, dashLine }) => {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div
        className={`absolute hidden cardStepAnimation ${dashLine.name} ${dashLine.position.top} ${dashLine.position.left} ${dashLine.size.width} ${dashLine.size.height}`}
      />
      <div className={`absolute lg:hidden ${stepPosition.top} ${stepPosition.left}`}>
        <MountainStep />
      </div>
      <div className="absolute flex justify-center sm:block w-full">
        <CardHero
          key={t(cardInfo.title)}
          description={t(cardInfo.description)}
          icon={cardInfo.icon}
          title={parse(t(cardInfo.title))}
        />
      </div>
    </div>
  );
};

StepIntermediate.propTypes = {
  cardInfo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
  }),
  stepPosition: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  dashLine: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
    }),
    size: PropTypes.shape({
      width: PropTypes.string,
      height: PropTypes.string,
    }),
  }),
};

export default StepIntermediate;
