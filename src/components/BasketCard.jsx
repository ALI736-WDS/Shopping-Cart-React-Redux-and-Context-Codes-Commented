//redux
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

//function
import { shortenText } from "../helpers/helper";

//svg
import { MdDeleteOutline } from "react-icons/md";

//Styles
import styles from "./BasketCard.module.css";
import { useDispatch } from "react-redux";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;

  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p> {shortenText(title)} </p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button
            onClick={
              () =>
                dispatch(
                  removeItem(data)
                ) /* clickHandler("REMOVE_ITEM", data) */
            }
          >
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() =>
              /* clickHandler("DECREASE", data) */ //for context
              dispatch(decrease(data))
            }
          >
            -
          </button>
        )}
        <span> {data.quantity} </span>
        <button
          onClick={() =>
            /* clickHandler("INCREASE", data) */ //for context
            dispatch(increase(data))
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCard;
