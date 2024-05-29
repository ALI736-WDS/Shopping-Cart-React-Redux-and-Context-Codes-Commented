// import { useCart } from "../context/CartContext";

//Components
import { useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";

//Style
import styles from "./CheckoutPage.module.css";

function CheckoutPages() {
  // const [state, dispatch] = useCart();
  // console.log(state, dispatch);

  const state = useSelector((store) => store.cart);
  // console.log(state);

  // const clickHandler = (type, payload) => dispatch({ type, payload }); //payload ya data

  if (!state.itemsCounter)
    return (
      <div className={styles.empty}>
        <p> Empty </p>
      </div>
    );

  return (
    <div className={styles.container}>
      <BasketSidebar
        state={state}
        /* clickHandler={clickHandler} */
      />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}

            /* clickHandler={clickHandler} */
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPages;

// const score = JSON.parse(localStorage.getItem("score"));
// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
// localStorage.setItem("highScores", JSON.stringify(highScores));
// localStorage.removeItem("scores");

// localStorage.setItem("level", level);

// const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// const level = localStorage.getItem("level") || "medium";
// localStorage.setItem("score", JSON.stringify(score));
