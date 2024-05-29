import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

//Context
// import { useProductDetails } from "../context/ProductContext";

//Components
import Loader from "../components/Loader";

//Redux Store
import { fetchProducts } from "../features/product/productSlice";

//svg
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

//Styles
import styles from "./DetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";

function DetailsPages() {
  const { id } = useParams();

  const dispatch = useDispatch();

  //in useEffect mostaghel az baghie kar mikone va agar fetchProducts dar useEffect dige ejra mishod to halghe namotanahi mioftad
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // const productDetails = useProductDetails(+id);
  const productDetails = useSelector(
    (store) => store.product.products.find((product) => product.id === +id) //product of store | products of api
  ); //+id ke inf bala biad  |  id of useParams()
  console.log(productDetails);

  if (!productDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />

      <div className={styles.information}>
        <h3 className={styles.title}> {productDetails.title} </h3>
        <p className={styles.description}> {productDetails.description} </p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>

        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price}
          </span>

          <Link to="/products">
            <FaArrowLeft />
            <span> Back To Shop </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPages;
