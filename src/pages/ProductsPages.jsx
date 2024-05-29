import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

//Components
import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

//helpers
import {
  filterProducts,
  searchProducts,
  getInitialQuery,
} from "../helpers/helper";

//Context
// import { useProducts } from "../context/ProductContext";

//Style
import styles from "./ProductsPages.module.css";

function ProductsPages() {
  const dispatch = useDispatch();

  // const store = useSelector((state) => state.products);
  // const state = useSelector((store) => store.product);
  // console.log(state); //baraye didane marahel inja check mishe
  const { products, loading } = useSelector((store) => store.product);
  console.log(products);

  // const products = useProducts();
  // const products = [];
  // console.log(products);

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  //in useEffect mostaghel az baghie kar mikone va agar fetchProducts dar useEffect dige ejra mishod to halghe namotanahi mioftad
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //products
  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  //query search & categories
  useEffect(() => {
    // console.log(query);
    setSearchParams(query);
    setSearch(query.search || ""); //gereftane query az url(params)

    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    // console.log(finalProducts);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {/* {!displayed.length && <Loader />} */}
          {/* loading of redux store */}
          {loading && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPages;
