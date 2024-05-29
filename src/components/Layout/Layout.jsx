import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//svg
import { PiShoppingCartSimpleBold } from "react-icons/pi";

//Context
// import { useCart } from "../../context/CartContext";

//Style
import styles from "./Layout.module.css";

function Layout({ children }) {
  // const [state] = useCart();
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products"> Shop </Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
            {/* !!: tabdil be boolian ke 0 ro neshun nade */}
            {!!state.itemsCounter && <span> {state.itemsCounter} </span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}> Developed By ALI736-WDS </footer>
    </>
  );
}

export default Layout;
