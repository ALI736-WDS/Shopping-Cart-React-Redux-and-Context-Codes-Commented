import { createContext, useContext, useReducer } from "react";

//helpers
// import { sumProducts } from "../helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      state.selectedItems.find((item) => item.id === action.payload.id);
      state.selectedItems.push({ ...action.payload, quantity: 1 }); //meghdare avalie hengame add 1 hast
      // console.log(action)
      // localStorage.setItem("state", JSON.stringify(state));
      return {
        // selectedItems: [...state.selectedItems],
        ...state, //hamun code bala hast | hamun initialState hast
        ...sumProducts(state.selectedItems), //... az helpers: hesab kardane initialState
        checkout: false,
      };

    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      // localStorage.removeItem(action.payload.id);
      // localStorage.setItem("state", JSON.stringify(state));
      // localStorage.getItem("state");
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        /* inja natije nahaee dar newSelectedItems hast pas bayad update beshe vali dar ADD mostaghim 
        taghir dade shoe bud */
        ...sumProducts(newSelectedItems), //ke counter ham update beshe, kam o ziad beshe
      };

    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };

    default:
      throw Error("Invalid Action!");
  }
};

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  // localStorage.setItem("state", JSON.stringify(state));

  return (
    /* ecma 6 */
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

//tabdil be custom hook
const useCart = () => {
  // const result = useContext(CartContext);
  const { state, dispatch } = useContext(CartContext);
  // console.log(result);
  // localStorage.setItem("state", JSON.stringify(state));
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
