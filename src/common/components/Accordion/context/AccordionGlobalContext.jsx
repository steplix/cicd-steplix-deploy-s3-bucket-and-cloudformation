import { createContext, useContext, useEffect, useReducer } from 'react';

// create a context for the accordion
const AccordionGlobalContext = createContext({});

// create a custom hook to use the context
export const useGlobalAccordion = () => useContext(AccordionGlobalContext);

const accordionGlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEM_ID':
      return { ...state, globalId: action.payload };

    case 'SET_CHEVRON':
      return { ...state, chevron: action.payload };
    default:
      return state;
  }
};

const INITIAL_ACCORDION_STATE = {
  chevron: false,
  globalId: null,
};

const AccordionGlobalProvider = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(accordionGlobalReducer, INITIAL_ACCORDION_STATE);

  useEffect(() => {
    if (props.chevron) {
      dispatch({ type: 'SET_CHEVRON', payload: true });

      return;
    }

    dispatch({ type: 'SET_CHEVRON', payload: false });
  }, [props.chevron]);

  const setItemId = (id) => dispatch({ type: 'SET_ITEM_ID', payload: id });

  return (
    <AccordionGlobalContext.Provider value={{ ...props, ...state, setItemId }}>
      {children}
    </AccordionGlobalContext.Provider>
  );
};

export default AccordionGlobalProvider;
