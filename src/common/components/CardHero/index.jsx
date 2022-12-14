import PropTypes from 'prop-types';
import { CloseCardIcon } from './CloseCardIcon';
import { CardBody } from './CardBody';
import { close as CloseIcon, bag as BagIcon } from '@/common/components/Icon/icons';

/**
 * @param children - SVG icon or img tag, This place is for the icon of the card
 */

const CardHero = ({ title, description, stylesProps, onClose, children }) => {
  return (
    <div
      className={`${stylesProps} w-60 bg-neutral-white my-0 mx-auto rounded-2xl card--shadow  min-h-[230px]`}>
      <div className='flex flex-col p-2 mb'>
        <CloseCardIcon onClose={onClose}>
          <CloseIcon className='w-4' />
        </CloseCardIcon>
        <CardBody title={title} description={description}>
          {children}
        </CardBody>
      </div>
    </div>
  );
};

CardHero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stylesProps: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.element,
};

CardHero.defaultProps = {
  stylesProps: '',
  onClose: () => console.log('On Close function is not defined'),
  children: <BagIcon className='w-9' />,
};

export default CardHero;
