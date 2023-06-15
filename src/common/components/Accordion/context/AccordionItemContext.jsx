import { createContext, useContext, useEffect, useReducer } from 'react';

import { useGlobalAccordion } from './AccordionGlobalContext';

// create a context for the accordion
const AccordionItemContext = createContext({});

// create a custom hook to use the context
export const useItemAccordion = () => useContext(AccordionItemContext);

const accordionItemReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW':
      return { ...state, toggleItem: action.payload };

    case 'ROTATE_CHEVRON':
      return { ...state, rotate: action.payload };

    default:
      return state;
  }
};

const INITIAL_ACCORDION_STATE = {
  toggleItem: false,
  rotate: false,
};

// create a component to wrap the accordion
const AccordionItemProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(accordionItemReducer, INITIAL_ACCORDION_STATE);
  const { setItemId: setGlobalItemId, globalId, setItemsIds } = useGlobalAccordion();

  const { id } = props;

  useEffect(() => {
    if (!globalId) return;
    if (id !== globalId) {
      dispatch({ type: 'TOGGLE_SHOW', payload: false });
      dispatch({ type: 'ROTATE_CHEVRON', payload: false });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalId, id]);

  useEffect(() => {
    setItemsIds(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const toggleShow = () => {
    dispatch({ type: 'TOGGLE_SHOW', payload: !state.toggleItem });
    dispatch({ type: 'ROTATE_CHEVRON', payload: !state.rotate });
  };

  const closeItem = () => {
    dispatch({ type: 'TOGGLE_SHOW', payload: false });
    dispatch({ type: 'ROTATE_CHEVRON', payload: false });
  };

  const setItemId = (id) => {
    setGlobalItemId(id);
  };

  return (
    <AccordionItemContext.Provider value={{ ...props, ...state, toggleShow, setItemId, closeItem }}>
      {children}
    </AccordionItemContext.Provider>
  );
};

export default AccordionItemProvider;
