import { createContext, useContext, useEffect, useReducer } from 'react';

const AccordionGlobalContext = createContext({});

export const useGlobalAccordion = () => useContext(AccordionGlobalContext);

const accordionGlobalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEM_ID':
      return { ...state, globalId: action.payload };

    case 'SET_CHEVRON':
      return { ...state, chevron: action.payload };

    case 'SET_ITEMS_IDS':
      return { ...state, itemsIds: [...state.itemsIds, action.payload] };

    default:
      return state;
  }
};

const INITIAL_ACCORDION_STATE = {
  chevron: false,
  globalId: null,
  itemsIds: [],
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
  const setItemsIds = (ids) => dispatch({ type: 'SET_ITEMS_IDS', payload: ids });

  return (
    <AccordionGlobalContext.Provider value={{ ...props, ...state, setItemId, setItemsIds }}>
      {children}
    </AccordionGlobalContext.Provider>
  );
};

export default AccordionGlobalProvider;
