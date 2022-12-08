import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CloseCardIcon } from './CloseCardIcon';
import { CardBody } from './CardBody';
import { close as CloseIcon } from '@/common/components/Icon/icons';

const HeroCard = ({
  title,
  description,
  stylesProps,
  spacing,
  size = 'w-8/12 sm:w-6/12 md:w-4/12 lg:w-3/12',
  onClose,
  children,
}) => {
  const spacingMemo = useMemo(() => `${spacing}`, [spacing]);

  return (
    <div
      className={`${stylesProps} ${size} bg-neutral-white border-2 border-blue my-0 mx-auto rounded-2xl shadow-steplix  min-h-[250px]`}>
      <div className='flex flex-col p-2 mb'>
        <CloseCardIcon space={spacingMemo} onClose={onClose}>
          <CloseIcon className='w-4' />
        </CloseCardIcon>
        <CardBody space={spacingMemo} title={title} description={description}>
          {children}
        </CardBody>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  stylesProps: PropTypes.string,
  spacing: PropTypes.string,
  size: PropTypes.string,
  onClose: PropTypes.func,
  CardIcon: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeIcon: PropTypes.element,
};

HeroCard.defaultProps = {
  stylesProps: '',
  titleStylesProps: '',
  descriptionStylesProps: '',
  spacing: '',
};

export default HeroCard;
