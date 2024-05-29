import { Link } from "react-router-dom";

//redux 
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";

//svg
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

//Components
// import { useCart } from "../context/CartContext";

//helpers
import { productQuantity, shortenText } from "../helpers/helper";

//Styles
import styles from "./Card.module.css";

function Card({ data }) {
  // console.log(data);
  const { id, title, image, price } = data;
  // const result = useCart();
  // const [state, dispatch] = useCart();
  // console.log(state);

  //const state hamun initialState mishe az store.cart
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // console.log(state);

  /* 
  // const s = JSON.parse(localStorage.getItem("state"));
  // console.log(s.itemsCounter);
  // localStorage.setItem("state", JSON.stringify(state));
  */

  const quantity = productQuantity(state, id);
  // const quantity = 0; //vaghti dar hale taghirat contex be redux budim 0 gozashtim
  // console.log(quantity);

  /* clickHandler ham baraye context estefade mishod vali dar redux mostaghim dispatch mikonim */
  // const clickHandler = (type) => {
  // dispatch({ type, payload: data }); //ecma6
  // localStorage.setItem("state", JSON.stringify(state));
  // };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3> {shortenText(title)} </h3>
      <p> {price} $</p>
      <div className={styles.action}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            // <button onClick={() => clickHandler("REMOVE_ITEM")}>
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}> - </button>
          )}

          {!!quantity && <span> {quantity} </span>}

          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}> + </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
