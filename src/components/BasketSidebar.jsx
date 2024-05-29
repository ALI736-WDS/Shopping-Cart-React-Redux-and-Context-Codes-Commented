//redux
import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";

//svg
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";

//Style
import styles from "./BasketSidebar.module.css";

//for context
// function BasketSidebar({ state, clickHandler }) {

//redux
function BasketSidebar({ state }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p> Total: </p>
        <span> {state.total} $</span>
      </div>
      <div>
        <FaHashtag />
        <p> Quantity: </p>
        <span> {state.itemsCounter} </span>
      </div>
      <div>
        <BsPatchCheck />
        <p> Status: </p>
        <span> {!state.checkout && "Pending"} </span>
      </div>
      <button
        onClick={
          () => dispatch(checkout())
          /* clickHandler("CHECKOUT") */
        }
      >
        Checkout
      </button>
    </div>
  );
}

export default BasketSidebar;
